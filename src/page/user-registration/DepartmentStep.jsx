import { useState } from 'react';
import { Heading, Input } from '@chakra-ui/react';
import { UserRegistrationStepPageWrapper } from './UserRegistrationStepPageWrapper';

export function DepartmentStep({ name, onNext }) {
  const [department, setDepartment] = useState('');
  return (
    <UserRegistrationStepPageWrapper
      title={'단과대 선택'}
      onNext={() => {
        onNext(department);
      }}
    >
      <Heading fontSize={'25px'}>{name}님, 안녕하세요! 😀</Heading>
      <Heading size={'md'} mt={10}>
        단과대를 입력하세요
      </Heading>
      <Input
        mt={2}
        value={department}
        onChange={(e) => {
          setDepartment(e.target.value);
        }}
      />
    </UserRegistrationStepPageWrapper>
  );
}
