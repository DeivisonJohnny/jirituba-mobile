import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import { ReactNode } from "react";

interface TextIAProps {
  children: ReactNode;
}

const TextIA = ({ children }: TextIAProps) => {
  return (
    <ContainerMain>
      <HeaderBox>
        <Title>Resumo</Title>
        <SubTitle>(Gerado por IA)</SubTitle>
        <Icon
          name="sparkles-outline"
          size={14}
          color={"white"}
          type="ionicon"
        ></Icon>
      </HeaderBox>
      <BodyBox>
        <Text>{children}</Text>
      </BodyBox>
    </ContainerMain>
  );
};

export default TextIA;

const ContainerMain = styled.View`
  width: 100%;
  display: flex;

  align-items: center;
  flex-direction: column;

  background-color: #24242f;
  border-radius: 5px;

  margin-bottom: 70px;
`;
const HeaderBox = styled.View`
  background-color: #353542;
  width: 100%;
  height: fit-content;
  padding: 8px 0px 8px 10px;
  border-radius: 5px 5px 0px 0px;

  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 4px;

  padding-left: 10px;
`;

const Title = styled.Text`
  color: white;
  font-size: 14px;
`;

const SubTitle = styled.Text`
  color: lightgray;
  font-size: 10px;
  margin-right: 5px;
`;
const BodyBox = styled.ScrollView.attrs({
  nestedScrollEnabled: true
})`
  padding: 10px;
  height: 100px;
`;
