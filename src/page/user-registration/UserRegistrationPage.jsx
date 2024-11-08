import { useFunnel } from '@use-funnel/react-router-dom';
import { RegistrationSteps } from './steps';
import { DepartmentStep } from './DepartmentStep';
import { MajorStep } from './MajorStep';
import { NameStep } from './NameStep';
import { CompleteStep } from './CompleteStep';

export function UserRegistrationPage() {
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
          onNext={(name) => {
            funnel.history.push(RegistrationSteps.DEPARTMENT, { name });
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
        />
      );
    case RegistrationSteps.COMPLETE:
      return <CompleteStep {...funnel.context}></CompleteStep>;
  }
}