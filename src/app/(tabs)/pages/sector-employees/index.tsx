import * as React from "react";
import { ScrollView, Text } from "react-native";
import styled from "styled-components/native";
import InputSearch from "../../../../components/input-search";
import { Icon } from "react-native-elements";
import { router } from "expo-router";
import CardSector from "../../../../components/card-sector";

const SectorEmployees = () => {
  return (
    <ContainerMain>
      <BoxButtons>
        <ButtonBack onPress={() => router.back()}>
          <Icon
            name="arrow-back-outline"
            type="ionicon"
            size={24}
            color={"white"}
            style={{ width: "fit-content" }}
          />
        </ButtonBack>
        <ButtonAdd>
          <Text style={{ color: "white", fontSize: 14, width: "auto" }}>
            Setor
          </Text>
          <Icon
            name="add"
            type="ionicon"
            size={16}
            color={"white"}
            style={{ width: "fit-content" }}
          />
        </ButtonAdd>
      </BoxButtons>
      <InputSearch
        style={{ marginTop: 10, marginBottom: 10 }}
        placeholder="Recepcionista, Pintor, Gerente..."
      />
      <BoxScroll>
        <ScrollView
          contentContainerStyle={{
            alignItems: "center",
            gap: 10,
            width: "100%",
            paddingBottom: 120,
          }}
        >
          {Array.from({ length: 3 }).map((_, index) => {
            return <CardSector key={index}></CardSector>;
          })}
        </ScrollView>
      </BoxScroll>
    </ContainerMain>
  );
};

export default SectorEmployees;

const ContainerMain = styled.View`
  background-color: #0e0e12;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 80px;
`;

const BoxScroll = styled.View`
  width: 100%;
  padding: 10px 20px;
`;

const BoxButtons = styled.View`
  position: relative;
  display: flex;
  align-items: end;
  justify-content: space-between;
  flex-direction: row;
  width: 90%;
  margin: 0px 20px;
`;

const ButtonAdd = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 5px;
  background-color: #ff6e5b;
  padding: 4px 10px;
  border-radius: 50px;
  right: 0px;
`;

const ButtonBack = styled.TouchableOpacity`
  padding-right: 20px;
`;
