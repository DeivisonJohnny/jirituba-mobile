import * as React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { useLocalSearchParams } from "expo-router";

interface DetailsUserProps {}

const DetailsUser = () => {
  const { id } = useLocalSearchParams();
  console.log("🚀 ~ DetailsUser ~ id:", id);

  console.log("id params collectr");

  return (
    <ContainerMain>
      <Text> {id} </Text>
    </ContainerMain>
  );
};

export default DetailsUser;

const ContainerMain = styled.View``;
