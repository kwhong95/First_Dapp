import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { GrTransaction } from "react-icons/gr";

export const ActionsMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        colorScheme="orange"
        variant="outline"
        rightIcon={<Icon as={GrTransaction} />}
      >
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem>Buy NFT</MenuItem>
        <MenuItem>Buy TOKEN</MenuItem>
        <MenuItem>DAO Proposal</MenuItem>
        <MenuItem>DAO Vote</MenuItem>
        <MenuItem>Multisig</MenuItem>
      </MenuList>
    </Menu>
  );
};
