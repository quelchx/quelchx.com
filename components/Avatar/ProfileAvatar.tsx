import React from "react";
import { Avatar  } from "@chakra-ui/react";
import { ProfileAvatarProps } from "../../interface";

const ProfileAvatar = ({ size }: ProfileAvatarProps) => {
  return (
    <Avatar
      size={size}
      name="Eric Quelch"
      src="https://avatars.githubusercontent.com/u/74473426?v=4"
    />
  );
};

export default ProfileAvatar;
