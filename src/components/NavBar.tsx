import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    // HStack element is used to display horizontally and text will be next to Image(horizontally)
    <HStack justifyContent="space-between" padding="20px">
      <Image src={logo} boxSize="80px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
