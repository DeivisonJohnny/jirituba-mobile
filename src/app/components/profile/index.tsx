import * as React from "react";
import styled from "styled-components/native";

interface ProfileCardProps {
  size?: number;
}

const ProfileCard = (props: ProfileCardProps) => {
  return (
    <ProfileImage style={{borderRadius: 100}}>
      <ImageUser
        style={
          [
            props.size
              ? { width: props.size, height: props.size }
              : { width: 40, height: 40 }
            ,

            {borderRadius: 100}
          ]
            
        }
        source={require("../../assets/img/foto-perfil.jpg")}
      />
    </ProfileImage>
  );
};

export default ProfileCard;

const ProfileImage = styled.TouchableOpacity`
  padding: 2px;
  border: 2px solid gray;
  width: fit-content;
  `;
const ImageUser = styled.Image`
  width: 40px;
  height: 40px;
`;
