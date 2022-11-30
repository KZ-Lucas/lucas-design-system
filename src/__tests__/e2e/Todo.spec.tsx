import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';
import parseHtml from 'html-react-parser';
import { BrowserRouter } from 'react-router-dom';

import App from '@/App';
import CommonProvider from '@/components/Providers/CommonProvider';
import { ThemeProvider } from '@/components/Providers/ThemeProvider';
import { RoutePage } from '@/constants/routes';
import useLeasons from '@/hooks/useLeasons';

import { renderWithRouter } from '../../testing';

import type { ReactNode } from 'react';

const queryClient = new QueryClient();

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <CommonProvider>{children}</CommonProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

describe(`[E2E] 풀이를 진행한 총 10문제에 대해 오답노트 정리가 잘 되는가?`, () => {
  it('맞은 개수 5, 틀린 개수 5', async () => {
    renderWithRouter(<App />, { route: RoutePage.root.prepare, wrapper: Wrapper });

    const user = userEvent.setup();

    /** 문제 풀기 버튼 클릭 */
    await user.click(
      screen.getByRole('button', {
        name: '문제 풀기',
      }),
    );

    const { result, waitFor } = renderHook(() => useLeasons(), {
      wrapper: ({ children }: { children: ReactNode }) => (
        <BrowserRouter>{Wrapper({ children })}</BrowserRouter>
      ),
    });

    /** 문제 풀기 전, 문제 데이터를 API 요청을 통해 스토어에 저장 */
    await waitFor(() => !!result.current.leasonList.length, { timeout: 10_000 });
    const leasonLength = result.current.leasonList.length;

    await waitFor(
      () => {
        return screen.getAllByRole('button').length === 4;
      },
      { timeout: 10_000 },
    );

    for (let i = 0; i < leasonLength; i++) {
      const currentLeason = result.current.leasonList[i];

      if (i < 5) {
        await user.click(
          screen.getByRole('button', {
            name: parseHtml(currentLeason.correct_answer) as string,
          }),
        );
      } else {
        await user.click(
          screen.getByRole('button', {
            name: parseHtml(currentLeason.incorrect_answers[0]) as string,
          }),
        );
      }
      await user.click(
        screen.getByRole('button', {
          name: '다음 문제',
        }),
      );
    }

    expect(screen.getAllByRole('answer-note-card-correct').length).toBe(5);
    expect(screen.getAllByRole('answer-note-card-incorrect').length).toBe(5);
  });
});
