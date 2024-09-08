import * as React from "react";
import styled from "styled-components/native";

interface ProfileCardProps {
  size?: number;
}

const ProfileCard = (props: ProfileCardProps) => {
  return (
    <ProfileImage>
      <ImageUser
        style={
          props.size
            ? { width: props.size, height: props.size }
            : { width: 40, height: 40 }
        }
        source={require("../../assets/img/foto-perfil.jpg")}
      />
    </ProfileImage>
  );
};

export default ProfileCard;

const ProfileImage = styled.TouchableOpacity`
  padding: 2px;
  /* border-radius: 100%; */
  border: 2px solid gray;
  width: fit-content;
`;
const ImageUser = styled.Image`
  width: 40px;
  height: 40px;
  /* border-radius: 100%; */
`;
