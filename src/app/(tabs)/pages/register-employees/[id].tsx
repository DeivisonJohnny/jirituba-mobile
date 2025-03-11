import styled from "styled-components/native";
import { Formik } from "formik";
import { Icon } from "react-native-elements";
import { ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Select from "../../../../components/register-employees/modal-select";
import { useState } from "react";
import { object, string } from "yup";
import { router, useLocalSearchParams } from "expo-router";

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

  const { id } = useLocalSearchParams<{ id: string }>();

  const isNew = id == "new";

  const handleCollectPhoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
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
    { id: "1", value: "Desenvolvimento" },
    { id: "2", value: "Design" },
    { id: "3", value: "Marketing" },
    { id: "4", value: "Vendas" },
    { id: "5", value: "Recursos Humanos" },
  ]);

  const [roles] = useState([
    { id: "1", value: "Desenvolvedor" },
    { id: "2", value: "Designer" },
    { id: "3", value: "Gerente de Projetos" },
    { id: "4", value: "Analista de Marketing" },
    { id: "5", value: "Vendedor" },
  ]);

  const shift = [
    { id: "asdj23", value: "Manhã" },
    { id: "asd", value: "Tarde" },
    { id: "asddfdgj23", value: "Noite" },
  ];

  const formatCpf = (text: string) => {
    let cpfCleaned = text.replace(/\D/g, "");

    if (cpfCleaned.length > 11) {
      cpfCleaned = cpfCleaned.substring(0, 11);
    }

    let cpfFormatted = cpfCleaned.replace(/(\d{3})(\d)/, "$1.$2");
    cpfFormatted = cpfFormatted.replace(/(\d{3})(\d)/, "$1.$2");
    cpfFormatted = cpfFormatted.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    return cpfFormatted;
  };

  const validateForm = object().shape({
    imgProfile: string().min(10, "Selecione foto").required("Selecione foto"),
    name: string()
      .min(3, "O campo deve ter ao menos 3 caracteres")
      .required("O campo deve ser preenchido"),
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

  const initialValues = isNew
    ? ({
        imgProfile: null,
        name: null,
        surname: null,
        cpf: null,
        roles: null,
        shift: null,
        sector: null,
        assessable: null,
      } as RegisterEmployees)
    : ({
        imgProfile: "https://robohash.org/JohnDoe.png",
        name: "Carlos",
        surname: "Silva",
        cpf: "123.456.789-00",
        roles: "Desenvolvedor",
        shift: "Tarde",
        sector: "Desenvolvimento",
        assessable: "Sim",
      } as RegisterEmployees);

  function handleSubmit(values: RegisterEmployees) {
    console.log("submit", values);
  }
  return (
    <Container>
      <ScrollView style={{ width: "100%" }}>
        <Formik
          initialValues={initialValues}
          validateOnChange
          validationSchema={validateForm}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            handleSubmit,
            setFieldValue,
            setFieldTouched,
            touched,
          }) => {
            const handleFieldChange =
              (field: keyof RegisterEmployees) => (value: string) => {
                setFieldValue(field, value);
                setFieldTouched(field, true, false);
              };
            return (
              <>
                <Container>
                  <BoxPrimary>
                    {!image && !values.imgProfile ? (
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
                          {touched.imgProfile && errors.imgProfile}
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
                          source={{
                            uri: (image as string) || values.imgProfile,
                          }}
                        ></ImageProfile>
                      </BoxImage>
                    )}

                    <BoxName>
                      <BoxInputError>
                        <BoxLabelInput>
                          <Label>Nome</Label>
                          <Input
                            onChangeText={handleFieldChange("name")}
                            value={values.name || ""}
                            placeholder="Ex: Deivison"
                            placeholderTextColor={"gray"}
                          />
                        </BoxLabelInput>
                        <ErrorText>{touched.name && errors.name}</ErrorText>
                      </BoxInputError>

                      <BoxInputError>
                        <BoxLabelInput>
                          <Label>Sobrenome</Label>
                          <Input
                            onChangeText={handleFieldChange("surname")}
                            value={values.surname || ""}
                            placeholder="Ex: Johnny"
                            placeholderTextColor={"gray"}
                          />
                        </BoxLabelInput>
                        <ErrorText>
                          {touched.surname && errors.surname}
                        </ErrorText>
                      </BoxInputError>
                    </BoxName>
                  </BoxPrimary>

                  <BoxTwo>
                    <BoxInputError>
                      <BoxLabelInput>
                        <Label>CPF</Label>
                        <Input
                          onChangeText={(text: string) => {
                            const formattedText = formatCpf(text as any);
                            handleFieldChange("cpf")(formattedText);
                          }}
                          value={values.cpf || ""}
                          placeholder="Ex: 234.167.398-84"
                          placeholderTextColor={"gray"}
                        />
                      </BoxLabelInput>
                      <ErrorText>{touched.cpf && errors.cpf}</ErrorText>
                    </BoxInputError>
                  </BoxTwo>

                  <BoxMain>
                    <BoxContainer>
                      <BoxInput>
                        <BoxInputError>
                          <Select
                            label="Função"
                            options={roles}
                            onChange={handleFieldChange("roles")}
                            value={values.roles ? values.roles : null}
                          />
                          <ErrorText>{touched.roles && errors.roles}</ErrorText>
                        </BoxInputError>
                      </BoxInput>
                      <BoxInput>
                        <Select
                          label="Turno"
                          options={shift}
                          onChange={handleFieldChange("shift")}
                          value={values.shift ? values.shift : null}
                        />
                        <ErrorText>{touched.shift && errors.shift}</ErrorText>
                      </BoxInput>
                    </BoxContainer>

                    <BoxContainer>
                      <BoxInput>
                        <BoxInputError>
                          <Select
                            label="Setor"
                            options={optionsSector}
                            onChange={handleFieldChange("sector")}
                            value={values.sector ? values.sector : null}
                          />
                          <ErrorText>
                            {touched.sector && errors.sector}
                          </ErrorText>
                        </BoxInputError>
                      </BoxInput>
                      <BoxInput>
                        <BoxInputError>
                          <Select
                            label="Avaliavel"
                            value={values.assessable ? values.assessable : null}
                            options={[{ value: "Sim" }, { value: "Não" }]}
                            onChange={handleFieldChange("assessable")}
                          />
                          <ErrorText>
                            {touched.assessable && errors.assessable}
                          </ErrorText>
                        </BoxInputError>
                      </BoxInput>
                    </BoxContainer>
                  </BoxMain>
                  <ButtonSubmit
                    style={{ borderRadius: 100 }}
                    onPress={() => handleSubmit(values as any)}
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

const BoxLabelInput = styled.View`
  width: 100%;
  gap: 3px;
`;

const Label = styled.Text`
  color: white;
  font-size: 12px;
`;

const Input = styled.TextInput`
  background-color: #1c1c23;
  padding: 10px;
  width: 100%;
  border: 1.4px solid #353542;
  border-radius: 5px;
  color: white;
  font-size: 12px;
`;

const BoxContainerImage = styled.View`
  transition: all 300ms;
  gap: 5px;
`;

const BoxImage = styled.TouchableOpacity`
  border-radius: 7px;
  width: 100px;
  height: 100px;
  border: 1px solid #373746;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ImageProfile = styled.Image`
  border-radius: 6px;
  width: 96px;
  height: 96px;
`;
const Container = styled.View`
  background-color: #0e0e12;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 10px;
  margin-bottom: 80px;
  gap: 10px;
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
  width: 110px;
  height: 110px;
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
  transition: all;
  transition-duration: 300ms;
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
