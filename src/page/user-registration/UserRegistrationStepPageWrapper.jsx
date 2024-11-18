import { Box, Button, Show } from '@chakra-ui/react';
import TopHeader from '../../components/Header/Header';
import { PageWrapper } from '../PageWrapper';

export function UserRegistrationStepPageWrapper({
  children,
  onNext,
  onBefore,
  title,
}) {
  return (
    <PageWrapper>
      <TopHeader title={title} onClickBefore={onBefore} />
      <Box flexGrow={1} p={3}>
        {children}
      </Box>
      <Show above={'sm'}>
        <Button
          colorScheme={'blue'}
          w={'full'}
          borderRadius={'0'}
          size={'lg'}
          onClick={onNext}
        >
          다음
        </Button>
      </Show>
      <Show below={'sm'}>
        <Button
          colorScheme={'blue'}
          position={'fixed'}
          bottom={0}
          w={'full'}
          borderRadius={'0'}
          size={'lg'}
          onClick={onNext}
        >
          다음
        </Button>
      </Show>
    </PageWrapper>
  );
}
