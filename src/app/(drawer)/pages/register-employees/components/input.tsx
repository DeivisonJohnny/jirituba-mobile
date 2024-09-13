import * as React from "react";
import styled from "styled-components/native";

interface InputProps {
  label: string;
  value: string | number;
  onChange: (text: string) => void; // Corrigido para aceitar um argumento
}

const Input = (props: InputProps) => {
  const handleChange = (text: string) => {
    props.onChange(text);
  };

  return (
    <Box>
      <Label>{props.label}</Label>
      <InputText
        onChangeText={handleChange} 
      />
    </Box>
  );
};

export default Input;

const Box = styled.View`
  width: 100%;
  gap: 3px;
`;

const Label = styled.Text`
  color: white;
  font-size: 12px;
`;

const InputText = styled.TextInput`
  background-color: #1c1c23;
  padding: 5px 10px;
  width: 100%;
  border: 1.4px solid #353542;
  border-radius: 5px;
  color: white;
`;
