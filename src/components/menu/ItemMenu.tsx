import * as React from "react";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";

import { router } from "expo-router";
import { itemMenu } from "../../app/hooks/useMenu";

interface ItemMenuProps {
  title: string;
  sizeTitle?: number;
  widthTitle?: number;
  nameIcon: string;
  sizeIcon?: number;
  widthIcon?: number;
  category?: string;
  uri?: string;
}

const MenuItem = (props: itemMenu) => {
  return (
    <BodyItemMenu onPress={() => router.navigate(props.uri)}>
      <Icon
        name={props.icon + "-outline"}
        size={props.sizeIcon ? props.sizeIcon : 20}
        color={"white"}
        type="ionicon"
      />
      <Title
        style={[
          props.sizeTitle ? { fontSize: props.sizeTitle } : {},
          props.widthIcon ? { width: `${props.widthIcon}%` } : { width: "80%" },
        ]}
      >
        {props.title}
      </Title>
    </BodyItemMenu>
  );
};

export default MenuItem;

const BodyItemMenu = styled.TouchableOpacity`
  width: 100%;
  padding: 10px 10px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

const Title = styled.Text`
  font-size: 16px;
  color: white;
`;
