import React from 'react';
import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import ca4uSVG from '../../assets/ca4u.svg';
import myIcon from '../../assets/my-icon.svg';
import searchIcon from '../../assets/search-icon.svg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  // 검색 이벤트 핸들러 수정
  const handleSearch = (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      // 검색어와 함께 state로 필터 상태도 전달할 수 있습니다
      navigate('/search', {
        state: {
          query: e.target.value.trim(),
          filters: {}, // 필요한 경우 초기 필터 상태 전달
        },
      });
    }
  };

  return (
    <Box bg="cauLightBlue" py={2} px={4} borderBottomRadius="2xl">
      <Flex flexDirection="column">
        <Flex align="Center" justify="space-between">
          <Flex align="Cener">
            <img src={ca4uSVG} alt="ca4u" height="2em" mr={2} />
            <Flex align="flex-start" flexDirection="column">
              <Text
                fontWeight="bold"
                fontSize="sm"
                color={'cauDarkBlue'}
                ml={2}
              >
                CLUB & ACADEMY{' '}
                <Text as="span" color="cauRed" display="inline">
                  4{' '}
                </Text>
                YOU
              </Text>
              <Text
                fontWeight="extrabold"
                fontSize="lg"
                color={'cauDarkBlue'}
                ml={2}
              >
                CAU 동아리 추천 서비스
              </Text>
            </Flex>
          </Flex>
          <Image
            src={myIcon}
            alt="내정보"
            height="2em"
            onClick={() => {
              navigate('/my');
            }}
          />
        </Flex>
        <InputGroup size="sm" mt={2} mb={1}>
          <InputLeftElement pointerEvents="none">
            <Image src={searchIcon} alt="검색" height="1.5em"></Image>
          </InputLeftElement>
          <Input
            borderRadius={'lg'}
            placeholder="동아리를 검색해보세요 ex. 코딩, 밴드, 연극, 타박네"
            bg="white"
            onKeyUp={handleSearch}
          />
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default Header;
