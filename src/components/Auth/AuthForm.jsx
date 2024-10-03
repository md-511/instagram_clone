import { Box, VStack, Input, Image, Flex, Text, Button } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthForm = () => {
  const [isLogin, setIsLogIn] = useState(true)
  const navigate = useNavigate()
  const [input, setInput] = useState({
    email:       '',
    password:    '',
    confirmPass: '',
  })

  const handelEvents = () => {
    if (!input.email || !input.password) {
        alert("Please Fill in All the details")
        return
    }
    navigate('/')
  }

  return (
    <>
        <Box border={"2px solid gray"} borderRadius={15} padding={5}>
        <VStack spacing={5}>  
            <Image src='/logo.png' alt='Instagram' w={'80%'}/>

            <Input placeholder='Email' variant={'flushed'} type='email' fontSize={'md'} value={input.email} onChange={(e) => setInput({...input, email: e.target.value})}/>
            <Input placeholder='Password' variant={'flushed'} type='password' fontSize={'md'} value={input.password} onChange={(e) => setInput({...input, password: e.target.value})}/>

            {!isLogin ? (
                <Input placeholder='Confirm Password' variant={'flushed'} type='password' fontSize={'md'} value={input.confirmPass} onChange={(e) => setInput({...input, confirmPass: e.target.value})}/>
            ) : null}

            <Button w={'full'} colorScheme='blue' size={'sm'} fontSize={14} onClick={handelEvents}>
                {isLogin ? "Log In" : "Sign Up"}
            </Button>

            <Flex w={'full'} justifyContent={'center'} alignItems={'center'} gap={2}>
                <Box h={'1px'} flex={1} bgColor={'gray'}/>
                <Text fontSize={'md'} color={'white'}>OR</Text>
                <Box h={'1px'} flex={1} bgColor={'gray'}/>
            </Flex>

            <Flex w={'full'} justifyContent={'center'} alignItems={'center'} gap={3} cursor={'pointer'}>
                <Image src='/google.png' h={5}/>
                <Text color={'blue.100'}>Log In using Google</Text>
            </Flex>

        </VStack>
        </Box>

        <Box border={'2px solid gray'} borderRadius={15} padding={5}>
            <Flex w={'full'} justifyContent={'center'} alignItems={'center'} gap={2}>
                <Text fontSize={16}>
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                </Text>
                <Button onClick={() => setIsLogIn(!isLogin)} variant={'link'} fontSize={16} color={'blue.200'}>
                    {isLogin ? "Create Account" : "Click Here"}
                </Button>
            </Flex>
        </Box>
    </>
  )
}

export default AuthForm