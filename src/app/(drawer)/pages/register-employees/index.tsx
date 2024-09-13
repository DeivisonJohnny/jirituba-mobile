import * as React from "react";
import styled from "styled-components/native";
import ButtonUpload from "./components/button-upload";
import { Formik } from "formik";
import { Icon } from "react-native-elements";
import Input from "./components/input";
import { ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";

interface RegisterEmployeesProps {}

const RegisterEmployees = (props: RegisterEmployeesProps) => {
  const [image, setImage] = React.useState<string | null>(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  function handleSubmit() {
    console.log("submit");
  }

  return (
    <Container>
      <ScrollView style={{ width: "100%" }}>
        <Formik
          initialValues={{
            imgProfile: "",
            name: "",
            surname: "",
            cpf: "",
            roles: "",
            shift: "",
            sector: "",
            assessable: "",
          }}
          onSubmit={handleSubmit}
        >
          {({ values, errors, handleChange }) => (
            <>
              <Container>
                <BoxPrimary>
                  {!image ? (
                    <ButtonContainer onPress={pickImage}>
                      <Icon
                        type="octicon"
                        name="upload"
                        size={35}
                        color={"#373746"}
                      />
                    </ButtonContainer>
                  ) : (
                    <BoxImage onPress={pickImage}>
                      <ImageProfile
                        source={{ uri: image as string }}
                      ></ImageProfile>
                    </BoxImage>
                  )}

                  <BoxName>
                    <Input
                      label="Nome"
                      value={values.name}
                      onChange={handleChange}
                    ></Input>
                    <Input
                      label="Sobrenome"
                      value={values.surname}
                      onChange={handleChange}
                    ></Input>
                  </BoxName>
                </BoxPrimary>

                <BoxTwo>
                  <Input
                    label="CPF"
                    value={values.cpf}
                    onChange={handleChange}
                  ></Input>
                </BoxTwo>

                <BoxMain>
                  <BoxContainer>
                    <BoxInput>
                      <Input
                        label="Função"
                        value={values.roles}
                        onChange={handleChange}
                      ></Input>
                    </BoxInput>
                    <BoxInput>
                      <Input
                        label="Turno"
                        value={values.shift}
                        onChange={handleChange}
                      ></Input>
                    </BoxInput>
                  </BoxContainer>

                  <BoxContainer>
                    <BoxInput>
                      <Input
                        label="Setor"
                        value={values.sector}
                        onChange={handleChange}
                      ></Input>
                    </BoxInput>
                    <BoxInput>
                      <Input
                        label="Avaliavel"
                        value={values.assessable}
                        onChange={handleChange}
                      ></Input>
                    </BoxInput>
                  </BoxContainer>
                </BoxMain>
              </Container>
            </>
          )}
        </Formik>
      </ScrollView>
    </Container>
  );
};

export default RegisterEmployees;

const BoxImage = styled.TouchableOpacity`
  border-radius: 7px;
  width: 123px;
  height: 120px;
  border: 1px solid #373746;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ImageProfile = styled.Image`
  border-radius: 6px;
  width: 120px;
  height: 117px;
`;
const Container = styled.View`
  background-color: #0e0e12;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 10px;
  gap: 40px;
`;

const BoxPrimary = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
  width: 100%;
  justify-content: space-between;
`;
const BoxName = styled.View`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 60%;
  gap: 10px;
`;

const ButtonContainer = styled.TouchableOpacity`
  padding: 20px;
  background-color: #1c1c23;
  border-radius: 7px;
  width: 123px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #373746;
`;

const BoxTwo = styled.View`
  width: 100%;
`;

const BoxMain = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const BoxContainer = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  gap: 10px;
`;

const BoxInput = styled.View`
  width: 49%;
`;
