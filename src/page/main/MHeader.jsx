import openColor from 'open-color';
import { Box, Flex, HStack, Icon, Image, Show, Spacer } from '@chakra-ui/react';
import ca4uSVG from '../../assets/ca4u.svg';
import React from 'react';
import { IoHeartOutline, IoNotificationsOutline } from 'react-icons/io5';

export const MHeader = () => {
  return (
    <Box w={'full'}>
      <Show below={'sm'}>
        <Box>
          <Flex
            p={3}
            justify={'space-between'}
            bg={openColor.gray[0]}
            position={'fixed'}
            width={'full'}
            top={0}
            h={'54px'}
            zIndex={5}
          >
            <Flex align={'center'}>
              <Image src={ca4uSVG} alt="ca4u" h={'22px'} />
            </Flex>
            <Flex>
              <HStack>
                <Icon
                  boxSize={'24px'}
                  fontWeight={'bold'}
                  as={IoHeartOutline}
                  color={openColor.gray[7]}
                />
                <Icon
                  boxSize={'24px'}
                  as={IoNotificationsOutline}
                  color={openColor.gray[7]}
                />
              </HStack>
            </Flex>
          </Flex>
          <Spacer h={'60px'} />
        </Box>
      </Show>
      <Show above={'sm'}>
        <Box>
          <Flex
            p={3}
            justify={'space-between'}
            bg={openColor.gray[0]}
            position={'fixed'}
            width={'375px'}
            top={0}
            h={'54px'}
            zIndex={5}
          >
            <Flex align={'center'}>
              <Image src={ca4uSVG} alt="ca4u" h={'22px'} />
            </Flex>
            <Flex>
              <HStack>
                <Icon
                  boxSize={'24px'}
                  fontWeight={'bold'}
                  as={IoHeartOutline}
                  color={openColor.gray[7]}
                />
                <Icon
                  boxSize={'24px'}
                  as={IoNotificationsOutline}
                  color={openColor.gray[7]}
                />
              </HStack>
            </Flex>
          </Flex>
          <Spacer h={'60px'} />
        </Box>
      </Show>
    </Box>
  );
};
