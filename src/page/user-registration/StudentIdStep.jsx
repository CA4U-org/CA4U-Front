import { useState } from 'react';
import { Heading, Input } from '@chakra-ui/react';
import { UserRegistrationStepPageWrapper } from './UserRegistrationStepPageWrapper';

export function StudentIdStep({ onNext }) {
  const [studentId, setStudentId] = useState('');
  return (
    <UserRegistrationStepPageWrapper
      onNext={() => {
        onNext(studentId);
      }}
      title={'학번 입력'}
    >
      <Heading size={'md'}>학번을 입력하세요</Heading>
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
