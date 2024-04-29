import { Box, HStack, Image, Text } from "@chakra-ui/react"
import logo from '../assets/logo.webp'


const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='80px' />
        <Text>Nav-Bar</Text>
    </HStack>
  )
}

export default NavBar