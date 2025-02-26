// components/Accordion.js
import React, { ReactNode, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";
import { Icon } from "react-native-elements";
import {
  ScrollView,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import styled from "styled-components/native";

const Accordion = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const [expanded, setExpanded] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const toggleAccordion = () => {
    const toValue = expanded ? 0 : 1;
    setExpanded(!expanded);

    Animated.timing(animation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    // Lógica que pode causar a atualização do estado
    return () => {
      // Limpeza se necessário
    };
  }, [expanded]); // Dependência para monitorar mudanças

  const heightInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100], // Ajuste conforme necessário
  });

  return (
    <GestureHandlerRootView>
      <Container>
        <Header onPress={toggleAccordion}>
          <ContainerTitle>
            <Title>{title}</Title>
            <Icon
              name="chevron-down-outline"
              type="ionicon"
              color={"#909090"}
              size={15}
            />
          </ContainerTitle>
        </Header>
        <Content style={{ height: heightInterpolation }} expanded={expanded}>
          <View>{children}</View>
        </Content>
      </Container>
    </GestureHandlerRootView>
  );
};

export default Accordion;

const ContainerTitle = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 4px 7px;
`;

const Container = styled.View`
  border-width: 1px;
  border-color: #1c1c24;
  border-radius: 5px;
  margin-bottom: 10px;
  overflow: hidden;
`;

const Header = styled.TouchableOpacity`
  padding: 15px;
  background-color: #1c1c24;
  border-radius: 5px;
`;

const Title = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: white;
`;

const Content = styled(Animated.View)<{ expanded: boolean }>`
  background-color: #1c1c24;
  padding: ${({ expanded }: { expanded: boolean }) =>
    expanded ? "10px" : "0"};
`;

const Scroll = styled.ScrollView.attrs({
  nestedScrollEnabled: true,
})``;
