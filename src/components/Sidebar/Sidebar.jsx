import { Avatar, Box, Flex, Link, Tooltip } from "@chakra-ui/react"
import { Route, Link as RouterLink } from "react-router-dom"
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from "../../assets/constants"
import { AiFillHome } from "react-icons/ai"
import { BiLogOut } from "react-icons/bi"
import { text } from "framer-motion/client"

const SideBar = () => {
  const SidebarItems = [
    {
      icon: <AiFillHome size={25}/>,
      text: 'Home',
      link: '/'
    },
    {
      icon: <SearchLogo/>,
      text: 'Search'
    },
    {
      icon: <NotificationsLogo/>,
      text: 'Notification'
    },
    {
      icon: <CreatePostLogo/>,
      text: 'Create'
    },
    {
      icon: <Avatar size={'sm'} name='Burak Orkmez' src='/1.png'/>  ,
      text: 'Profile',
      link: '/asaprogrammer'
    }
  ]

  return (
    <Box height={'100vh'} borderRight={'1px solid'} borderColor={'whiteAlpha.700'} py={8} position={'sticky'} top={0} left={0} px={{base: 2, md: 4}}>
      <Flex direction={'column'} gap={10} w={'full'} h={'full'}>

        <Link to={'/'} as={RouterLink} pl={2} display={{base: 'none', md: 'block'}} cursor={'pointer'}>
          <InstagramLogo/>
        </Link>

        <Link to={'/'} as={RouterLink} p={2} display={{base: 'block', md: 'none'}} cursor={'pointer'} borderRadius={6} _hover={{bg:'whiteAlpha.300'}} w={10}>
          <InstagramMobileLogo/>
        </Link>

        <Flex direction={'column'} gap={5} cursor={'pointer'}>
          {SidebarItems.map((item, index) => (
            <Tooltip key={index} hasArrow label={item.text} placement="right" openDelay={150} display={{base: 'block', md: 'none'}} bgColor={'white'}>
              <Link display={'flex'} to={item.link || null} as={RouterLink} alignItems={'center'} gap={4} _hover={{bg:'whiteAlpha.300'}} p={2} w={{base: 10, md: 'full'}} borderRadius={5}>
                {item.icon}
                <Box display={{base: 'none', md: 'block'}}>
                  {item.text}
                </Box>
              </Link>
            </Tooltip>
          ))}
        </Flex>
          <Tooltip hasArrow label={'LogOut'} placement="right" openDelay={150} display={{base: 'block', md: 'none'}} bgColor={'white'}>
            <Link display={'flex'} to={'/auth'} as={RouterLink} alignItems={'center'} gap={4} _hover={{bg:'whiteAlpha.300'}} p={2} w={{base: 10, md: 'full'}} borderRadius={5} mt={'auto'}>
              <BiLogOut/>
              <Box display={{base: 'none', md: 'block'}}>
                Logout
              </Box>
            </Link>
          </Tooltip>
      </Flex>
    </Box>
  )
}

export default SideBar