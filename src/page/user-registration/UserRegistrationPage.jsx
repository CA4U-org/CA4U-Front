import { useFunnel } from '@use-funnel/react-router-dom';
import { RegistrationSteps } from './steps';
import { DepartmentStep } from './DepartmentStep';
import { MajorStep } from './MajorStep';
import { NameStep } from './NameStep';
import { StudentIdStep } from './StudentIdStep';
import { CompleteStep } from './CompleteStep';
import { useToast } from '@chakra-ui/react';

export function UserRegistrationPage() {
  const toast = useToast();
  const funnel = useFunnel({
    id: 'register',
    initial: {
      step: RegistrationSteps.NAME,
      context: {},
    },
  });

  switch (funnel.step) {
    case RegistrationSteps.NAME:
      return (
        <NameStep
          {...funnel.context}
          onNext={(name) => {
            funnel.history.push(RegistrationSteps.ID, {
              ...funnel.context,
              name,
            }); // NAME -> ID
          }}
          onBefore={() => {
            toast({
              title: '정보를 입력해주세요 ㅠ ㅠ',
              status: 'error',
              duration: 3000,
              isClosable: true,
            });
          }}
        />
      );
    case RegistrationSteps.ID: // 대소문자 수정
      return (
        <StudentIdStep
          {...funnel.context}
          onNext={(id) =>
            funnel.history.push(RegistrationSteps.DEPARTMENT, {
              ...funnel.context,
              id,
            })
          }
          onBefore={() => {
            funnel.history.push(RegistrationSteps.NAME, { ...funnel.context });
          }}
        />
      );
    case RegistrationSteps.DEPARTMENT:
      return (
        <DepartmentStep
          {...funnel.context}
          onNext={(department) =>
            funnel.history.push(RegistrationSteps.MAJOR, {
              ...funnel.context,
              department,
            })
          }
          onBefore={() => {
            funnel.history.push(RegistrationSteps.ID, {
              ...funnel.context,
            });
          }}
        />
      );
    case RegistrationSteps.MAJOR:
      return (
        <MajorStep
          {...funnel.context}
          onNext={(major) =>
            funnel.history.push(RegistrationSteps.COMPLETE, {
              ...funnel.context,
              major,
            })
          }
          onBefore={() => {
            funnel.history.push(RegistrationSteps.DEPARTMENT, {
              ...funnel.context,
            });
          }}
        />
      );
    case RegistrationSteps.COMPLETE:
      return <CompleteStep {...funnel.context}></CompleteStep>;
  }
}
