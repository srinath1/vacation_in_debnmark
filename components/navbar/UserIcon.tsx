import { fetchProfileImage } from "@/utils/actions";
import React from "react";
import { LuUser2 } from "react-icons/lu";

const UserIcon = async () => {
  const profileImage = await fetchProfileImage();
  if (profileImage) {
    <img
      src={profileImage}
      className="w-8 h-8 bg-primary rounded-full object-cover"
    />;
  }

  return (
    <LuUser2 className="w-8 h-8 bg-primary rounded-full text-white"></LuUser2>
  );
};

export default UserIcon;
