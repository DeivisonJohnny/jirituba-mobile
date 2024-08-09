import { useFonts } from "expo-font";
import { Formik } from "formik";
import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { router } from "expo-router";
import styled, { ThemeProvider } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import themes from "./theme";

interface LoginProps {}

const Login = (props: LoginProps) => {
  const handleLogin = () => {};
  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme] || "dark";

  const [fontsLoaded] = useFonts({
    montserrat: require("./assets/fonts/Montserrat.ttf"),
    montserratMedium: require("./assets/fonts/Montserrat-Medium.ttf"),
    montserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <ThemeProvider theme={theme}>
      <BodyContent>
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
    </ThemeProvider>
  );
};



export default Login;

const BodyContent = styled.View`
  flex: 1;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.background};
`;

const Header = styled.View`
  height: 25%;
  align-items: center;
  justify-content: center;
`;

const TextTitulo = styled.Text`
  color: ${props => props.theme.color};
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
  font-weight: bold;
`;

const Input = styled.TextInput`
  border: 1.7px solid #353542;
  padding: 15px 10px;
  border-radius: 17px;
  background-color: transparent;
  color: white;
  letter-spacing: 0.8px;
`;

const ButtomSubmit = styled.TouchableOpacity`
  padding: 15px 10px;
  border-radius: 100%;
  background-color: ${props => props.theme.login.colorButtonSubmit};
  border-radius: 17px;
  box-shadow: ${props => props.theme.login.colorShadowBtnSubmit} 0px 7px 15px;
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
