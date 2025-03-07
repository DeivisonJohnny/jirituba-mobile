import * as React from "react";
import styled from "styled-components/native";
import { LineChart, lineDataItem } from "react-native-gifted-charts";
import { Dimensions, Text, View } from "react-native";
import ProfileCard from "../../../../components/profile";
import { Icon } from "react-native-elements";
import { useRef, useEffect } from "react";
import Accordion, {
  AccordionContent,
  AccordionTrigger,
} from "../../../../components/accordion";

const EmphasisEmployee = () => {
  const { width } = Dimensions.get("window");
  const [showTooltip, setShowTooltip] = React.useState(false);
  const tooltipRefs = useRef([]);

  useEffect(() => {
    tooltipRefs.current.forEach((tooltipElement, index) => {
      console.log(`Tooltip ${index + 1}:`, tooltipElement);
    });
  }, [showTooltip]);

  const generateRandomData = (length: number, maxValue: number) => {
    return Array.from({ length }, () => ({
      value: Math.floor(Math.random() * maxValue),
    })) as lineDataItem[];
  };

  const generateEmployeeData = (length: number) => {
    return Array.from({ length }, (_, index) => ({
      id: `asdasdasd${index}`,
      name: `Deivisom ${index}`,
      date: "25/02/2025",
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus voluptas, at praesentium sapiente ipsum commodi repellendus iste quasi enim, vitae assumenda dolores expedita id ratione porro cum, labore dignissimos explicabo.".repeat(
          4
        ),
      score: 4.3,
    }));
  };

  const dataGrafic = generateRandomData(27, 100);
  const data = generateEmployeeData(20);

  return (
    <ContainerMain>
      <Container>
        <HeaderPage>
          <BoxItemHeader>
            <BoxContent>
              <TitleItem>N° Avaliações: </TitleItem>
              <TextItem>24</TextItem>
              <TextItem style={{ color: "gray", fontSize: 11 }}>
                - Hoje
              </TextItem>
            </BoxContent>
          </BoxItemHeader>
        </HeaderPage>

        <ContantAnalysis>
          <BoxBestEmployee>
            <HeaderBestEmployee>
              <TitleBestEmployee>Melhor Avaliado - Hoje</TitleBestEmployee>
              <EmployeeInfo>
                <ProfileCard />
                <View>
                  <TextItem>Deivison Johnny</TextItem>
                  <RatingContainer>
                    <TitleItem>Média</TitleItem>
                    <Rating>
                      <Text style={{ color: "white", fontSize: 13 }}>4.3</Text>
                      <Icon
                        name="star"
                        type="ionicon"
                        color={"yellow"}
                        size={10}
                      />
                    </Rating>
                  </RatingContainer>
                </View>
              </EmployeeInfo>
            </HeaderBestEmployee>

            <BoxResumeIA>
              <IAGeneratedInfo>
                <Text style={{ color: "white", fontSize: 10, marginLeft: 3 }}>
                  Gerado por IA
                </Text>
                <Icon
                  name="sparkles-outline"
                  type="ionicon"
                  size={10}
                  color={"#a6a2c4"}
                />
                <Text style={{ color: "#919191", fontSize: 9 }}>(Gemini)</Text>
              </IAGeneratedInfo>
              <Accordion>
                <AccordionTrigger style={accordionTriggerStyle}>
                  <Text style={{ color: "#fff", fontSize: 12 }}>
                    Resumo de hoje
                  </Text>
                </AccordionTrigger>
                <AccordionContent style={accordionContentStyle}>
                  <Text style={{ color: "#fff" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Harum, minima. Veniam vitae ex reiciendis vero modi,
                    deleniti laborum eligendi voluptatem fugita architecto
                    voluptatum autem animi nihil, quam, ducimus minus impedit.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto, perferendis reiciendis! Veniam quisquam repellat
                    quia quis vero? Accusantium quia quis hic magni nisi omnis
                    tempore harum ipsam et, blanditiis culpa.
                  </Text>
                </AccordionContent>
              </Accordion>
            </BoxResumeIA>

            <BoxGrafic>
              <UserAnalysisHeader>
                <Text style={{ color: "white", fontSize: 12 }}>
                  Análise do usuário
                </Text>
                <Icon
                  type="ionicon"
                  name="trending-up-outline"
                  color={"#37ff00"}
                  size={15}
                />
              </UserAnalysisHeader>
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
          </BoxBestEmployee>
        </ContantAnalysis>
      </Container>
    </ContainerMain>
  );
};

export default EmphasisEmployee;

// Styles
const ContainerMain = styled.ScrollView`
  height: 100%;
  background-color: #0e0e12;
`;

const Container = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 70px;
`;

const HeaderPage = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 10px;
  width: 100%;
  padding: 0px 10px 5px 10px;
`;

const BoxItemHeader = styled.View``;

const BoxContent = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 5px;
`;

const TitleItem = styled.Text`
  color: gray;
  font-size: 11px;
`;

const TextItem = styled.Text`
  color: white;
  font-size: 13px;
`;

const ContantAnalysis = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 70px;
`;

const BoxBestEmployee = styled.View`
  width: 100%;
  gap: 40px;
`;

const HeaderBestEmployee = styled.View`
  width: 100%;
  gap: 10px;
  margin-top: 10px;
`;

const TitleBestEmployee = styled.Text`
  color: #61737d;
  font-size: 12px;
`;

const EmployeeInfo = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const RatingContainer = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 5px;
`;

const Rating = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 3px;
`;

const BoxResumeIA = styled.View`
  padding: 0px 5px;
  gap: 5px;
`;

const IAGeneratedInfo = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 3px;
`;

const accordionTriggerStyle = {
  backgroundColor: "#16161d",
  padding: 10,
  borderTopStartRadius: 5,
  borderTopEndRadius: 5,
  paddingLeft: 15,
};

const accordionContentStyle = {
  paddingHorizontal: 10,
  borderWidth: 1,
  borderColor: "#16161d",
  backgroundColor: "#191921",
};

const BoxGrafic = styled.View`
  width: 100%;
  display: flex;
  gap: 20px;
  padding-left: 0px;
`;

const UserAnalysisHeader = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;
