import { ViewStyle } from "react-native";
import styled from "styled-components/native";
import Accordion, { AccordionContent, AccordionTrigger } from "../accordion";
import ProfileCard from "../profile";
import { Icon } from "react-native-elements";

interface CardAvaliationProps {
  photoUser?: string;
  score: number;
  comment: string;
}
export default function CardAvaliation(props: CardAvaliationProps) {
  return (
    <AvaliationItem>
      <Accordion>
        <AccordionTrigger style={accordionTriggerStyle}>
          <ProfileCard borderColor="transparent" />
          <RatingInfo>
            <RatingLabel>Média</RatingLabel>
            <RatingValue> {props.score} </RatingValue>
            <Icon name="star" type="ionicon" color={"yellow"} size={10} />
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
            <ResumeText>{props.comment}</ResumeText>
          </ResumeContent>
        </AccordionContent>
      </Accordion>
    </AvaliationItem>
  );
}

const AvaliationItem = styled.View`
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
