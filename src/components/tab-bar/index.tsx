import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import styled from "styled-components/native";

interface TabBarProps {}

const TabBar = (props: TabBarProps) => {
  return (
    <ContainerTab>
      <Text>TabBar</Text>
    </ContainerTab>
  );
};

export default TabBar;

const ContainerTab = styled.View`
  height: 100%;
  display: flex;
  align-items: center;

  background-color: red;
`;
