import * as React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import styled from "styled-components/native";

interface TableValidationProps {}

const TableValidation = (props: TableValidationProps) => {
  return (
    <Table>
      <HeadTable>
        <HeadRow>
          <TitleCol>Ṇ Quarto</TitleCol>
          <TitleCol>Nota</TitleCol>
          <TitleCol>Data</TitleCol>
        </HeadRow>
      </HeadTable>
      <BodyTable>
        {Array.from({ length: 20 }, (_, index) => (
          <Row key={index} index={index}>
            <Cell>34</Cell>
            <Cell>4.5</Cell>
            <Cell>28/08/2024</Cell>
          </Row>
        ))}
      </BodyTable>
    </Table>
  );
};

export default TableValidation;

const Table = styled.View`
  border-radius: 5px;
  border: 1px solid #353542;
  max-height: 70%;
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
  background-color: ${({ index }) =>
    index % 2 === 0 ? "#1c1c23" : "#35354278"};
`;

const TitleCol = styled.Text`
  width: 33%;
  color: white;
  text-align: center;
  font-size: 14px;
`;

const BodyTable = styled.ScrollView`

`;

const Cell = styled.Text`
  width: 33%;
  color: white;
  text-align: center;
`;
