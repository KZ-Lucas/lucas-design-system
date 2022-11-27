import { Flex, Text } from '@/components/Atoms';
import PrepareNextButton from '@/components/Organisms/components/prepare/PrepareNextButton';
import PrepareLayout from '@/components/Organisms/layouts/prepare';

const Prepare = () => {
  return (
    <PrepareLayout>
      <PrepareLayout.Body direction="column" align="center" justify="center">
        <Text typography="5xlarge" color="orange.400">
          Music
        </Text>
        <Text typography="5xlarge" color="white">
          랜덤 퀴즈
        </Text>

        <Flex mt={6}>
          <PrepareNextButton>퀴즈 풀기</PrepareNextButton>
        </Flex>
      </PrepareLayout.Body>
    </PrepareLayout>
  );
};

export default Prepare;
