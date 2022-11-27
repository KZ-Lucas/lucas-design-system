import { useEffect, useMemo, useState } from 'react';

import { Flex } from '@/components/Atoms';
import SideNav from '@/components/Atoms/SideNav';
import Text from '@/components/Atoms/Text';
import LeasonNavItem from '@/components/Organisms/components/leasons/LeasonNavItem';
import LeasonsLayout from '@/components/Organisms/layouts/leasons';
import useLeasons from '@/hooks/@features/useLeasons';

import type { LeasonType } from '@/services/leasons';

type LeasonCardProps = {
  leason: LeasonType;
};

// TODO: SoC Needed
const LeasonCard = (props: LeasonCardProps) => {
  const { leason } = props;
  const { question, incorrect_answers, correct_answer } = leason;

  return (
    <Flex direction="column">
      <Text color="white" typography="large">
        {question}
      </Text>

      {incorrect_answers.map((answer) => (
        <Text key={answer} typography="large">
          {answer}
        </Text>
      ))}
      <Text typography="large">{correct_answer}</Text>
    </Flex>
  );
};

const Leasons = () => {
  const { data: leasonList } = useLeasons();
  const [selectNavItem, setSelectNavItem] = useState<string>();

  useEffect(() => {
    if (leasonList?.length) {
      setSelectNavItem(leasonList[0].id);
    }
  }, [leasonList]);

  const selectedQuestion = useMemo(() => {
    return leasonList?.find(({ id }) => id === selectNavItem);
  }, [leasonList, selectNavItem]);

  return (
    <LeasonsLayout onSubmit={() => null}>
      <LeasonsLayout.Header align="center">
        <Text typography="base" color="white">
          문제 풀기
        </Text>
      </LeasonsLayout.Header>

      <LeasonsLayout.Body>
        <SideNav
          onSelect={(eventKey) => {
            setSelectNavItem(eventKey);
          }}
        >
          <SideNav.Nav>
            {leasonList?.map((leason) => (
              <LeasonNavItem
                eventKey={leason.id}
                key={leason.id}
                active={leason.id === selectNavItem}
              />
            ))}
          </SideNav.Nav>
        </SideNav>

        <Flex px={6} py={6}>
          {selectedQuestion && <LeasonCard leason={selectedQuestion} />}
        </Flex>
      </LeasonsLayout.Body>

      <LeasonsLayout.Footer></LeasonsLayout.Footer>
    </LeasonsLayout>
  );
};

export default Leasons;
