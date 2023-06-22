import React from "react";
import { Game, Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaApple,
  FaAndroid,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  xbox: FaXbox,
  playstation: FaPlaystation,
  nintendo: SiNintendo,
  mac: FaApple,
  linux: FaLinux,
  android: FaAndroid,
  ios: MdPhoneIphone,
  web: BsGlobe,
};

interface Props {
  game: Game;
}

const PlatformIconList = ({ game }: Props) => {
  return (
    <>
      <HStack marginY={1}>
        {game.parent_platforms.map((platform) => (
          <Icon
            key={platform.name}
            as={iconMap[platform.slug]}
            color="gray.500"
          ></Icon>
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
