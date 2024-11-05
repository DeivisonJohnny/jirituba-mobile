import * as React from "react";
import ProfileCard from "../profile";
import styled from "styled-components/native";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";

interface CardEmployeeProps {
  key: string;
  name: string;
  roles: string;
  score: number;
}

const CardEmployee = (props: CardEmployeeProps) => {
  const [fontsLoaded] = useFonts({
    montserratMedium: require("../../app/assets/fonts/Montserrat-Medium.ttf"),
  });

  const router = useRouter();

  return (
    <Container onPress={
      () => router.push({pathname: '../../pages/details-user/[id]', params: {
        id: props.name + 'IDIDIDID'
      }})
    } >
      <ProfileCard />
      <BoxCenter>
        <BoxTitle>
          <Title>Nome:</Title>
          <Name>{props.name}</Name>
        </BoxTitle>

        <BoxTitle>
          <Title>Função:</Title>
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
  width: 90%;

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
  gap: 10px;
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
  font-size: 13px;
`;

const Nota = styled.Text`
  font-size: 20px;
  color: white;
  font-family: "montserratMedium";
`;
