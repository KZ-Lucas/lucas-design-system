import { Flex, Typography } from '@/components/Atoms';
import PrepareLayout from '@/components/Organisms/layouts/prepare';
import PreparePlaySection from '@/components/Organisms/sections/prepare/PreparePlaySection';

const Prepare = () => {
  return (
    <PrepareLayout>
      <PrepareLayout.Body direction="column" align="center" justify="center">
        <Typography size="5xl" color="orange.400">
          Music
        </Typography>
        <Typography size="5xl" color="white">
          랜덤 퀴즈
        </Typography>

        <Flex mt={12}>
          <PreparePlaySection />
        </Flex>
      </PrepareLayout.Body>
    </PrepareLayout>
  );
};

export default Prepare;
