import React, { ReactNode, useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Animated,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import styled from "styled-components/native";

const Accordion = ({ children }: { children: ReactNode }) => {
  const [expanded, setExpanded] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const toggleAccordion = () => {
    const toValue = expanded ? 0 : 1;
    setExpanded((prev) => !prev);

    Animated.timing(animation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    return () => {
      // Limpeza se necessário
    };
  }, [expanded]);

  const heightInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200],
  });

  const accordionTrigger = React.Children.toArray(children).find(
    (child: any) => child.type === AccordionTrigger
  );
  const accordionContent = React.Children.toArray(children).find(
    (child: any) => child.type === AccordionContent
  );

  return (
    <GestureHandlerRootView>
      <Container>
        <Header onPress={toggleAccordion}>
          {React.isValidElement(accordionTrigger) && (
            <View style={accordionTrigger.props.style}>{accordionTrigger}</View>
          )}
        </Header>
        <Content style={{ height: heightInterpolation }} expanded={expanded}>
          <ScrollView nestedScrollEnabled={true}>
            {React.isValidElement(accordionContent) && (
              <View style={accordionContent.props.style}>
                {accordionContent}
              </View>
            )}
          </ScrollView>
        </Content>
      </Container>
    </GestureHandlerRootView>
  );
};

export default Accordion;

export const AccordionTrigger = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}) => {
  return <>{children}</>;
};

export const AccordionContent = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}) => {
  return <>{children}</>;
};

// Estilos padrão removidos (resetados)
const Container = styled.View``;

const Header = styled.TouchableOpacity``;

const Content = styled(Animated.View)<{ expanded: boolean }>``;
