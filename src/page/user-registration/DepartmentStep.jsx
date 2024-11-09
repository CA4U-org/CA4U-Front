import { useState } from 'react';
import { Heading, Select } from '@chakra-ui/react';
import { UserRegistrationStepPageWrapper } from './UserRegistrationStepPageWrapper';

export function DepartmentStep({ name, onNext }) {
  const [department, setDepartment] = useState('인문대학');
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
      <Select
        mt={2}
        value={department}
        onChange={(e) => {
          setDepartment(e.target.value);
        }}
      >
        <option value="인문대학">인문대학</option>
        <option value="사회과학대학">사회과학대학</option>
        <option value="사범대학">사범대학</option>
        <option value="자연과학대학">자연과학대학</option>
        <option value="생명공학대학">생명공학대학</option>
        <option value="공과대학">공과대학</option>
        <option value="창의ICT공과대학">창의ICT공과대학</option>
        <option value="소프트웨어대학">소프트웨어대학</option>
        <option value="경영경제대학">경영경제대학</option>
        <option value="의과대학">의과대학</option>
        <option value="약학대학">약학대학</option>
        <option value="적십자간호대학">적십자간호대학</option>
        <option value="예술대학">예술대학</option>
        <option value="예술공학대학">예술공학대학</option>
        <option value="체육대학">체육대학</option>
      </Select>
    </UserRegistrationStepPageWrapper>
  );
}
