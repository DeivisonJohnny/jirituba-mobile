import React, { useState } from "react";
import {
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import styled from "styled-components/native";

interface ModalRoleProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (name: string) => void;
}

export const ModalRole: React.FC<ModalRoleProps> = ({
  visible,
  onClose,
  onSubmit,
}) => {
  const [name, setName] = useState("");

  const handleAdd = () => {
    if (name.trim()) {
      onSubmit(name.trim());
      setName("");
      onClose();
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <TouchableWithoutFeedback onPress={onClose}>
        <Overlay>
          <TouchableWithoutFeedback onPress={() => {}}>
            <ModalContainer>
              <Title>Nova função</Title>

              <Input
                placeholder="Nome da categoria"
                placeholderTextColor="#616161"
                value={name}
                onChangeText={setName}
              />

              <ButtonContainer>
                <CancelButton onPress={onClose}>
                  <ButtonText>Cancelar</ButtonText>
                </CancelButton>

                <AddButton onPress={handleAdd}>
                  <ButtonText>Adicionar</ButtonText>
                </AddButton>
              </ButtonContainer>
            </ModalContainer>
          </TouchableWithoutFeedback>
        </Overlay>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

// Styled-components

const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.View`
  background-color: #1e1e27;
  border-radius: 12px;
  padding: 20px;
  width: 80%;
  border-width: 1px;
  border-color: #2e2e3b;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  text-align: center;
  color: #fff;
`;

const Input = styled.TextInput`
  border-width: 1px;
  border-color: #575757;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 20px;
  color: #fff;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
`;

const CancelButton = styled(TouchableOpacity)`
  background-color: #a00000;
  padding: 10px;
  border-radius: 8px;
  flex: 1;
`;

const AddButton = styled(TouchableOpacity)`
  background-color: #1cb921;
  padding: 10px;
  border-radius: 8px;
  flex: 1;
`;

const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: 500;
`;
