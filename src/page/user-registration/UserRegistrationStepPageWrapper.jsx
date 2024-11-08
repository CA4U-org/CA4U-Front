import { Box, Button } from '@chakra-ui/react';
import TopHeader from '../../components/TopHeader';
import { PageWrapper } from '../PageWrapper';

export function UserRegistrationStepPageWrapper({ children, onNext, title }) {
  return (
    <PageWrapper>
      <TopHeader title={title} />
      <Box flexGrow={1} p={3}>
        {children}
      </Box>
      <Button
        colorScheme={'blue'}
        w={'full'}
        borderRadius={'0'}
        size={'lg'}
        onClick={onNext}
      >
        다음
      </Button>
    </PageWrapper>
  );
}
