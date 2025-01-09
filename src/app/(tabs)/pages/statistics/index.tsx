import * as React from "react";
import styled from "styled-components/native";
import { BarChart } from "react-native-gifted-charts";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import ProfileCard from "../../../../components/profile";
import { Icon } from "react-native-elements";
import Tooltip from "react-native-walkthrough-tooltip";
import { useRef, useEffect } from "react";

interface AvaliationDayProps {}

const AvaliationDay = (props: AvaliationDayProps) => {
  const { width } = Dimensions.get("window");

  const [showTooltip, setShowTooltip] = React.useState(false);
  const tooltipRefs = useRef([]);

  useEffect(() => {
    // Aqui você pode acessar todos os elementos <Tooltip />
    tooltipRefs.current.forEach((tooltipElement, index) => {
      console.log(`Tooltip ${index + 1}:, tooltipElement`); // Exibe cada elemento <Tooltip />
    });
  }, [showTooltip]);

  const barData = [
    {
      value: 25,
      frontColor: "#006DFF",
      label: "Seg",
    },
    {
      value: 35,
      frontColor: "#006DFF",
      label: "Ter",
    },
    {
      value: 45,
      frontColor: "#006DFF",
      label: "Qua",
    },
    {
      value: 52,
      frontColor: "#006DFF",
      label: "Qui",
    },
    {
      value: 30,
      frontColor: "#006DFF",
      label: "Sex",
    },
    {
      value: 68,
      frontColor: "#006DFF",
      label: "Sab",
    },
    {
      value: 24,
      frontColor: "#006DFF",
      label: "Dom",
    },
  ];

  return (
    <ContainerMain>
      <Container>
        <BoxInfDay>
          <BoxInf>
            <BoxTitle>
              <Title>Nº Avaliações</Title>
              <Tooltip
                isVisible={showTooltip}
                content={
                  <TooltipText>
                    Informações abaixo diz a quantidade de avaliações(Positivas
                    e Negativas) acontecidas no dia
                  </TooltipText>
                }
                placement="top"
                onClose={() => setShowTooltip(false)}
                contentStyle={style.tooltip}
              >
                <TouchableOpacity onPress={() => setShowTooltip(true)}>
                  <Icon
                    name="information-circle-outline"
                    size={14}
                    type="ionicon"
                    color={"#828282"}
                    style={{ paddingTop: 2.5 }}
                  />
                </TouchableOpacity>
              </Tooltip>
            </BoxTitle>

            <BoxScore>
              <BoxNuScore>
                <ScoreUp>12</ScoreUp>
                <Icon
                  name="caret-up-outline"
                  size={15}
                  type="ionicon"
                  color={"lightgreen"}
                />
              </BoxNuScore>
              <BoxNuScore>
                <ScoreDown>6</ScoreDown>
                <Icon
                  name="caret-down-outline"
                  size={15}
                  type="ionicon"
                  color={"red"}
                />
              </BoxNuScore>
            </BoxScore>
          </BoxInf>
          <BoxInf>
            <BoxTitle>
              <Title>Destaque</Title>
              <Tooltip
                isVisible={false}
                content={
                  <TooltipText>
                    Informações abaixo diz a quantidade de avaliações(Positivas
                    e Negativas) acontecidas no dia
                  </TooltipText>
                }
                placement="top"
                onClose={() => setShowTooltip(false)}
                contentStyle={style.tooltip}
              >
                <TouchableOpacity onPress={() => setShowTooltip(true)}>
                  <Icon
                    name="information-circle-outline"
                    size={14}
                    type="ionicon"
                    color={"#828282"}
                    style={{ paddingTop: 2.5 }}
                  />
                </TouchableOpacity>
              </Tooltip>
            </BoxTitle>
            <BoxUser>
              <ProfileCard size={35} />
              <BoxUserStatus>
                <MediaScore>5.2</MediaScore>
                <Icon
                  name="caret-up-outline"
                  size={15}
                  type="ionicon"
                  color={"lightgreen"}
                />
              </BoxUserStatus>
            </BoxUser>
          </BoxInf>
        </BoxInfDay>
        <BoxGrafic>
          <BarChart
            data={barData}
            barWidth={16}
            initialSpacing={12}
            barBorderRadius={4}
            xAxisType={"solid"}
            xAxisColor={"lightgray"}
            yAxisTextStyle={{ color: "lightgray" }}
            stepValue={10}
            maxValue={100}
            noOfSections={6}
            showFractionalValues
            isAnimated
            yAxisLabelTexts={[
              "0",
              "10",
              "20",
              "30",
              "40",
              "50",
              "60",
              "70",
              "80",
              "90",
              "100",
            ]}
            labelWidth={20}
            xAxisLabelTextStyle={{ color: "lightgray", textAlign: "center" }}
            yAxisColor={"gray"}
            yAxisThickness={1}
            xAxisThickness={1}
            showLine
            lineConfig={{
              color: "#F29C6E",
              thickness: 1.5,
              curved: true,
              hideDataPoints: true,
              shiftY: 20,
              initialSpacing: 0,
            }}
          />
        </BoxGrafic>
      </Container>
    </ContainerMain>
  );
};

export default AvaliationDay;

const TooltipText = styled.Text`
  color: white;
  font-size: 12px;
`;

const ContainerMain = styled.ScrollView`
  background-color: #0e0e12;
`;

const Container = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const BoxInfDay = styled.View`
  width: 90%;
  background-color: #14141a;
  height: 100px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  border: 1px solid #21212a;
`;

const ScoreUp = styled.Text`
  font-size: 22px;
  color: white;
`;

const ScoreDown = styled.Text`
  color: white;
  font-size: 22px;
`;

const BoxInf = styled.View`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  height: 80%;
  width: 40%;
`;

const BoxScore = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 25px;
  align-items: center;
  width: 100%;
  height: 42px;
`;

const BoxNuScore = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1px;
`;

const BoxTitle = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const Title = styled.Text`
  color: white;
`;

const BoxUser = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

const BoxUserStatus = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const MediaScore = styled.Text`
  font-size: 16px;
  color: white;
`;

const BoxGrafic = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  background-color: #343341;
  padding: 10px 30px 5px 5px;
  border-radius: 10px;
  margin-top: 40px;
  margin-bottom: 70px;
`;

const style = StyleSheet.create({
  tooltip: {
    height: "auto",
    backgroundColor: "black",
    shadowColor: "#ff6e5b",
    borderWidth: 0.5,
    borderColor: "#ff6e5b",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
});