import * as React from "react";
import ProfileCard from "../profile";
import styled from "styled-components/native";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import { TouchableOpacity, ViewStyle } from "react-native";

interface CardEmployeeProps {
  key: string;
  name: string;
  roles: string;
  score: number;
  style?: ViewStyle;
}

const CardEmployee = (props: CardEmployeeProps) => {
  const [fontsLoaded] = useFonts({
    montserratMedium: require("../../app/assets/fonts/Montserrat-Medium.ttf"),
  });

  const router = useRouter();
  const directionPage = () => {
    router.push({
      pathname: "/pages/details-user/[id]",
      params: {
        id: props.name + "IDIDIDID",
      },
    });
  };

  return (
    <Container onPress={directionPage} style={props.style}>
      <ProfileCard />
      <BoxCenter>
        <BoxTitle>
          <Name>{props.name}</Name>
        </BoxTitle>

        <BoxTitle>
          <Name>{props.roles}</Name>
        </BoxTitle>
      </BoxCenter>
      <Box>
        <TitleNota>Nota</TitleNota>
        <Nota>{props.score}</Nota>
      </Box>
    </Container>
  );
};

export default CardEmployee;

const Container = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;

  border-radius: 10px;
  background-color: #262631;

  gap: 10px;

  padding: 10px 15px;
`;

const BoxCenter = styled.View`
  gap: 5px;
  width: 55%;
`;

const BoxTitle = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 5px;
`;

const Box = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 5px;
  margin-right: 10px;
`;

const Title = styled.Text`
  font-family: "montserratMedium";
  color: #818181;
  font-size: 12px;
`;

const Name = styled.Text`
  font-family: "montserratMedium";
  color: white;
  font-size: 12px;
`;

const TitleNota = styled.Text`
  font-family: "montserratMedium";
  color: white;
  font-size: 12px;
`;

const Nota = styled.Text`
  font-size: 20px;
  color: white;
  font-family: "montserratMedium";
`;
