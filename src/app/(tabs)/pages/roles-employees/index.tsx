import { ScrollView, Text } from "react-native";
import styled from "styled-components/native";
import InputSearch from "../../../../components/input-search";
import CardRoles from "../../../../components/card-roles";
import { Icon } from "react-native-elements";
import { useState } from "react";
import { ModalRole } from "../../../../components/modal-role/ModalRole";

const RolesEmployees = () => {
  const [modalVisible, setModalVisible] = useState(false);

  function handleAddRole(name: string) {
    const [role, setRole] = useState<string | null>(null);
    setRole(name);
    setModalVisible(false);
  }

  function handleVisibleModal() {
    if (modalVisible) {
      setModalVisible(false);
      return;
    }

    setModalVisible(true);
  }

  return (
    <ContainerMain>
      <ModalRole
        visible={modalVisible}
        onClose={handleVisibleModal}
        onSubmit={handleAddRole}
      />
      <BoxButtons>
        <ButtonAdd onPress={() => handleVisibleModal()}>
          <Text style={{ color: "white", fontSize: 14, width: "auto" }}>
            Função
          </Text>
          <Icon
            name="add"
            type="ionicon"
            size={16}
            color={"white"}
            style={{ width: "fit-content" }}
          />
        </ButtonAdd>
      </BoxButtons>
      <InputSearch
        style={{ marginTop: 10, marginBottom: 10 }}
        placeholder="Recepcionista, Pintor, Gerente..."
      />
      <BoxScroll>
        <ScrollView
          contentContainerStyle={{
            alignItems: "center",
            gap: 10,
            width: "100%",
            paddingBottom: 200,
          }}
        >
          {Array.from({ length: 20 }).map((_, index) => {
            return <CardRoles key={index}></CardRoles>;
          })}
        </ScrollView>
      </BoxScroll>
    </ContainerMain>
  );
};

export default RolesEmployees;

const ContainerMain = styled.View`
  background-color: #0e0e12;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 80px;
  padding: 0px 15px;
`;

const BoxScroll = styled.View`
  padding: 10px 0px 0px 0px;
  width: 100%;
`;

const BoxButtons = styled.View`
  position: relative;
  display: flex;
  align-items: end;
  justify-content: flex-end;
  flex-direction: row;
  width: 100%;
  margin: 10px 20px;
`;

const ButtonAdd = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 5px;
  background-color: #ff6e5b;
  padding: 4px 10px;
  border-radius: 50px;
  right: 0px;
`;

const ButtonBack = styled.TouchableOpacity`
  padding-right: 20px;
`;
