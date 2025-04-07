import * as React from "react";
import SkeletonLoad from "../../../../components/loading/SkeletonLoad";
import {
  Animated,
  Easing,
  NativeScrollEvent,
  Platform,
  NativeSyntheticEvent,
  RefreshControl,
  FlatList,
} from "react-native";
import styled from "styled-components/native";
import Search from "../../../../components/search";
import CardAvaliation from "../../../../components/card-avaliation/CardAvaliation";

const AvaliationList = () => {
  const [isLoading, setLoading] = React.useState(false);
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);
  const heightAnim = React.useRef(new Animated.Value(0)).current;
  const hideTimeout = React.useRef<NodeJS.Timeout | null>(null);
  const isDragging = React.useRef(false);
  const scrollStartY = React.useRef(0);

  const TRIGGER_OFFSET = Platform.select({ ios: -30, android: 0 }) ?? 0;
  const AUTO_HIDE_TIMEOUT = 5000;

  const handleScrollBeginDrag = (
    e: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    isDragging.current = true;
    scrollStartY.current = e.nativeEvent.contentOffset.y;
  };

  const handleScrollEndDrag = () => {
    isDragging.current = false;
  };

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = e.nativeEvent.contentOffset.y;
    const pullDistance = scrollStartY.current - offsetY;

    const triggerCondition = Platform.select({
      ios: offsetY < TRIGGER_OFFSET,
      android: pullDistance == TRIGGER_OFFSET && isDragging.current,
    });

    if (triggerCondition && !showSearch && !isRefreshing) {
      showSearchInput();
    }
  };

  const showSearchInput = () => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
    }

    setIsRefreshing(true);
    Animated.timing(heightAnim, {
      toValue: 60,
      duration: 300,
      easing: Easing.out(Easing.quad),
      useNativeDriver: false,
    }).start(() => {
      setShowSearch(true);
      setIsRefreshing(false);
      hideTimeout.current = setTimeout(hideSearchInput, AUTO_HIDE_TIMEOUT);
    });
  };

  const hideSearchInput = () => {
    Animated.timing(heightAnim, {
      toValue: 0,
      duration: 250,
      easing: Easing.out(Easing.quad),
      useNativeDriver: false,
    }).start(() => setShowSearch(false));
  };

  const handleRefresh = () => {
    showSearchInput();
  };

  React.useEffect(() => {
    return () => {
      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current);
      }
    };
  }, []);

  const generateData = (length: number) => {
    return Array.from({ length }, (_, index) => ({
      id: `asdasdasd${index}`,
      name: `Deivison Johnny`,
      role: "Recepcionista",
      average: 4.8,
    }));
  };

  const data = generateData(20);

  return (
    <BoxMain>
      <Animated.View
        style={{
          height: heightAnim,
          overflow: "hidden",
          opacity: heightAnim.interpolate({
            inputRange: [0, 30, 60],
            outputRange: [0, 0.5, 1],
          }),
        }}
      >
        {showSearch && (
          <Search
            placeholder="Nome, função, setor, cpf..."
            style={{ marginTop: 10, marginBottom: 10 }}
          />
        )}
      </Animated.View>

      <BoxScroll>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <CardAvaliation
              score={4.7}
              comment="        Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam voluptates perspiciatis ullam suscipit rerum, laborum
              adipisci maxime beatae quaerat, soluta quis assumenda magnam
              exercitationem labore quas veniam officia fugit voluptate. Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Esse quas
              saunt repudiandae explicabo atque ipsam? Rem repudiandae, aperiam
              deserunt consequatur numquam placeat esse, accusamus quos
              temporibus ratione corporis dignissimos veniam. Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Laborum iure quae
              voluptates qui eaque omnis vel maiores aut dignissimos tempore ad,
              nulla quos ipsa, asperiores exercitationem sunt porro, fugit
              consequuntur? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Culpa, doloremque distinctio ullam ducimus, explicabo
              numquam laboriosam voluptate assumenda perferendis illo impedit
              consequuntur quibusdam a? Corporis atque provident nam architecto
              consequuntur?"
            />
          )}
          scrollEventThrottle={16}
          onScrollBeginDrag={handleScrollBeginDrag}
          onScrollEndDrag={handleScrollEndDrag}
          onScroll={handleScroll}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
              progressViewOffset={60}
            />
          }
          keyExtractor={(item) => item.id}
        />
      </BoxScroll>
    </BoxMain>
  );
};

export default AvaliationList;

const BoxMain = styled.View`
  background-color: #120e0e;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 15px;
  margin-bottom: 80px;
  gap: 10px;
`;

const BoxScroll = styled.View`
  width: 100%;
  height: min-content;
  padding: 5px 0px 0px 0px;
`;
