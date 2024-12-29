import * as React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import ItemMenu from "../../../../components/menu/ItemMenu";

interface MenuProps {}

const Menu = (props: MenuProps) => {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#0e0e12" }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <MainMenu>
        <TitleCategory>Categoria</TitleCategory>
        {Array.from({ length: 5 }, (_, index) => (
          <ItemMenu key={index} nameIcon="home" title={`Inicio ${index + 1}`} />
        ))}

        <Line></Line>

        {Array.from({ length: 5 }, (_, index) => (
          <ItemMenu key={index} nameIcon="home" title={`Inicio ${index + 1}`} />
        ))}
      </MainMenu>
    </ScrollView>
  );
};

export default Menu;

const MainMenu = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding-bottom: 70px;
`;

const TitleCategory = styled.Text`
  color: white;
  margin: 20px 0px;
  padding: 0px 0px 0px 25px;
  width: 100%;

  font-size: 20px;
`;

const Line = styled.View`
  width: 95%;
  height: 1px;
  background-color: #262631;
  margin: 15px 5px;
`;
