import { Box, Image } from "@chakra-ui/react"
import Postfooter from "./Postfooter"
import Postheader from "./Postheader"

const Feedpost = ({img, username, avatar}) => {
  return (
    <>
        <Postheader username={username} avatar={avatar}/>
        <Box my={4}>
            <Image src={img} alt="User Picture" borderRadius={15}/>
        </Box>
        <Postfooter username={username}/>
    </>
  )
}

export default Feedpost