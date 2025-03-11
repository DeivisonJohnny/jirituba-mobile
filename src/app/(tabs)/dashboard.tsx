import styled from "styled-components/native";
import { Icon } from "react-native-elements";
import { useState, useEffect, useMemo } from "react";
import SkeletonLoad from "../../components/loading/SkeletonLoad";
import { router } from "expo-router";
import { Dimensions, Text, View } from "react-native";
import { LineChart, lineDataItem } from "react-native-gifted-charts";

const Dashboard = () => {
  const { width } = Dimensions.get("window");
  const [loading, setLoading] = useState(true);

  const generateRandomData = (length: number) => {
    return Array.from({ length }, () => ({
      value: Number((Math.random() * 5).toFixed(1)),
    })) as lineDataItem[];
  };

  const dataGrafic = useMemo(() => generateRandomData(100), []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Body>
      <Main>
        <View style={{ flex: 0, width: "100%", alignSelf: "flex-start" }}>
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
              <Icon type="ionicon" name="star" color={"yellow"} size={10} />
            </ContentNota>
          </View>

          <BoxStatistics horizontal>
            <BoxScrollContent>
              {loading ? (
                <SkeletonLoad
                  style={{ width: 70, height: 65, borderRadius: 5 }}
                />
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
                <SkeletonLoad
                  style={{ width: 70, height: 65, borderRadius: 5 }}
                />
              ) : (
                <ConteinerBox>
                  <Icon
                    type="ionicon"
                    name="chatbubble-outline"
                    color={"#52F7E0"}
                  />
                  <TitleBox style={{ color: "white" }}>Avaliações</TitleBox>
                </ConteinerBox>
              )}
              {loading ? (
                <SkeletonLoad
                  style={{ width: 70, height: 65, borderRadius: 5 }}
                />
              ) : (
                <ConteinerBox
                  onPress={() =>
                    router.push({
                      pathname: `pages/emphasis-employee/[id]`,
                      params: { id: "adasdsda" },
                    })
                  }
                >
                  <Icon type="ionicon" name="person" color={"#52B1F7"} />
                  <TitleBox style={{ color: "white" }}>Destaque</TitleBox>
                </ConteinerBox>
              )}
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
          <View style={{ display: "flex", flexDirection: "row" }}>
            <TitleScroll>Ações</TitleScroll>
          </View>

          <BoxStatistics horizontal>
            <BoxScrollContent>
              {loading ? (
                <SkeletonLoad
                  style={{ width: 70, height: 65, borderRadius: 5 }}
                />
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
                <SkeletonLoad
                  style={{ width: 70, height: 65, borderRadius: 5 }}
                />
              ) : (
                <ConteinerBox
                  onPress={() => router.push("pages/list-employees/")}
                >
                  <Icon
                    type="ionicon"
                    name="people-circle-outline"
                    color={"yellow"}
                  />
                  <TitleBox style={{ color: "white" }}>Funcionarios</TitleBox>
                </ConteinerBox>
              )}
              {loading ? (
                <SkeletonLoad
                  style={{ width: 70, height: 65, borderRadius: 5 }}
                />
              ) : (
                <ConteinerBox
                  onPress={() => router.push("pages/roles-employees/")}
                >
                  <Icon type="material" name="badge" color={"#5B52F7"} />
                  <TitleBox style={{ color: "white" }}>Funções</TitleBox>
                </ConteinerBox>
              )}
              {loading ? (
                <SkeletonLoad
                  style={{ width: 70, height: 65, borderRadius: 5 }}
                />
              ) : (
                <ConteinerBox
                  onPress={() => router.push("pages/sector-employees/")}
                >
                  <Icon
                    type="ionicon"
                    name="briefcase-outline"
                    color={"#52B1F7"}
                  />
                  <TitleBox style={{ color: "white" }}>Setor</TitleBox>
                </ConteinerBox>
              )}
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
            maxValue={5}
            animationDuration={1000}
            onDataChangeAnimationDuration={1000}
            areaChart
            curved
            data={dataGrafic}
            startFillColor="#2ed9ff"
            startOpacity={0.6}
            endFillColor="#0e0e12"
            endOpacity={0.3}
            dataPointsColor="#c2d8ff"
            color1="white"
            yAxisColor={"gray"}
            xAxisColor={"gray"}
            yAxisTextStyle={{ color: "white" }}
            dashGap={0}
            horizontalRulesStyle={{ opacity: 0.2 }}
            thickness={2}
            noOfSections={5}
            xAxisThickness={0}
            width={width * 0.8}
            showYAxisIndices
            isAnimated
            pointerConfig={{
              pointerStripHeight: 200,
              pointerStripColor: "white",
              pointerStripWidth: 2,
              pointerColor: "#b9d3ff",
              radius: 6,
              pointerLabelWidth: 100,
              pointerLabelHeight: 100,
              activatePointersOnLongPress: true,
              autoAdjustPointerLabelPosition: true,
              pointerLabelComponent: (items: { value: number }[]) => {
                return (
                  <View
                    style={{
                      height: 90,
                      width: 100,
                      justifyContent: "center",
                      marginTop: -30,
                      marginLeft: -40,
                    }}
                  >
                    <View
                      style={{
                        paddingVertical: 6,
                        paddingHorizontal: 4,
                        borderRadius: 16,
                        backgroundColor: "white",
                      }}
                    >
                      <Text style={{ fontWeight: "bold", textAlign: "center" }}>
                        {items[0].value}
                      </Text>
                    </View>
                  </View>
                );
              },
            }}
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

const BoxGrafic = styled.View`
  width: 100%;
  padding: 0px 10px 0px 13px;
  gap: 10px;
`;

const BoxLabelGrafic = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 8px;
  gap: 5px;
`;

export default Dashboard;
