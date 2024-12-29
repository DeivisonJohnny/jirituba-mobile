import React, { useState } from "react";
import { Alert, FlatList } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";

type OptionsShift = {
  shift: String;
};

type OptionsValues = {
  id?: String;
  value: String | OptionsShift[];
};

interface SelectProps {
  label: string;
  options?: OptionsValues[];
  onChange: (value: string) => void;
}

const Select = (props: SelectProps) => {
  const [visible, setVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState<any>(null);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setVisible(false);
    props.onChange(value);
  };

  return (
    <Container>
      <Label>{props.label}</Label>
      <ButtonSelect onPress={() => setVisible(true)}>
        <ValueInitial style={{ borderRadius: 5 }}>
          {selectedValue ? selectedValue : "Selecionar"}
        </ValueInitial>
      </ButtonSelect>

      <ModalSelect
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          Alert.alert("Modal closed");
          setVisible(false);
        }}
      >
        <ContainerSelect>
          <BoxSelect>
            <BoxCloseButton>

            <ButtonClose onPress={() => setVisible(false)}>
              <IconClose
                type="ionicon"
                name="close"
                color={"white"}
                size={20}
                ></IconClose>
            </ButtonClose>
                </BoxCloseButton>
            <FlatList
              data={props.options as any}
              keyExtractor={(item, index) =>
                (item.id ? ` ${item.id}-${index}` : index) as any
              }
              renderItem={({ item, index }) => {
                return (
                  <SelectOptions
                    onPress={() => handleSelect(item.value)}
                    style={
                      index === 0 || index % 2 === 0
                        ? { backgroundColor: "#33384426" }
                        : { backgroundColor: "transparent" }
                    }
                  >
                    <NameOptions value={item.value} onChangeText={props.onChange} editable={false} />
                  </SelectOptions>
                );
              }}
              contentContainerStyle={{ padding: 10 }}
              initialNumToRender={10}
              maxToRenderPerBatch={10}
              showsVerticalScrollIndicator={false}
            />
          </BoxSelect>
        </ContainerSelect>
      </ModalSelect>
    </Container>
  );
};

export default Select;

const Container = styled.View`
  width: 100%;
  padding: 10px 5px;
  display: flex;
  gap: 3px;
`;

const Label = styled.Text`
  color: white;
  font-size: 12px;
`;

const ValueInitial = styled.Text`
  background-color: #1c1c23;
  padding: 10px 10px;
  width: 100%;
  border: 1.4px solid #353542;
  border-radius: 5px;
  color: white;
  font-size: 12px;
`;

const ModalSelect = styled.Modal`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ButtonSelect = styled.TouchableOpacity``;

const ContainerSelect = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0000005c;
`;

const BoxSelect = styled.View`
  scroll-behavior: smooth;
  background-color: #282c36;
  border-radius: 10px;
  width: 80%;
  max-height: 50%;
  padding: 10px 0px;
`;

const BoxCloseButton = styled.View`

  width: 100%;
  position: relative;
  background-color: blue;
`

const ButtonClose = styled.TouchableOpacity`
  position: absolute;
  width: 25px;
  height: 25px;
  top: 0px;
  right: 10px;
`;

const IconClose = styled(Icon)`
  color: white;
  font-size: 40px;
`;

const SelectOptions = styled.TouchableOpacity`
  padding: 15px 20px;
`;

const NameOptions = styled.TextInput`
  color: white;
`;
