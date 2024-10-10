import {Box} from "@chakra-ui/react";

export function MobileFrameWrapper(props) {
    return (
        <Box bg={'#eee'} w={'100vw'}>
            <Box m={'0 auto'} w={{base: 'full', md: '375px'}} bg={'white'} overflow={'scroll'}>
                {props.children}
            </Box>
        </Box>
    )
}