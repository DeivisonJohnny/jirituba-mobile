import * as React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import ToolipInfomation from "../custom-toolip";
import { Icon } from "react-native-elements";

interface CardRolesProps {}

const CardRoles = (props: CardRolesProps) => {
  return (
    <ContainerMain>
      <BoxRoles>
        <TitleRoles>Função</TitleRoles>
        <Role>Recepcionista</Role>
      </BoxRoles>
      <View
        style={{
          width: "49%",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <BoxNuEmployees>
          <TitleNuEmployees>Nº funcionarios</TitleNuEmployees>
          <View style={{ alignItems: "center", flexDirection: "row", gap: 5 }}>
            <NuEmployees>24</NuEmployees>
            <ToolipInfomation
              text="Informa a quantidade de funcionarios com a função"
              iconSize={17}
            />
          </View>
        </BoxNuEmployees>
        <BoxActions>
          <ButtonUpdate>
            <Icon
              name="pencil-outline"
              type="ionicon"
              size={14}
              color={"#53c5fa"}
            ></Icon>
          </ButtonUpdate>
          <ButtonDelete>
            <Icon
              name="trash-outline"
              type="ionicon"
              size={14}
              color={"#ff0004"}
            ></Icon>
          </ButtonDelete>
        </BoxActions>
      </View>
    </ContainerMain>
  );
};

export default CardRoles;

const ContainerMain = styled.TouchableOpacity`
  width: 100%;
  background-color: #262631;
  padding: 10px 15px 10px 15px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex: 2;
`;

const BoxRoles = styled.View`
  width: 49%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const TitleRoles = styled.Text`
  color: gray;
  font-size: 11px;
`;

const Role = styled.Text`
  color: white;
  font-size: 15px;
`;

const BoxNuEmployees = styled.View`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const TitleNuEmployees = styled.Text`
  color: gray;
  font-size: 11px;
`;

const NuEmployees = styled.Text`
  color: white;
  font-size: 17px;
  font-weight: bold;
`;

const BoxActions = styled.View`
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
`;

const ButtonUpdate = styled.TouchableOpacity`
  padding: 4px;
  border-radius: 4px;
  border: 0.8px dashed #53c5fa;
`;

const ButtonDelete = styled.TouchableOpacity`
  padding: 4px;
  border-radius: 4px;
  border: 0.8px dashed #ff0004;
`;
