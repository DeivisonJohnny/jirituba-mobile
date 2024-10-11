import React, { useState } from "react";
import { Text, View, StyleSheet, Alert, FlatList, Modal } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";

interface SelectProps {
  label: string;
  initialValue: string;
  listModal?: string[]
}

const Select = (props: SelectProps) => {
  const [visible, setVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(props.initialValue);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setVisible(false);
  };

  const [options] = useState([
    { key: "asdh1", value: "java" },
    { key: "asd2h", value: "js" },
    { key: "asrdh", value: "python" },
    { key: "asdfeh", value: "cpp" },
    { key: "asfegdh", value: "java" },
    { key: "asdg4h", value: "js" },
    { key: "as4ddh", value: "python" },
    { key: "assdrdh", value: "cpp" },
    { key: "asf4dh", value: "java" },
    { key: "assss4vsdh", value: "js" },
    { key: "asvsdh", value: "python" },
    { key: "asv42dh", value: "cpp" },
    { key: "asss35dh", value: "java" },
    { key: "asd53gh", value: "js" },
    { key: "a453sdh", value: "python" },
    { key: "asd345345545h", value: "cpp" },
    { key: "as53df543dh", value: "java" },
    { key: "asd353dfh", value: "js" },
    { key: "a345fsdh", value: "python" },
    { key: "a30dsdh", value: "cpp" },
    { key: "as44ldh", value: "java" },
    { key: "asmnsdfjdh", value: "js" },
    { key: "as452232dh", value: "python" },
    { key: "asd5425h", value: "cpp" },
    { key: "asosd9f0dh", value: "java" },
    { key: "asd345h", value: "js" },
    { key: "asd3450h", value: "python" },
    { key: "assdhfjsdh", value: "cpp" },
  ]);

  return (
    <Container>
      <Label>{props.label}</Label>
      <ButtonSelect onPress={() => setVisible(true)}>
        <ValueInitial style={{ borderRadius: 5 }}>{selectedValue}</ValueInitial>
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
            <ButtonClose onPress={() => setVisible(false)}>
              <IconClose
                type="ionicon"
                name="close"
                color={"white"}
              ></IconClose>
            </ButtonClose>
            <FlatList
              data={options}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => (
                <SelectOptions onPress={() => handleSelect(item.value)}>
                  <NameOptions>{item.value}</NameOptions>
                </SelectOptions>
              )}
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
  padding: 8px 10px;
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
  background-color: #282c36;
  border-radius: 10px;
  width: 80%;
  max-height: 50%;
`;

const ButtonClose = styled.TouchableOpacity`
  position: relative;
  width: 30px;
  height: 30px;
  top: 10px;
  left: 89%;
`;

const IconClose = styled(Icon)`
  color: white;
  font-size: 40px;
`;

const SelectOptions = styled.TouchableOpacity`
  padding: 15px 20px;
`;

const NameOptions = styled.Text`
  color: white;
`;
