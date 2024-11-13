import { useState } from 'react';
import { Heading, Input } from '@chakra-ui/react';
import { UserRegistrationStepPageWrapper } from './UserRegistrationStepPageWrapper';

export function StudentIdStep({ name, id, onNext, onBefore }) {
  const [studentId, setStudentId] = useState(id);
  return (
    <UserRegistrationStepPageWrapper
      onNext={() => {
        onNext(studentId);
      }}
      onBefore={onBefore}
      title={'학번 입력'}
    >
      <Heading size={'md'}>이름을 입력하세요</Heading>
      <Input mt={2} value={name} disabled={true} />
      <Heading size={'md'} mt={5}>
        학번을 입력하세요
      </Heading>
      <Input
        mt={2}
        value={studentId}
        onChange={(e) => {
          setStudentId(e.target.value);
        }}
      />
    </UserRegistrationStepPageWrapper>
  );
}
