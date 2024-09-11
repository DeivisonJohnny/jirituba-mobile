import * as React from "react";
import styled from "styled-components/native";
import ProfileCard from "../../../components/profile";
import { useFonts } from "expo-font";
import TableValidation from "../../../components/table/tableAvaliation";

interface ProfileProps {}

const Profile = (props: ProfileProps) => {
  const [fontLoad] = useFonts({
    montserrat: require("../../../assets/fonts/Montserrat.ttf"),
  });

  return (
    <Container>
      <ProfileCard size={100} key={"ksjfkaj3"}></ProfileCard>

      <LastAvaliation>
        <TitleBox>Última Avaliação</TitleBox>

        <Box>


        <BoxContent>
          <BoxTitle>
            <TitleContent>Quarto</TitleContent>
            <ContentValue>51</ContentValue>
          </BoxTitle>
          <BoxTitle>
            <TitleContent>Nota</TitleContent>
            <ContentValue>4.8</ContentValue>
          </BoxTitle>
          <BoxTitle>
            <TitleContent>Situação</TitleContent>
            <ContentValue>Muito Bom</ContentValue>
          </BoxTitle>
        </BoxContent>
        <BoxContentData>
          <TitleContent>Data</TitleContent>
          <ContentData>24/09/2023</ContentData>
          <TitleContent>Hora</TitleContent>
          <ContentData>12h23</ContentData>
        </BoxContentData>
        </Box>      
      </LastAvaliation>

      <TableValidation width={85}></TableValidation>
    </Container>
  );
};

export default Profile;

const Container = styled.View`
  width: 100%;
  height: 100%;
  background: #0e0e12;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 0px 0px 0px;
`;

const LastAvaliation = styled.View`
  width: 85%;
  height: 20%;
  border-radius: 10px 10px;
  border: 1px solid #1c1c23;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;

const TitleBox = styled.Text`
  font-size: 16px;
  text-align: center;
  width: 100%;
  color: white;
`;

const Box = styled.View`
  
display: flex;
align-items: center;
flex-direction: row;
padding: 0px 10px;

`

const BoxContent = styled.View`
  width: 65%;
  height: 100%;
`;

const BoxContentData = styled.View`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const BoxTitle = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;

  gap: 5px;
`;

const TitleContent = styled.Text`
  font-size: 12px;
  color: #818181;
`;

const ContentValue = styled.Text`
  color: white;
`;

const ContentData = styled.Text`
  color: white;
  font-size: 12px;
`;

const HeadTable = styled.View`
  width: 100%;
  padding: 15px 15px;
  background-color: #353542;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 5px 5px 0px 0px;
  font-size: 12px;
`;

const TitleHead = styled.Text`
  color: white;
  font-family: "montserrat";
  font-size: 14px;
`;

const Table = styled.ScrollView`
  height: 100%;
`;
