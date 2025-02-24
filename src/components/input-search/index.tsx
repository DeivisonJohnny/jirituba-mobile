import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";

interface InputSearchProps {
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
}

function handleSearch() {
  console.log("search");
}

const InputSearch = (props: InputSearchProps) => {
  return (
    <BoxInputSearch style={props.style ? props.style : {}}>
      <Input
        placeholder={props.placeholder ? props.placeholder : ""}
        placeholderTextColor={"#63636889"}
      ></Input>
      <ButtonSearch onPress={handleSearch}>
        <Icon type="ionicon" name="search" color={"white"} size={15}></Icon>
      </ButtonSearch>
    </BoxInputSearch>
  );
};

export default InputSearch;

const BoxInputSearch = styled.View`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 0px;
  z-index: 2;
`;

const Input = styled.TextInput`
  background-color: #1c1c23;
  padding: 5px 0px 5px 12px;
  border-radius: 5px 0px 0px 5px;
  width: 90%;
  height: 100%;
  border: 1px solid #2b2b35;
  color: white;
  letter-spacing: 0.8px;
  font-weight: normal;
  font-size: 13px;
`;

const ButtonSearch = styled.TouchableOpacity`
  background-color: #45455a;
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 5px 5px 0px;
`;
