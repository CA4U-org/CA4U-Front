import { useState } from 'react';
import { Heading, Input } from '@chakra-ui/react';
import { UserRegistrationStepPageWrapper } from './UserRegistrationStepPageWrapper';

export function NameStep({ name: _name, onNext, onBefore }) {
  const [name, setName] = useState(_name);

  return (
    <UserRegistrationStepPageWrapper
      onNext={() => {
        onNext(name);
      }}
      onBefore={onBefore}
      title={'이름 입력'}
    >
      <Heading size={'md'}>이름을 입력하세요</Heading>
      <Input
        mt={2}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </UserRegistrationStepPageWrapper>
  );
}
