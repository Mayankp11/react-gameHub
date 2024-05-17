import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props{
  onSearch: (onSearch: string) => void;
}

const NavBar = ({onSearch}: Props) => {
  return (
    // HStack element is used to display horizontally and text will be next to Image(horizontally)
    <HStack justifyContent="space-between" padding="20px">
      <Image src={logo} boxSize="80px" />
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
