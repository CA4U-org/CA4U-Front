import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const AffiliationViewButton = ({ mainText, subText, icon }) => {
  return (
    <Flex
      direction="column"
      align="flex-start"
      width="full"
      bg="white"
      whiteSpace="normal"
      boxShadow={'md'}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      wordBreak="break-word"
      p={2}
      w={'full'}
      position={'relative'}
      borderRadius={'lg'}
    >
      <Box
        position="absolute"
        bottom="0"
        right={0}
        width="50%"
        height="50%"
        backgroundImage={`url(${icon})`}
        backgroundSize="contain" /* 이미지가 잘리지 않게 설정 */
        backgroundPosition="center" /* 이미지를 중앙에 배치 */
        backgroundRepeat="no-repeat" /* 이미지 반복 방지 */
        opacity={0.3} /* 반투명 효과 */
        pointerEvents="none" /* 배경 클릭 방지 */
      />
      <Text
        fontSize="ml"
        fontWeight="extrabold"
        color="cauBlue"
        mb={1}
        noOfLines={1}
      >
        {mainText}
      </Text>
      <Text
        fontSize="small"
        color="cauBlue"
        mt="1"
        noOfLines={2}
        textAlign="left"
        fontWeight={500}
      >
        {subText}
      </Text>
    </Flex>
  );
};

export default AffiliationViewButton;
