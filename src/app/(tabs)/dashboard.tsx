import styled from "styled-components/native";
import { useFonts } from "expo-font";
import { Icon } from "react-native-elements";
import { useState } from "react";
import SkeletonLoad from "../../components/loading/SkeletonLoad";
import { router } from "expo-router";
import { Dimensions, FlatList, Text, View } from "react-native";
import { LineChart, lineDataItem } from "react-native-gifted-charts";
import Accordion from "../../components/accordion";

const Dashboard = () => {
  const { width } = Dimensions.get("window");

  const listData = [] as { id: number; title: string; message: string }[];
  Array.from({ length: 20 }).forEach((_, index) => {
    listData.push({
      id: index,
      title: "Avaliações",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos officia odio nisi deleniti harum. Commodi ea iusto consequatur id alias? Odit asperiores voluptatum deserunt illum at vel aperiam labore consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. In, facilis debitis quae officiis laboriosam voluptatem officia inventore illo ducimus pariatur dolore quaerat consequatur sequi quia? Quisquam ipsum itaque eos nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum quasi facere perspiciatis similique provident veniam odit! Recusandae natus rem veniam, explicabo illum blanditiis amet cupiditate tempore non illo? Pariatur.",
    });
  });
  const [loading, setLoading] = useState(true);

  const generateRandomData = (length: number, maxValue: number) => {
    return Array.from({ length }, () => ({
      value: Math.floor(Math.random() * maxValue),
    })) as lineDataItem[];
  };

  const dataGrafic = generateRandomData(27, 100);

  setTimeout(() => {
    setLoading(false);
  }, 500);

  return (
    <Body>
      <Main>
        <View
          style={{
            flex: 0,
            width: "100%",
            alignSelf: "flex-start",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingHorizontal: 10,
            }}
          >
            <TitleScroll>Hoje - </TitleScroll>
            <ContentNota>
              <ContentText>5.0</ContentText>
              <Icon
                type="ionicon"
                name="star"
                color={"yellow"}
                size={10}
              ></Icon>
            </ContentNota>
          </View>

          <BoxStatistics horizontal>
            <BoxScrollContent>
              {loading ? (
                <SkeletonLoad height={85} width={"45%"}></SkeletonLoad>
              ) : (
                <ConteinerBox
                  onPress={() => router.push("pages/analysis-day/")}
                >
                  <Icon
                    name="analytics-outline"
                    type="ionicon"
                    color={"#00ff91"}
                  />
                  <TitleBox>Análise</TitleBox>
                </ConteinerBox>
              )}
              {loading ? (
                <SkeletonLoad height={85} width={"45%"}></SkeletonLoad>
              ) : (
                <ConteinerBox>
                  <Icon
                    type="ionicon"
                    name="chatbubble-outline"
                    color={"#52F7E0"}
                  ></Icon>

                  <TitleBox style={{ color: "white" }}>Avaliações</TitleBox>
                </ConteinerBox>
              )}
              <ConteinerBox
                onPress={() =>
                  router.push({
                    pathname: `pages/emphasis-employee/[id]`,
                    params: { id: "adasdsda" },
                  })
                }
              >
                <Icon type="ionicon" name="person" color={"#52B1F7"}></Icon>

                <TitleBox style={{ color: "white" }}>Destaque</TitleBox>
              </ConteinerBox>
            </BoxScrollContent>
          </BoxStatistics>
        </View>
        <View
          style={{
            flex: 0,
            width: "100%",
            alignSelf: "flex-start",
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TitleScroll>Ações</TitleScroll>
          </View>

          <BoxStatistics horizontal>
            <BoxScrollContent>
              {loading ? (
                <SkeletonLoad height={85} width={"45%"}></SkeletonLoad>
              ) : (
                <ConteinerBox
                  onPress={() => router.push("pages/register-employees/")}
                >
                  <Icon
                    name="person-add-outline"
                    type="ionicon"
                    color={"#00ff91"}
                  />
                  <TitleBox>Registrar</TitleBox>
                </ConteinerBox>
              )}
              {loading ? (
                <SkeletonLoad height={85} width={"45%"}></SkeletonLoad>
              ) : (
                <ConteinerBox
                  onPress={() => router.push("pages/list-employees/")}
                >
                  <Icon
                    type="ionicon"
                    name="people-circle-outline"
                    color={"yellow"}
                  ></Icon>

                  <TitleBox style={{ color: "white" }}>Funcionarios</TitleBox>
                </ConteinerBox>
              )}
              <ConteinerBox>
                <Icon type="material" name="badge" color={"#5B52F7"}></Icon>

                <TitleBox style={{ color: "white" }}>Funções</TitleBox>
              </ConteinerBox>

              <ConteinerBox>
                <Icon
                  type="ionicon"
                  name="briefcase-outline"
                  color={"#52B1F7"}
                ></Icon>

                <TitleBox style={{ color: "white" }}>Setor</TitleBox>
              </ConteinerBox>
            </BoxScrollContent>
          </BoxStatistics>
        </View>
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
const TitleGrafic = styled.Text`
  color: #7c7c93;
  font-size: 12px;
`;

const BoxGrafic = styled.View`
  width: 100%;
  padding: 0px 10px 0px 20px;
  gap: 10px;
`;

const BoxListAvaliation = styled.View`
  background-color: red;
  padding: 30px 10px 10px 10px;
  border-radius: 30px 30px 0px 0px;
  width: 100%;
  max-height: 592px;
`;

const BoxLabelGrafic = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export default Dashboard;
