import { useState } from 'react';
import { Heading, Input } from '@chakra-ui/react';
import { UserRegistrationStepPageWrapper } from './UserRegistrationStepPageWrapper';

export function MajorStep({ name, department, onNext }) {
  const [major, setMajor] = useState('');
  return (
    <UserRegistrationStepPageWrapper
      title={'전공 선택'}
      onNext={() => {
        onNext(major);
      }}
    >
      <Heading fontSize={'25px'}>{name}님, 안녕하세요! 😀</Heading>
      <Heading size={'md'} mt={10}>
        전공을 입력하세요
      </Heading>
      <Input
        mt={2}
        value={major}
        onChange={(e) => {
          setMajor(e.target.value);
        }}
      />
    </UserRegistrationStepPageWrapper>
  );
}
