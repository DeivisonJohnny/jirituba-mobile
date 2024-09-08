import { Text, useColorScheme } from "react-native";
import { styled, ThemeProvider } from "styled-components/native";
import themes from "../theme/index";
import { useFonts } from "expo-font";
import { Icon } from "react-native-elements";
import TableAvaliation from "../components/table/tableAvaliation";
import { useState } from "react";
import SkeletonLoad from "../components/loading/SkeletonLoad";
import { moderateScale } from "react-native-size-matters";

const Dashboard = () => {
  const deviceTheme = useColorScheme();

  const theme = themes[deviceTheme] || "dark";

  const [fontLoad] = useFonts({
    montserrat: require("../assets/fonts/Montserrat.ttf"),
    montserratMedium: require("../assets/fonts/Montserrat-Medium.ttf"),
    montserratBold: require("../assets/fonts/Montserrat-Bold.ttf"),
  });
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  console.log(loading);

  return (
    <ThemeProvider theme={theme}>
      <Body>
        <BoxStatistics>
          {loading ? (
            <SkeletonLoad height={85} width={"45%"}></SkeletonLoad>
          ) : (
            <ConteinerBox>
              <TitleBox>N° Avaliações do dia</TitleBox>
              <ContentText>15</ContentText>
            </ConteinerBox>
          )}

          {loading ? (
            <SkeletonLoad height={85} width={"45%"}></SkeletonLoad>
          ) : (
            <ConteinerBox>
              <TitleBox style={{ color: "white" }}>Nota atendimento</TitleBox>
              <ContentNota>
                <ContentText>5.0</ContentText>
                <Icon type="ionicon" name="star" color={"yellow"}></Icon>
              </ContentNota>
            </ConteinerBox>
          )}
        </BoxStatistics>
        <TableAvaliation width={93} height={70}></TableAvaliation>
      </Body>
    </ThemeProvider>
  );
};

export default Dashboard;

const Body = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.background};
  padding: 20px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;

const BoxStatistics = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;

const ConteinerBox = styled.TouchableOpacity`
  background-color: #1c1c23;

  padding: 10px;
  border: 1.4px solid #353542;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  width: 45%;
`;

const TitleBox = styled.Text`
  font-size: 14px;
  color: white;
  font-family: "montserrat";
`;

const ContentNota = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

const ContentText = styled.Text`
  font-size: 33px;
  color: #e0e0e6;
  text-align: center;
`;

const Main = styled.View`
  padding: 10px 15px;
  height: 100%;
  width: 100%;
`;
