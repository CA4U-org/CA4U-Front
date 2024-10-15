import React from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import ca4uSVG from './assets/ca4u.svg';
import myIcon from './assets/my-icon.svg';
import searchIcon from './assets/search-icon.svg';

const Header = () => {
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
          <Image src={myIcon} alt="내정보" height="2em" />
        </Flex>
        <InputGroup size="xs">
          <InputLeftElement pointerEvents="none">
            <Image src={searchIcon} alt="검색" height="1.5em"></Image>
          </InputLeftElement>
          <Input
            placeholder="동아리를 검색해보세요 ex. 코딩, 밴드, 연극, 타박네"
            bg="white"
            width="100%"
          />
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default Header;
