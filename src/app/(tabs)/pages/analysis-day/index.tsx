import * as React from "react";
import styled from "styled-components/native";
import { lineDataItem } from "react-native-gifted-charts";
import {
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  View,
  ViewStyle,
} from "react-native";
import ProfileCard from "../../../../components/profile";
import { useRef, useEffect } from "react";
import { Icon } from "react-native-elements";
import Accordion, {
  AccordionContent,
  AccordionTrigger,
} from "../../../../components/accordion";

const AnalysisDay = () => {
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

  // const dataGrafic = generateRandomData(27, 100);
  const data = generateEmployeeData(30);

  const renderProfileIcons = (index: number) => {
    switch (index) {
      case 0:
        return (
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Icon
              name="caret-up-outline"
              type="ionicon"
              color={"green"}
              size={11}
            />
            <Text style={{ color: "white", fontSize: 11 }}>2</Text>
          </View>
        );
      case 1:
        return (
          <Icon
            name="crown"
            type="font-awesome-5"
            color={"yellow"}
            size={12}
            style={{ position: "relative", top: 0, zIndex: 1000 }}
          />
        );
      default:
        return (
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 11 }}>3</Text>
            <Icon
              name="caret-down-outline"
              type="ionicon"
              color={"red"}
              size={12}
            />
          </View>
        );
    }
  };

  return (
    <ContainerMain>
      <Container>
        <HeaderPage>
          <HeaderTitle>Análise - hoje</HeaderTitle>
          <ScrollView horizontal>
            <ProfilesContainer>
              {Array.from({ length: 3 }).map((_, index) => (
                <BoxItemHeader key={index}>
                  {renderProfileIcons(index)}
                  <ProfileCard
                    borderColor="transparent"
                    size={index === 1 ? 70 : 50}
                  />
                  <ProfileInfo>
                    <ProfileName>Deivison Johnny</ProfileName>
                    <RatingContainer>
                      <RatingText>4.2</RatingText>
                      <Icon
                        name="star"
                        type="ionicon"
                        size={10}
                        color={"yellow"}
                      />
                    </RatingContainer>
                  </ProfileInfo>
                </BoxItemHeader>
              ))}
            </ProfilesContainer>
          </ScrollView>
        </HeaderPage>
        <BoxFlastlist>
          <ListResumeComment>
            <IAResumeHeader>
              <IAResumeText>Resumo - IA</IAResumeText>
              <Icon
                name="sparkles-outline"
                size={12}
                color={"#9c9c9c"}
                type="ionicon"
              />
            </IAResumeHeader>

            <FlatList
              data={data}
              renderItem={({ item }) => (
                <ResumeItem key={item.id}>
                  <Accordion>
                    <AccordionTrigger style={accordionTriggerStyle}>
                      <ProfileCard borderColor="transparent" />
                      <RatingInfo>
                        <RatingLabel>Média</RatingLabel>
                        <RatingValue>3.7</RatingValue>
                        <Icon
                          name="star"
                          type="ionicon"
                          color={"yellow"}
                          size={10}
                        />
                      </RatingInfo>
                      <Icon
                        name="chevron-down-outline"
                        type="ionicon"
                        size={17}
                        color={"#444444"}
                      />
                    </AccordionTrigger>
                    <AccordionContent>
                      <ResumeContent>
                        <ResumeText>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Laboriosam voluptates perspiciatis ullam
                          suscipit rerum, laborum adipisci maxime beatae
                          quaerat, soluta quis assumenda magnam exercitationem
                          labore quas veniam officia fugit voluptate. Lorem
                          ipsum, dolor sit amet consectetur adipisicing elit.
                          Esse quas saunt repudiandae explicabo atque ipsam? Rem
                          repudiandae, aperiam deserunt consequatur numquam
                          placeat esse, accusamus quos temporibus ratione
                          corporis dignissimos veniam. Lorem ipsum, dolor sit
                          amet consectetur adipisicing elit. Laborum iure quae
                          voluptates qui eaque omnis vel maiores aut dignissimos
                          tempore ad, nulla quos ipsa, asperiores exercitationem
                          sunt porro, fugit consequuntur? Lorem ipsum dolor sit
                          amet consectetur adipisicing elit. Culpa, doloremque
                          distinctio ullam ducimus, explicabo numquam laboriosam
                          voluptate assumenda perferendis illo impedit
                          consequuntur quibusdam a? Corporis atque provident nam
                          architecto consequuntur?
                        </ResumeText>
                      </ResumeContent>
                    </AccordionContent>
                  </Accordion>
                </ResumeItem>
              )}
              keyExtractor={(item) => item.id}
            />
          </ListResumeComment>
        </BoxFlastlist>
      </Container>
    </ContainerMain>
  );
};

export default AnalysisDay;

// Styles
const ContainerMain = styled.View`
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
  position: absolute;
  background-color: #0e0e12;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 10px;
  width: 100%;
  padding: 0px 0px 5px 0px;
  z-index: 10;
`;

const HeaderTitle = styled.Text`
  color: #9c9c9c;
  font-size: 12px;
  padding-left: 10px;
`;

const ProfilesContainer = styled.View`
  flex-direction: row;
  gap: 10px;
  justify-content: space-evenly;
  padding: 0px 10px;
  min-width: 100%;
  max-height: 100%;
`;

const BoxItemHeader = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
`;

const ProfileInfo = styled.View`
  align-items: center;
`;

const ProfileName = styled.Text`
  color: white;
  font-size: 12px;
`;

const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 2px;
`;

const RatingText = styled.Text`
  color: white;
`;

const BoxFlastlist = styled.View``;

const ListResumeComment = styled.View`
  width: 100%;
  gap: 10px;
  padding: 180px 10px 0px 10px;
  margin-bottom: 30px;
`;

const IAResumeHeader = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 4px;
`;

const IAResumeText = styled.Text`
  color: #9c9c9c;
  font-size: 12px;
  padding-left: 10px;
`;

const ResumeItem = styled.View`
  background-color: #15151b;
  border-radius: 7px;
  margin: 5px 0px;
`;

const accordionTriggerStyle: ViewStyle = {
  backgroundColor: "#191920",
  borderColor: "#191920",
  width: "100%",
  justifyContent: "space-between",
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: 5,
  paddingHorizontal: 15,
  borderRadius: 7,
};

const RatingInfo = styled.View`
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;

const RatingLabel = styled.Text`
  color: #4c4c5e;
  font-size: 12px;
`;

const RatingValue = styled.Text`
  color: white;
  font-size: 12px;
  font-weight: bold;
`;

const ResumeContent = styled.View`
  background-color: #15151b;
`;

const ResumeText = styled.Text`
  color: #fff;
  padding: 0px 15px;
  text-align: justify;
`;
