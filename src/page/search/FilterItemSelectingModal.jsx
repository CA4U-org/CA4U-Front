import {
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import openColor from 'open-color';
import { CATEGORY_LIST } from './ClubData';
import { useEffect, useRef, useState } from 'react';
import { findClubsWithCondition } from '../../api/club/clubApi';

export const FilterItemSelectingModal = ({
  isOpen,
  onClose,
  condition,
  setCondition,
}) => {
  const [size, setSize] = useState(findClubsWithCondition(condition).length);

  const clearCategoryCondition = () => {
    const newCondition = {
      ...condition,
      categories: [],
    };

    setCondition(newCondition);
    setSize(findClubsWithCondition(newCondition).length);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size={'xs'}>
      <ModalOverlay />
      <ModalContent>
        <Flex direction={'column'}>
          <ModalCloseButton />
          <ModalHeader textAlign={'center'} p={3} fontSize={'lg'}>
            필터
          </ModalHeader>
          <CategorySelect
            condition={condition}
            setCondition={setCondition}
            setSize={setSize}
          />

          <ModalFooter>
            <Flex justify={'space-between'} w={'full'} gap={3}>
              <Button
                ml={3}
                onClick={clearCategoryCondition}
                borderRadius={'lg'}
                border={'1px solid'}
                borderColor={openColor.gray[3]}
                fontSize={'sm'}
                bg={'white'}
              >
                초기화
              </Button>
              <Button
                bg={openColor.gray[8]}
                color={openColor.gray[0]}
                mr={3}
                onClick={onClose}
                flexGrow={3}
                fontSize={'sm'}
              >
                총 <RollingNumber value={size} />개 보기
              </Button>
            </Flex>
          </ModalFooter>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

const CategorySelect = ({ condition, setCondition, setSize }) => {
  const categories = condition.categories;

  const toggleCategory = (target) => {
    let newCondition;

    if (condition.categories.includes(target)) {
      // 이미 포함된 경우 제거
      newCondition = {
        ...condition,
        categories: condition.categories.filter(
          (category) => category !== target
        ),
      };
    } else {
      // 포함되지 않은 경우 추가
      newCondition = {
        ...condition,
        categories: [...condition.categories, target],
      };
    }

    // 상태 업데이트
    setCondition(newCondition);

    setSize(findClubsWithCondition(newCondition).length);
  };

  return (
    <Flex direction={'column'} px={7} gap={2}>
      <CheckboxGroup>
        {CATEGORY_LIST.map((c) => {
          return (
            <Checkbox
              key={c.title}
              isChecked={categories.includes(c.title)}
              onChange={() => {
                toggleCategory(c.title);
              }}
            >
              {c.title}
            </Checkbox>
          );
        })}
      </CheckboxGroup>
    </Flex>
  );
};

const RollingNumber = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(value); // 초기값을 value로 설정
  const previousValue = useRef(value);
  const intervalRef = useRef(null);

  useEffect(() => {
    const startValue = previousValue.current;

    if (startValue === value) return; // 값이 같으면 롤링하지 않음

    let current = startValue;
    const direction = value > startValue ? 1 : -1;

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      current += direction;
      if (
        (direction > 0 && current >= value) ||
        (direction < 0 && current <= value)
      ) {
        clearInterval(intervalRef.current);
        current = value;
      }
      setDisplayValue(current);
    }, 15);

    previousValue.current = value;
    return () => clearInterval(intervalRef.current);
  }, [value]);

  return <Text mx={1}>{displayValue}</Text>;
};
