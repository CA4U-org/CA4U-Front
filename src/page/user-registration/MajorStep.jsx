import { useState } from 'react';
import { Heading, Select } from '@chakra-ui/react';
import { UserRegistrationStepPageWrapper } from './UserRegistrationStepPageWrapper';

export function MajorStep({ name, department, onNext }) {
  const [major, setMajor] = useState('');

  let majorList;
  switch (department) {
    case '인문대학':
      majorList = [
        '국어국문학과',
        '영어영문학과',
        '유럽문화학부',
        '아시아문화학부',
        '철학과',
        '역사학과',
      ];
      break;
    case '사회과학대학':
      majorList = [
        '정치국제학과',
        '공공인재학부',
        '심리학과',
        '문헌정보학과',
        '사회복지학부',
        '미디어커뮤니케이션학부',
        '도시계획·부동산학과',
        '사회학과',
      ];
      break;
    case '사범대학':
      majorList = ['교육학과', '유아교육과', '영어교육과', '체육교육과'];
      break;
    case '자연과학대학':
      majorList = ['물리학과', '화학과', '생명과학과', '수학과'];
      break;
    case '생명공학대학':
      majorList = ['생명자원공학부', '식품공학부', '시스템생명공학과'];
      break;
    case '공과대학':
      majorList = [
        '사회기반시스템공학부',
        '건축학부',
        '화학공학과',
        '기계공학부',
        '에너지시스템공학부',
        '첨단소재공학과',
      ];
      break;
    case '창의ICT공과대학':
      majorList = ['전자전기공학부', '융합공학부', '차세대반도체학과'];
      break;
    case '소프트웨어대학':
      majorList = ['소프트웨어학부', 'AI학과'];
      break;
    case '경영경제대학':
      majorList = [
        '경영학부',
        '경제학부',
        '응용통계학과',
        '광고홍보학과',
        '국제물류학과',
        '지식경영학부',
        '산업보안학과',
      ];
      break;
    case '의과대학':
      majorList = ['의학부'];
      break;
    case '약학대학':
      majorList = ['약학부'];
      break;
    case '적십자간호대학':
      majorList = ['간호학과'];
      break;
    case '예술대학':
      majorList = [
        '공연영상창작학부(서울)',
        '공연영상창작학부(다빈치)',
        '미술학부',
        '디자인학부',
        '음악학부',
        '전통예술학부',
        '글로벌예술학부',
      ];
      break;
    case '예술공학대학':
      majorList = ['예술공학부'];
      break;
    case '체육대학':
      majorList = ['스포츠과학부'];
      break;
    default:
      majorList = [];
  }

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
      <Select
        mt={2}
        value={major}
        onChange={(e) => {
          setMajor(e.target.value);
        }}
      >
        {majorList.map((major) => (
          <option key={major} value={major}>
            {major}
          </option>
        ))}
      </Select>
    </UserRegistrationStepPageWrapper>
  );
}
