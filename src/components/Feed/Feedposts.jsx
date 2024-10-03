import { Container, Flex, Skeleton, SkeletonCircle, VStack, Box } from '@chakra-ui/react'
import Feedpost from './Feedpost'
import { useEffect, useState } from 'react'

const Feedposts = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <Container maxW={'container.sm'} py={2} px={2}>
      {isLoading && [0, 1, 2, 3].map((_, idx) => { return <>
        <VStack key={idx} gap={4} alignItems={'flex-start'} mb={10}>
          <Flex gap={2}>
            <SkeletonCircle size='10'/>
            <VStack gap={2} alignItems={'flex-start'}>
              <Skeleton h={'10px'} w={'200px'}/>
              <Skeleton h={'10px'} w={'125px'}/>
            </VStack>
          </Flex>
          <Skeleton w={'full'}>
            <Box h={'500px'}>Secret Message</Box>
          </Skeleton>
        </VStack>
        </>
      })}

      {!isLoading &&
        <>
          <Feedpost img='/img2.png' username='Master Chief'  avatar='/img2.png'/>
          <Feedpost img='/img3.png' username='Sonic'         avatar='/img3.png'/>
          <Feedpost img='/img4.png' username='Slayer'        avatar='/img4.png'/>
          <Feedpost img='/img1.png' username='Khan Maykr'    avatar='/img1.png'/>
        </>
      }
    </Container>
  )
}

export default Feedposts