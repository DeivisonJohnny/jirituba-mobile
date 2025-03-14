import { router } from "expo-router";
import * as React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

interface TableValidationProps {
  width?: number | string;
  height?: number | string;
  href?: string;
}

const TableValidation = (props: TableValidationProps) => {
  const directPage = () => {
    router.push({
      pathname: props.href as string,
      params: {
        id: "Parameto que será o ID recebido do banco de dados",
      },
    });
  };

  return (
    <Table
      width={props.width ? props.width : "90%"}
      height={props.height ? props.height : "50%"}
    >
      <HeadTable>
        <HeadRow>
          <TitleCol>Nº Quarto</TitleCol>
          <TitleCol>Nota</TitleCol>
          <TitleCol>Data</TitleCol>
        </HeadRow>
      </HeadTable>
      <ScrollView nestedScrollEnabled>
        {Array.from({ length: 20 }, (_, index) => (
          <Row key={index} index={index} onPress={directPage}>
            <Cell>34</Cell>
            <Cell>4.5</Cell>
            <Cell>28/08/2024</Cell>
          </Row>
        ))}
      </ScrollView>
    </Table>
  );
};

export default TableValidation;

const Table = styled.View<{ width: string | number; height: string | number }>`
  border: 1px solid #353542;
  border-radius: 7px;
  width: ${({ width }: { width: string | number }) =>
    typeof width === "number" ? `${width}%` : width};
  height: ${({ height }: { height: string | number }) =>
    typeof height === "number" ? `${height}%` : height};
`;

const HeadTable = styled.View`
  background-color: #353542;
  border-radius: 5px 5px 0px 0px;
  padding: 4px 0px;
`;

const HeadRow = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 10px 0px;
`;

const Row = styled.TouchableOpacity<{ index: number }>`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 10px 0px;
  background-color: ${({ index }: { index: number }) =>
    index % 2 === 0 ? "#1c1c23" : "#35354278"};
`;

const TitleCol = styled.Text`
  width: 33%;
  color: white;
  text-align: center;
  font-size: 14px;
`;

const Cell = styled.Text`
  width: 33%;
  color: white;
  text-align: center;
`;
