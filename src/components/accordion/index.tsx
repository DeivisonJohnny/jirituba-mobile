import React, { ReactNode, useState, useEffect, useCallback } from "react";
import { ScrollView, Animated, StyleProp, ViewStyle } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import styled from "styled-components/native";

interface AccordionProps {
  children: ReactNode;
}

interface AccordionTriggerProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

interface AccordionContentProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Accordion = ({ children }: AccordionProps) => {
  const [expanded, setExpanded] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const toggleAccordion = useCallback(() => {
    const toValue = expanded ? 0 : 1;
    setExpanded((prev) => !prev);

    Animated.timing(animation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [expanded, animation]);

  useEffect(() => {
    return () => {
      // Cleanup (if needed)
    };
  }, [expanded]);

  const heightInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200], // Adjust height as needed
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
            <TriggerContainer style={accordionTrigger.props.style}>
              {accordionTrigger}
            </TriggerContainer>
          )}
        </Header>
        <Content style={{ height: heightInterpolation }} expanded={expanded}>
          <ScrollView nestedScrollEnabled={true}>
            {React.isValidElement(accordionContent) && (
              <ContentContainer style={accordionContent.props.style}>
                {accordionContent}
              </ContentContainer>
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
}: AccordionTriggerProps) => {
  return <>{children}</>;
};

export const AccordionContent = ({
  children,
  style,
}: AccordionContentProps) => {
  return <>{children}</>;
};

// Styled Components
const Container = styled.View`
  width: 100%;
`;

const Header = styled.TouchableOpacity`
  width: 100%;
`;

const TriggerContainer = styled.View`
  width: 100%;
`;

const Content = styled(Animated.View)<{ expanded: boolean }>`
  overflow: hidden;
`;

const ContentContainer = styled.View`
  width: 100%;
`;
