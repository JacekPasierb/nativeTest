import React from "react";
import { Image, Text } from "react-native";
import { Email, TextBox, User, UserCardBox } from "./UserCard.styled";

const UserCard = () => {
  return (
    <UserCardBox>
      {/* <Image
        style={{
          width: 60,
          height: 60,
          backgroundColor: "grey",
          borderRadius: 16,
        }}
      /> */}
      <TextBox>
        <User>Klaudia Nowak</User>
        <Email>email@example.com</Email>
      </TextBox>
    </UserCardBox>
  );
};

export default UserCard;
