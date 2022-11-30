import { format } from 'date-fns';

import { Flex, Typography } from '@/components/Atoms';
import useTimerStore from '@/store/@features/timer';

const ResultTimerSection = () => {
  const { stopTimer } = useTimerStore();

  return (
    <Flex>
      <Typography size="lg" color="blueGray.100">
        ⌛ {format(stopTimer(), 'm분 ss초')}
      </Typography>
    </Flex>
  );
};

export default ResultTimerSection;
