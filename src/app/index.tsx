import { useFonts } from "expo-font";
import { Formik } from "formik";
import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

interface LoginProps {}

const Login = (props: LoginProps) => {
  const handleLogin = () => {};

  const [fontsLoaded] = useFonts({
    montserrat: require("../../assets/fonts/Montserrat.ttf"),
    montserratMedium: require("../../assets/fonts/Montserrat-Medium.ttf"),
    montserratBold: require("../../assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <LinearGradient
      colors={['#000000', '#6000a0']}
      start={{ x: 0.5, y: 0.5 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
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
                    placeholderTextColor={"#ffffff3d"}
                    placeholder="Usuario"
                    value={values.usuario}
                    onChangeText={handleChange('usuario')}
                  />
                </BoxInput>

                <BoxInput>
                  <Label>Senha</Label>
                  <Input
                    placeholderTextColor={"#ffffff3d"}
                    placeholder="Senha"
                    value={values.senha}
                    onChangeText={handleChange('senha')}
                    secureTextEntry
                  />
                </BoxInput>
                <BoxInput>
                  <ButtomSubmit onPress={()=>router.replace('./dashboard')}>
                    <Text style={{ textAlign: "center", color: 'white' }}>Acessar</Text>
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
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});

export default Login;

const BodyContent = styled.View`
  flex: 1;
  justify-content: space-evenly;
`;

const Header = styled.View`
  height: 35%;
  align-items: center;
  justify-content: center;
`;

const TextTitulo = styled.Text`
  color: white;
  font-size: 30px;
  font-family: "montserrat";
`;

const Main = styled.View`
  padding: 15px;
  height: 50%;
`;

const Form = styled.View`
  flex-direction: column;
`;

const BoxInput = styled.View`
display: flex;
flex-direction: column;
gap: 5px;
  margin-bottom: 20px;
`;

const Label = styled.Text`
  color: white;
  font-size: 17px;
  padding-left: 4px;
`;

const Input = styled.TextInput`
  border: 1px solid gray;
  padding: 10px;
  border-radius: 4px;
  background-color: #4d4d4d3b;
  color: white;
  letter-spacing: 0.8px;
`;

const ButtomSubmit = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 4px;
  background-color: black;
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
