import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
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
  border-radius: 5px 5px 0px 0px;
  border: 1px solid #353542;
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
