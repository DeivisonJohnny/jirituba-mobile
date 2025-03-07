import styled from "styled-components/native";
import { Icon } from "react-native-elements";
import { useState } from "react";
import SkeletonLoad from "../../components/loading/SkeletonLoad";
import { router } from "expo-router";
import { Dimensions, Text } from "react-native";
import { LineChart, lineDataItem } from "react-native-gifted-charts";

const Dashboard = () => {
  const { width } = Dimensions.get("window");

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 500);

  const generateRandomData = (length: number, maxValue: number) => {
    return Array.from({ length }, () => ({
      value: Math.floor(Math.random() * maxValue),
    })) as lineDataItem[];
  };

  const dataGrafic = generateRandomData(27, 100);

  const renderBoxItem = (
    iconName: string,
    iconType: string,
    iconColor: string,
    title: string,
    onPress?: () => void
  ) => {
    return (
      <ConteinerBox onPress={onPress}>
        <Icon name={iconName} type={iconType} color={iconColor} />
        <TitleBox>{title}</TitleBox>
      </ConteinerBox>
    );
  };

  return (
    <Body>
      <Main>
        <SectionContainer>
          <SectionHeader>
            <TitleScroll>Hoje - </TitleScroll>
            <ContentNota>
              <ContentText>5.0</ContentText>
              <Icon type="ionicon" name="star" color={"yellow"} size={10} />
            </ContentNota>
          </SectionHeader>

          <BoxStatistics horizontal>
            <BoxScrollContent>
              {loading ? (
                <SkeletonLoad height={85} width={"45%"} />
              ) : (
                renderBoxItem(
                  "analytics-outline",
                  "ionicon",
                  "#00ff91",
                  "Análise",
                  () => router.push("pages/analysis-day/")
                )
              )}
              {loading ? (
                <SkeletonLoad height={85} width={"45%"} />
              ) : (
                renderBoxItem(
                  "chatbubble-outline",
                  "ionicon",
                  "#52F7E0",
                  "Avaliações"
                )
              )}
              {renderBoxItem("person", "ionicon", "#52B1F7", "Destaque", () =>
                router.push({
                  pathname: `pages/emphasis-employee/[id]`,
                  params: { id: "adasdsda" },
                })
              )}
            </BoxScrollContent>
          </BoxStatistics>
        </SectionContainer>

        <SectionContainer>
          <SectionHeader>
            <TitleScroll>Ações</TitleScroll>
          </SectionHeader>

          <BoxStatistics horizontal>
            <BoxScrollContent>
              {loading ? (
                <SkeletonLoad height={85} width={"45%"} />
              ) : (
                renderBoxItem(
                  "person-add-outline",
                  "ionicon",
                  "#00ff91",
                  "Registrar",
                  () => router.push("pages/register-employees/")
                )
              )}
              {loading ? (
                <SkeletonLoad height={85} width={"45%"} />
              ) : (
                renderBoxItem(
                  "people-circle-outline",
                  "ionicon",
                  "yellow",
                  "Funcionarios",
                  () => router.push("pages/list-employees/")
                )
              )}
              {renderBoxItem("badge", "material", "#5B52F7", "Funções")}
              {renderBoxItem(
                "briefcase-outline",
                "ionicon",
                "#52B1F7",
                "Setor"
              )}
            </BoxScrollContent>
          </BoxStatistics>
        </SectionContainer>

        <BoxGrafic>
          <BoxLabelGrafic>
            <Text style={{ color: "white", fontSize: 12 }}>
              Análise do usuário
            </Text>
            <Icon
              type="ionicon"
              name="trending-up-outline"
              color={"#37ff00"}
              size={15}
            />
          </BoxLabelGrafic>
          <LineChart
            endSpacing={5}
            initialSpacing={0}
            animationDuration={1000}
            onDataChangeAnimationDuration={1000}
            areaChart
            curved
            data={dataGrafic}
            startFillColor="#2ed9ff"
            startOpacity={0.6}
            endFillColor="#0e0e12"
            endOpacity={0.3}
            dataPointsColor1="#c2d8ff"
            color1="white"
            yAxisColor={"gray"}
            xAxisColor={"gray"}
            yAxisTextStyle={{ color: "white" }}
            dashGap={0}
            horizontalRulesStyle={{ opacity: 0.2 }}
            spacing={50}
            thickness={2}
            noOfSections={5}
            xAxisThickness={0}
            width={width * 0.8}
            showYAxisIndices
            isAnimated
          />
        </BoxGrafic>
      </Main>
    </Body>
  );
};

const Body = styled.ScrollView`
  width: 100%;
  height: 100%;
  background-color: #0e0e12;
  flex: 1;
`;

const Main = styled.View`
  width: 100%;
  height: 100%;
  padding: 0px 0px 50px 0px;
  display: flex;
  flex: 1;
  gap: 20px;
`;

const SectionContainer = styled.View`
  flex: 0;
  width: 100%;
  align-self: flex-start;
`;

const SectionHeader = styled.View`
  display: flex;
  flex-direction: row;
  padding: 0px 10px;
`;

const BoxStatistics = styled.ScrollView`
  padding: 10px 10px;
  gap: 10px;
  min-width: 100%;
`;

const ConteinerBox = styled.TouchableOpacity`
  background-color: #1c1c23;
  gap: 5px;
  padding: 10px;
  border-radius: 5px;
`;

const TitleBox = styled.Text`
  font-size: 12px;
  color: white;
  font-family: "montserratMedium";
`;

const ContentNota = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 2px;
`;

const ContentText = styled.Text`
  font-size: 11px;
  color: #e0e0e6;
  text-align: center;
`;

const BoxScrollContent = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  min-width: 100%;
  gap: 10px;
`;

const TitleScroll = styled.Text`
  font-size: 12px;
  padding-left: 10px;
  color: #5d5d77;
`;

const BoxGrafic = styled.View`
  width: 100%;
  padding: 0px 10px 0px 20px;
  gap: 10px;
`;

const BoxLabelGrafic = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export default Dashboard;
