import { Modal, Text, TextInput, View } from "react-native";
import styled from "styled-components/native";
import ToolipInfomation from "../custom-toolip";
import { Icon } from "react-native-elements";
import { useState } from "react";
import { Formik } from "formik";
import { object, string } from "yup";

interface CardSectorProps {}

const CardSector = (props: CardSectorProps) => {
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const [visibleDelete, setVisibleDelete] = useState(false);

  function handleSaveSector(data: any) {
    console.log(data);
  }

  const formValidation = object().shape({
    name: string()
      .min(3, "O campo de ter ao menos 3 caracteres")
      .required("O campo deve ser preenchido"),
  });

  return (
    <ContainerMain>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visibleUpdate}
        onTouchEnd={() => {
          console.log("fora");
          setVisibleUpdate(false);
        }}
      >
        <Formik
          initialValues={{
            name: "",
          }}
          validationSchema={formValidation}
          onSubmit={(data) => handleSaveSector(data)}
        >
          {({
            errors,
            touched,
            setFieldTouched,
            setFieldValue,

            handleSubmit,
          }) => {
            const handleFieldChange =
              (field: keyof { name: string }) => (value: string) => {
                setFieldValue(field, value);
                setFieldTouched(field, true, false);
              };
            return (
              <BoxForm>
                <Form>
                  <BoxInputSector>
                    <Label>Nome da setor</Label>
                    <Input
                      onChangeText={handleFieldChange("name")}
                      placeholder={"Ex: Manutenção"}
                      placeholderTextColor={"#555555"}
                    />
                  </BoxInputSector>
                  <View style={{ width: "80%" }}>
                    <TextError>
                      {errors.name && touched.name ? errors.name : ""}
                    </TextError>
                  </View>
                  <ButtonSubmit onPress={(values: any) => handleSubmit(values)}>
                    <Text style={{ color: "black", fontSize: 12 }}>
                      Atualizar
                    </Text>
                  </ButtonSubmit>
                </Form>
              </BoxForm>
            );
          }}
        </Formik>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        
        style={{backgroundColor: 'red'}}
        visible={visibleDelete}
        onTouchEnd={() => {
          console.log("fora");
          setVisibleDelete(false);
        }}
      >
        <BoxConfirm>
          <ContentConfirm>
            <Text style={{ width: "80%", color: "white", fontSize: 14 }}>
              Realmente deseja deletar o setor {"SETOR"}?{" "}
            </Text>
            <Text style={{ width: "80%", color: "white", fontSize: 12 }}>
              NOTA: Funcionarios cadastrados neste setor ficaram sem setor de
              atuação
            </Text>
            <BoxButtonsConfirm>
              <ButtonConfirm>
                <Text style={{ color: "white", fontSize: 12 }}>Deletar</Text>
              </ButtonConfirm>
              <ButtonCancel onPress={() => setVisibleDelete(false)}>
                <Text style={{ color: "white", fontSize: 12 }}>Cancelar</Text>
              </ButtonCancel>
            </BoxButtonsConfirm>
          </ContentConfirm>
        </BoxConfirm>
      </Modal>
      <BoxRoles>
        {/* <TitleRoles>Setor</TitleRoles> */}
        <Role>Desenvolvimento</Role>
      </BoxRoles>
      <View
        style={{
          width: "49%",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <BoxNuEmployees>
          <TitleNuEmployees>Nº funcionarios</TitleNuEmployees>
          <View style={{ alignItems: "center", flexDirection: "row", gap: 5 }}>
            <NuEmployees>24</NuEmployees>
            <ToolipInfomation
              text="Informa a quantidade de funcionarios com a função"
              iconSize={17}
            />
          </View>
        </BoxNuEmployees>
        <BoxActions>
          <ButtonUpdate
            onPress={() => {
              setVisibleUpdate(true);
            }}
          >
            <Icon
              name="pencil-outline"
              type="ionicon"
              size={11}
              color={"#53c5fa"}
            ></Icon>
          </ButtonUpdate>
          <ButtonDelete
            onPress={() => {
              setVisibleDelete(true);
            }}
          >
            <Icon
              name="trash-outline"
              type="ionicon"
              size={11}
              color={"#ff0004"}
            ></Icon>
          </ButtonDelete>
        </BoxActions>
      </View>
    </ContainerMain>
  );
};

export default CardSector;

const ContainerMain = styled.TouchableOpacity`
  width: 100%;
  background-color: #262631;
  padding: 10px 15px 10px 15px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  flex: 2;
`;

const BoxForm = styled.View`
  height: 100%;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #00000050;
`;

const Form = styled.View`
  background-color: #262631;
  padding: 30px 10px;
  border-radius: 10px;
  width: 80%;
  gap: 5px;
  align-items: center;
`;

const BoxInputSector = styled.View`
  width: 80%;
  gap: 10px;
`;

const Label = styled.Text`
  color: white;
`;

const Input = styled.TextInput`
  padding: 0px 10px;
  border: 0.7px solid #808080;
  color: white;
  border-radius: 5px;
`;

const TextError = styled.Text`
  color: red;
  font-size: 10px;
`;

const ButtonSubmit = styled.TouchableOpacity`
  background-color: #5c9eff;
  padding: 6px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 80%;
  margin: auto;
`;

const BoxConfirm = styled.View`
  height: 100%;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #00000096;
`;

const ContentConfirm = styled.View`
  background-color: #262631;
  padding: 30px 10px;
  border-radius: 10px;
  width: 80%;
  gap: 20px;
  align-items: center;
`;

const BoxButtonsConfirm = styled.View`
  width: 80%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;
`;

const ButtonConfirm = styled.TouchableOpacity`
  padding: 4px 10px;
  background-color: red;
  border-radius: 3px;
`;
const ButtonCancel = styled.TouchableOpacity`
  padding: 4px 10px;
  border-radius: 3px;
  background-color: #5c9eff;
`;

const BoxRoles = styled.View`
  width: 49%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const TitleRoles = styled.Text`
  color: gray;
  font-size: 11px;
`;

const Role = styled.Text`
  color: white;
  font-size: 15px;
`;

const BoxNuEmployees = styled.View`
  display: flex;
  align-items: center;
`;

const TitleNuEmployees = styled.Text`
  color: gray;
  font-size: 11px;
`;

const NuEmployees = styled.Text`
  color: white;
  font-size: 17px;
  font-weight: bold;
`;

const BoxActions = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const ButtonUpdate = styled.TouchableOpacity`
  padding: 4px;
  border-radius: 4px;
  border: 0.8px dashed #53c5fa;
`;

const ButtonDelete = styled.TouchableOpacity`
  padding: 4px;
  border-radius: 4px;
  border: 0.8px dashed #ff0004;
`;
