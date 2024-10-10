import {Box, Flex, Image, Show, Text} from "@chakra-ui/react";
import CA4UIcon from "./assets/ca4u-icon.png";

function Branding() {
    return (
        <Flex
            direction={'column'}
            align={'center'}
        >
            <Image src={CA4UIcon} w={'100px'} h={'44px'} />
            <Text
                mt={3}
                fontFamily={'Noto Sans KR'}
                fontWeight={'bold'}
                fontSize={'xl'}
                color={'#1b438c'}
            >
                Club & Academy <span style={{color:'red'}}>4</span> U
            </Text>
            <Text mt={1} fontSize={'sm'} color={'gray'}>동아리가 당신의 손안에</Text>
        </Flex>
    )
}
export function MobileFrameWrapper(props) {
    return (
        <Flex bg={'#eee'} w={'100vw'} direction={'row'}>
            <Flex m={'0 auto'} direction={'row'}>
                <Show above={'sm'}>
                    <Flex w={'sm'} align={'center'} justify={'center'} direction={'column'}>
                        <Branding />
                    </Flex>
                </Show>
                <Box
                    w={{base: 'full', sm: '375px'}}
                    h={'100vh'}
                    overflowY={'scroll'}
                    bgColor={'white'}
                >
                    {/*이 곳에 애플리케이션 화면이 들어옵니다.*/}
                    {props.children}
                </Box>
            </Flex>

        </Flex>
    )
}