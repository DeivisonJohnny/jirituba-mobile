import React from "react";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import styled from "styled-components/native";
import InputSearch from "../../../../components/input-search";
import { Icon } from "react-native-elements";
import { router } from "expo-router";
import CardSector from "../../../../components/card-sector";
import LoadingPage from "../../../../components/loading/LoadingPage";
import { ModalSector } from "../../../../components/modal-sector/ModalSector";

const SectorEmployees = () => {
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const [sector, setSector] = useState<string | null>(null);

  function handleAddSector(name: string) {
    setSector(name);
    setModalVisible(false);
  }

  function handleVisibleModal() {
    if (modalVisible) {
      setModalVisible(false);
      return;
    }

    setModalVisible(true);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ContainerMain>
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <ModalSector
            visible={modalVisible}
            onClose={handleVisibleModal}
            onSubmit={handleAddSector}
          />
          <BoxButtons>
            <ButtonAdd onPress={() => handleVisibleModal()}>
              <Text style={{ color: "white", fontSize: 14, width: "auto" }}>
                Setor
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
          <View style={{ paddingHorizontal: 20 }}>
            <InputSearch
              style={{ marginTop: 10, marginBottom: 10 }}
              placeholder="Recepcionista, Pintor, Gerente..."
            />
          </View>
          <BoxScroll>
            <ScrollView
              contentContainerStyle={{
                alignItems: "center",
                gap: 10,
                width: "100%",
                paddingBottom: 120,
              }}
            >
              {Array.from({ length: 10 }).map((_, index) => {
                return <CardSector key={index}></CardSector>;
              })}
            </ScrollView>
          </BoxScroll>
        </>
      )}
    </ContainerMain>
  );
};

export default SectorEmployees;

const ContainerMain = styled.View`
  background-color: #0e0e12;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  padding-top: 20px;
  margin-bottom: 80px;
`;

const BoxScroll = styled.View`
  width: 100%;
  padding: 10px 20px;
`;

const BoxButtons = styled.View`
  position: relative;
  display: flex;
  align-items: end;
  justify-content: flex-end;
  flex-direction: row;
  width: 90%;
  margin: 0px 20px;
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
