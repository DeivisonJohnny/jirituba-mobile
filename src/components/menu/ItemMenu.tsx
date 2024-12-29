import * as React from "react";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";

interface ItemMenuProps {
  title: string;
  sizeTitle?: number;
  widthTitle?: number;
  nameIcon: string;
  sizeIcon?: number;
  widthIcon?: number;
  category?: string;
}

const ItemMenu = (props: ItemMenuProps) => {
  return (
    <BodyItemMenu>
      <Icon
        name={props.nameIcon + "-sharp"}
        size={props.sizeIcon ? props.sizeIcon : 20}
        color={'white'}
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

export default ItemMenu;

const BodyItemMenu = styled.TouchableOpacity`
  width: 100%;
  padding: 10px 10px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

const Title = styled.Text`
  font-size: 18px;
  color: white;
`;
