import { Box, Container, Flex } from "@chakra-ui/react"
import Feedposts from "../../components/Feed/Feedposts"
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers"

const HomePage = () => {
  return (
    <Container maxW={'container.lg'}>
      <Flex gap={20} justifyContent={'center'}>

        <Box flex={2} py={20}>
          <Feedposts/>
        </Box>

        <Box flex={3} mr={20} display={{base: 'none', md: 'none', lg: 'block'}} maxW={'300px'}>
          <SuggestedUsers/>
        </Box>

      </Flex>
    </Container>
  )
}

export default HomePage