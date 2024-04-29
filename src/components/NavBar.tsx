import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    // HStack element is used to display horizontally and text will be next to Image(horizontally)
    <HStack>
      <Image src={logo} boxSize="80px" />
      <Text>Nav-Bar</Text>
    </HStack>
  );
};

export default NavBar;
