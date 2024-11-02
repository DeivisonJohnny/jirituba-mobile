import { useFonts } from "expo-font";
import { Formik } from "formik";
import * as React from "react";
import {
  StatusBar,
  Text,
  useColorScheme,
} from "react-native";
import { router } from "expo-router";
import styled from "styled-components/native";


interface LoginProps {}

const Login = (props: LoginProps) => {
  const handleLogin = () => {};
  const deviceTheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    montserrat: require("./assets/fonts/Montserrat.ttf"),
    montserratMedium: require("./assets/fonts/Montserrat-Medium.ttf"),
    montserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return ;
  }

  return (
      <BodyContent>
        <StatusBar barStyle={"dark-content"} showHideTransition={"slide"} translucent={true} ></StatusBar>
        <Header>
          <TextTitulo>Jirituba Avaliações</TextTitulo>
        </Header>
        <Main>
          <Formik
            initialValues={{ usuario: "", senha: "" }}
            onSubmit={handleLogin}
          >
            {({ values, handleChange, handleSubmit }) => (
              <Form>
                <BoxInput>
                  <Label>Usuario</Label>
                  <Input
                    value={values.usuario}
                    onChangeText={handleChange("usuario")}
                  />
                </BoxInput>

                <BoxInput>
                  <Label>Senha</Label>
                  <Input
                    value={values.senha}
                    onChangeText={handleChange("senha")}
                    secureTextEntry
                  />
                </BoxInput>
                <BoxInput>
                  <ButtomSubmit onPress={() => router.replace("./dashboard")}>
                    <Text
                      style={{
                        textAlign: "center",
                        color: "white",
                        fontWeight: "bold",
                        letterSpacing: 0.5,
                      }}
                    >
                      Acessar
                    </Text>
                  </ButtomSubmit>
                </BoxInput>
              </Form>
            )}
          </Formik>
        </Main>

        <Footer>
          <FooterTitulo>Dev Johnny</FooterTitulo>
        </Footer>
      </BodyContent>
  );
};

export default Login;

const BodyContent = styled.View`
  flex: 1;
  justify-content: space-evenly;
  background-color:#0e0e12;
`;

const Header = styled.View`
  height: 25%;
  align-items: center;
  justify-content: center;
`;

const TextTitulo = styled.Text`
  color: white;
  font-size: 30px;
  font-family: "montserrat";
  font-weight: bold;
  letter-spacing: 2px;
`;

const Main = styled.View`
  padding: 15px;
  height: 50%;
`;

const Form = styled.View`
  flex-direction: column;
  gap: 12px;
`;

const BoxInput = styled.View`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 20px;
`;

const Label = styled.Text`
  color: white;
  font-size: 14px;
  padding-left: 4px;
  color: #666680;
`;

const Input = styled.TextInput`
  border: 1px solid #353542;
  padding: 8px 10px;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  letter-spacing: 0.8px;
  font-size: 14px;
  font-weight: normal;
`;

const ButtomSubmit = styled.TouchableOpacity`
  padding: 12px 10px;
  border-radius: 100%;
  background-color: #ff6e5b;
  border-radius: 17px;
  box-shadow: #ff78667a 0px 7px 15px;
`;

const Footer = styled.View`
  align-items: center;
  justify-content: center;
`;

const FooterTitulo = styled.Text`
  color: white;
  font-family: "montserratMedium";
  letter-spacing: 0.8px;
  font-size: 20px;
  font-weight: bold;
`;
