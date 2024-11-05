import styled from "styled-components/native";
import { Formik } from "formik";
import { Icon } from "react-native-elements";
import { ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Select from "../../../../components/register-employees/modal-select";
import { useState } from "react";
import { object, string } from "yup";
import Input from "../../../../components/register-employees/input";

export type RegisterEmployees = {
  imgProfile: string | null;
  name: string | null;
  surname: string | null;
  cpf: string | null;
  roles: string | null;
  shift: string | null;
  sector: string | null;
  assessable: string | null;
};

const RegisterEmployees = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleCollectPhoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      return result.assets[0].uri;
    }
  };

  const [optionsSector] = useState([
    { id: "asdasasd", value: "java" },
    { id: "asdasg56d3", value: "js" },
    { id: "asdasg56d3", value: "js" },
    { id: "asdasg56d3", value: "js" },
    { id: "asdasg56d3", value: "js" },
    { id: "asdasg56d3", value: "js" },
    { id: "asdasg56d3", value: "js" },
    { id: "asdasg56d3", value: "js" },
    { id: "asdasg56d3", value: "js" },
    { id: "asdasg56d3", value: "js" },
    { id: "asdasg56d3", value: "js" },
    { id: "asdasg56d3", value: "js" },
    { id: "asdasg56d3", value: "js" },
    { id: "asdasg56d3", value: "js" },
    // Adicione mais opções conforme necessário
  ]);

  const [roles] = useState([
    { id: "id1", value: "maçã" },
    { id: "id2", value: "banana" },
    { id: "asdasg56d3", value: "js" },
    { id: "asdasg56d3", value: "js" },
    { id: "asdasg56d3", value: "js" },
    { id: "asdasg56d3", value: "js" },
    { id: "asdasg56d3", value: "js" },
    { id: "id2", value: "banana" },
    { id: "id2", value: "banana" },
    { id: "id2", value: "banana" },
    // Adicione mais opções conforme necessário
  ]);

  const shift = [
    { id: "asdj23", value: "Manhã" },
    { id: "asd", value: "Tarde" },
    { id: "asddfdgj23", value: "Noite" },
  ];

  const validateForm = object().shape({
    imgProfile: string().min(10, "Selecione foto").required("Selecione foto"),
    name: string()
      .min(3, "O campo deve ter ao menos 3 caracteres")
      .when("$isSubmitting", {
        is: true,
        then: (schema) => schema.required("O campo deve ser preenchido"),
      }),
    surname: string()
      .min(3, "O Campo deve ter ao menos 3 caracteres")
      .required("O campo deve ser preenchido"),

    cpf: string()
      .min(14, "O Campo deve ter ao menos 11 caracteres")
      .required("O campo deve ser preenchido"),
    roles: string().required("O campo deve ser preenchido"),
    shift: string().required("O campo deve ser preenchido"),
    sector: string().required("O campo deve ser preenchido"),
    assessable: string().required("O campo deve ser preenchido"),
  });

  function handleSubmit(values: RegisterEmployees) {
    console.log("submit", values);
  }
  return (
    <Container>
      <ScrollView style={{ width: "100%" }}>
        <Formik
          initialValues={{
            imgProfile: null,
            name: null,
            surname: null,
            cpf: null,
            roles: null,
            shift: null,
            sector: null,
            assessable: null,
          }}
          validationSchema={validateForm}
          onSubmit={(value: RegisterEmployees) => {
            if (
              (value.assessable != null && value.cpf != null,
              value.imgProfile != null &&
                value.name != null &&
                value.roles != null &&
                value.sector != null &&
                value.shift != null &&
                value.surname != null)
            ) {
              handleSubmit(value);
              return;
            }
          }}
          context={{ isSubmitting: true }}
        >
          {({ values, errors, handleChange, handleSubmit }) => {
            return (
              <>
                <Container>
                  <BoxPrimary>
                    {!image ? (
                      <BoxContainerImage>
                        <ButtonContainer
                          onPress={async () => {
                            const photo = await handleCollectPhoto();
                            values.imgProfile = photo as string;
                          }}
                        >
                          <Icon
                            type="octicon"
                            name="upload"
                            size={35}
                            color={"#373746"}
                          />
                        </ButtonContainer>
                        <ErrorText>
                          {errors.imgProfile && errors.imgProfile}
                        </ErrorText>
                      </BoxContainerImage>
                    ) : (
                      <BoxImage
                        onPress={async () => {
                          const photo = await handleCollectPhoto();
                          values.imgProfile = photo as string;
                        }}
                      >
                        <ImageProfile
                          source={{ uri: image as string }}
                        ></ImageProfile>
                      </BoxImage>
                    )}

                    <BoxName>
                      <BoxInputError>
                        <Input
                          label="Nome"
                          value={values.name as string}
                          onChange={handleChange("name")}
                          placeholder="Ex: Deivison"
                        />
                        <ErrorText>{errors.name && errors.name}</ErrorText>
                      </BoxInputError>

                      <BoxInputError>
                        <Input
                          label="Sobrenome"
                          value={values.surname as string}
                          onChange={handleChange("surname")}
                          placeholder="Ex: Johnny"
                        />
                        <ErrorText>
                          {errors.surname && errors.surname}
                        </ErrorText>
                      </BoxInputError>
                    </BoxName>
                  </BoxPrimary>

                  <BoxTwo>
                    <BoxInputError>
                      <Input
                        label="CPF"
                        value={values.cpf as string}
                        onChange={handleChange("cpf")}
                        isCpf={true}
                        placeholder="111.222.333-54"
                      />
                      <ErrorText>{errors.cpf && errors.cpf}</ErrorText>
                    </BoxInputError>
                  </BoxTwo>

                  <BoxMain>
                    <BoxContainer>
                      <BoxInput>
                        <BoxInputError>
                          <Select
                            label="Função"
                            options={roles}
                            onChange={handleChange("roles")}
                          />
                          <ErrorText>{errors.roles && errors.roles}</ErrorText>
                        </BoxInputError>
                      </BoxInput>
                      <BoxInput>
                        <Select
                          label="Turno"
                          options={shift}
                          onChange={handleChange("shift")}
                        />
                        <ErrorText>{errors.shift && errors.shift}</ErrorText>
                      </BoxInput>
                    </BoxContainer>

                    <BoxContainer>
                      <BoxInput>
                        <BoxInputError>
                          <Select
                            label="Setor"
                            options={optionsSector}
                            onChange={handleChange("sector")}
                          />
                          <ErrorText>
                            {errors.sector && errors.sector}
                          </ErrorText>
                        </BoxInputError>
                      </BoxInput>
                      <BoxInput>
                        <BoxInputError>
                          <Select
                            label="Avaliavel"
                            options={[{ value: "Sim" }, { value: "Não" }]}
                            onChange={handleChange("assessable")}
                          />
                          <ErrorText>
                            {errors.assessable && errors.assessable}
                          </ErrorText>
                        </BoxInputError>
                      </BoxInput>
                    </BoxContainer>
                  </BoxMain>
                  <ButtonSubmit
                    style={{ borderRadius: 100 }}
                    onPress={() => handleSubmit()}
                  >
                    <TextSubmit>Cadastrar</TextSubmit>
                  </ButtonSubmit>
                </Container>
              </>
            );
          }}
        </Formik>
      </ScrollView>
    </Container>
  );
};

export default RegisterEmployees;

const BoxContainerImage = styled.View`
  transition: all 300ms;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

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
`;

const ErrorText = styled.Text`
  color: red;
  font-size: 12px;
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

const BoxInputError = styled.View`
  width: 100%;
`;

const ButtonSubmit = styled.TouchableOpacity`
  width: 100%;
  padding: 10px 15px;
  background-color: #ff7966;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const TextSubmit = styled.Text`
  color: white;
`;
