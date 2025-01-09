import { Flex, Icon, useDisclosure } from '@chakra-ui/react';
import { IoChevronDownSharp, IoReloadSharp } from 'react-icons/io5';
import openColor from 'open-color';
import { FilterItemSelectingModal } from './FilterItemSelectingModal';

export const Filters = ({ condition, setCondition }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        py={3}
        color={'black'}
        overflowX={'scroll'}
        wrap={'nowrap'}
        className={'hide-scrollbar'}
        gap={2}
      >
        <RefreshFilter />
        <FilterItem title={'모집중'} onClick={onOpen} />
        <FilterItem
          title={'카테고리'}
          selected={condition.categories}
          onClick={onOpen}
        />
        <FilterItem title={'단위'} selected={condition.campusScope} />
        <FilterItem title={'단과대'} selected={condition.collegeId} />
      </Flex>
      <FilterItemSelectingModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        condition={condition}
        setCondition={setCondition}
      />
    </>
  );
};

const getSelectSummary = (selected) => {
  if (!selected || (Array.isArray(selected) && selected.length == 0)) {
    return '';
  } else if (selected.length === 1) {
    return ':' + selected[0];
  } else {
    return `: ${selected[0]} 외 ${selected.length - 1} 건`;
  }
};

const FilterItem = ({ title, selected, onClick }) => {
  const selectedSummary = getSelectSummary(selected);
  return (
    <Flex
      onClick={onClick}
      shrink={0}
      px={3}
      py={1}
      align={'center'}
      bg={selectedSummary === '' ? 'white' : openColor.blue[7]}
      borderRadius={'2xl'}
      border={'1px solid'}
      borderColor={openColor.gray[3]}
      color={selectedSummary === '' ? openColor.gray[7] : 'white'}
      fontSize={'sm'}
    >
      {title}
      {selectedSummary} <Icon as={IoChevronDownSharp} ml={1} />
    </Flex>
  );
};

const RefreshFilter = () => {
  return (
    <Flex
      shrink={0}
      px={3}
      py={1}
      align={'center'}
      bg={'white'}
      borderRadius={'2xl'}
      border={'1px solid'}
      borderColor={openColor.gray[3]}
      color={openColor.gray[7]}
    >
      <Icon as={IoReloadSharp} />
    </Flex>
  );
};
