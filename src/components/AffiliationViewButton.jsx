import React from 'react';
import { Box, Button, Text, Image, Flex } from '@chakra-ui/react';

const AffiliationViewButton = ({ mainText, subText, icon }) => {
  return (
    <Button
      height="auto"
      bg="white"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="xl"
      boxShadow="md"
      whiteSpace="normal"
      p={2}
      _hover={{ bg: 'gray.50' }}
      _acive={{ bg: 'gray.100' }}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      wordBreak="break-word"
      position="relative"
    >
      <Flex
        direction="column"
        align="flex-start"
        width="full"
        minHeight={'60px'}
      >
        <Text
          fontSize="ml"
          fontWeight="extrabold"
          color=" cauBlue "
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
        >
          {subText}
        </Text>
        <Box position="absolute" bottom={-1} right={-2}>
          <Image
            src={icon}
            alt="이미지"
            boxSize="40px"
            ml="auto"
            alignSelf="flex-end"
          ></Image>
        </Box>
      </Flex>
    </Button>
  );
};

export default AffiliationViewButton;
