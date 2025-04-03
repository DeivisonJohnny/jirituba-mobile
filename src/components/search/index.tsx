import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";

interface InputSearchProps {
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
}

const Search = (propsSearch: InputSearchProps) => {
  return (
    <BoxInputSearch style={propsSearch.style ? propsSearch.style : {}}>
      <Input
        placeholder={propsSearch.placeholder ? propsSearch.placeholder : ""}
        placeholderTextColor={"#63636889"}
      ></Input>
    </BoxInputSearch>
  );
};

export default Search;

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
  padding: 1px 0px 1px 12px;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  border: 1px solid #2b2b35;
  color: white;
  letter-spacing: 0.8px;
  font-weight: normal;
  font-size: 12px;
`;
