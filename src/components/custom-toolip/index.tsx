import * as React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import Tooltip from "react-native-walkthrough-tooltip";
import styled from "styled-components/native";

interface ToolipInfomationProps {
  text: string;
  iconSize?: number;
}

const ToolipInfomation = ({ text, iconSize }: ToolipInfomationProps) => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <View>
      <Tooltip
        isVisible={showTooltip}
        content={<TooltipText>{text}</TooltipText>}
        onClose={() => {
          setShowTooltip(false);
        }}
        contentStyle={style.tooltip}
        arrowSize={{ width: 0, height: 0 }}
        closeOnChildInteraction={false}
      >
        <TouchableOpacity onPress={() => setShowTooltip(true)}>
          <Icon
            name="information-circle-outline"
            size={iconSize ? iconSize : 14}
            type="ionicon"
            color={"#828282"}
            style={{ paddingTop: 2.5 }}
          />
        </TouchableOpacity>
      </Tooltip>
    </View>
  );
};

export default ToolipInfomation;

const TooltipText = styled.Text`
  color: white;
  font-size: 12px;
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
