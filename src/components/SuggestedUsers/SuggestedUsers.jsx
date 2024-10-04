import SuggestedUser from "./SuggestedUser"
import SuggestedHeader from "./SuggestedHeader"
import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react"

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader/>
        <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'}>
            <Text fontSize={12} fontWeight={'bold'} color={'gray.500'}>
                Suggested For You
            </Text>
            <Text fontSize={12} fontWeight={'bold'} _hover={{color: 'gray.400'}} cursor={'pointer'}>
                See All
            </Text>
        </Flex>
        <SuggestedUser name="Freak Bob" followers={1800} avatar="/img1.png"/>
        <SuggestedUser name="Diddy" followers={465} avatar="/img1.png"/>
        <SuggestedUser name="Drake" followers={23} avatar="/img1.png"/>

        <Box fontSize={12} color={'gray.500'} mt={5} alignSelf={'start'}>
            © 2024 {' '}
            <Link href="https://github.com/md-511" target="_blank" color={'blue.500'} fontSize={14} sx={{textDecoration: 'none !important'}}>^_^</Link>
        </Box>
    </VStack>
  )
}

export default SuggestedUsers