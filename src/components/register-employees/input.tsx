import { useState } from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";

interface InputProps {
  label: string;
  value: string | number;
  onChange: (text: string) => void;
  placeholder?: string;
  placeholderColor?: string;
  isCpf?: boolean;
}
const deviceType = Platform.OS;

const Input = (props: InputProps) => {
  const [value, setValue] = useState("");
  
  const formatCpf = (text: string) => {
    let cpfCleaned = text.replace(/\D/g, "");

    if (cpfCleaned.length >= 12) {
      return value;
    }

    let cpfFormatted = cpfCleaned.replace(/(\d{3})(\d)/, "$1.$2");
    cpfFormatted = cpfFormatted.replace(/(\d{3})(\d)/, "$1.$2");
    cpfFormatted = cpfFormatted.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    return cpfFormatted;
  };

  const handleOnChange = (text: string) => {
    if (props.isCpf) {
      const valueCpf = formatCpf(text);
      setValue(valueCpf);
      props.onChange(valueCpf);
      return;
    }
    setValue(text);
    props.onChange(text);
  };

  return (
    <Box>
      <Label>{props.label}</Label>
      <InputText
        onChangeText={handleOnChange}
        placeholder={props.placeholder || ""}
        placeholderTextColor={props.placeholderColor || "gray"}
        value={value}
        keyboardType={props.isCpf ? "numeric" : "default"}
        maxLength={props.isCpf ? 14 : 200}
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
  padding: ${deviceType == "ios" ? "7px" : "5px"};
  width: 100%;
  border: 1.4px solid #353542;
  border-radius: 5px;
  color: white;
`;
