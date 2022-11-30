import { getQueryString } from '@/utils/common';

import api from './_http';

import type { GetLeasonsPayload, LeasonType } from '@/types/leason';

/**
 * 레슨 더미 조회
 * @methods GET
 */
export const getLeasons = (payload: GetLeasonsPayload) => {
  return api<{ results: LeasonType[] }>(`https://opentdb.com/api.php?` + getQueryString(payload));
};
