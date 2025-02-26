import * as React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import ItemMenu from "../../../../components/menu/ItemMenu";
import { itemMenu, useMenu } from "../../../hooks/useMenu";

interface MenuProps {}

const Menu = (props: MenuProps) => {
  const { itensMenu, addItemMenu } = useMenu();

  const groupedItems = itensMenu.reduce((acc, item) => {
    (acc[item.category] = acc[item.category] || []).push(item);
    return acc;
  }, {} as Record<string, itemMenu[]>);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#0e0e12" }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <MainMenu>
        {Object.keys(groupedItems).map((category) => (
          <React.Fragment key={category}>
            <TitleCategory>{category}</TitleCategory>
            {groupedItems[category].map((item, index) => (
              <ItemMenu
                key={index}
                icon={item.icon}
                title={item.title}
                category={item.category}
                uri={item.uri}
              />
            ))}
            <Line />
          </React.Fragment>
        ))}
        <ItemMenu
          icon={"log-out"}
          title={"Logout"}
          category={"Principal"}
          sizeIcon={23}
          uri={"/login"}
        />
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
  padding: 0px 0px 0px 20px;
  width: 100%;
  font-size: 20px;
`;

const Line = styled.View`
  width: 95%;
  height: 1px;
  background-color: #262631;
  margin: 15px 5px;
`;
