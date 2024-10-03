import AuthForm from '../../components/Auth/AuthForm'
import { Flex, Container, Box, Image, VStack } from '@chakra-ui/react'

const AuthPage = () => {
  return (
    <Flex minW={'100vw'} minH={"100vh"} justifyContent={"center"} alignItems={"center"}>

        <Container maxW={"container.md"} padding={0}>

          <Flex gap={5} justifyContent={'center'} alignItems={'center'}>

            <Box display={{base: "none", md: "block"}}>
              <Image src='/auth.png' h={650} alt='Picture'/>
            </Box>
            
            <VStack spacing={4} align={"stretch"}>
              <AuthForm/>
              <Box textAlign={"center"}>
                Get the App
              </Box>
              <Flex gap={5} justifyContent={"center"}>
                <Image src='/microsoft.png' h={10} alt='microsoft'/>
                <Image src='/playstore.png' h={10} alt='playstore'/>
              </Flex>
            </VStack>

          </Flex>

        </Container>

    </Flex>
  )
}

export default AuthPage