import { Skeleton } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

interface propsSkeleton {
  height: number | "auto" | `${number}%`;
  width: number | "auto" | `${number}%`;
  key?: string;
}

const SkeletonLoad = (props: propsSkeleton) => {
  const Gradient = () => {
    return (
      <LinearGradient
        style={{ height: "100%", width: "100%" }}
        colors={["#1C1C23", "#36364292"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      ></LinearGradient>
    );
  };

  return (
    <Skeleton
      animation="wave"
      width={props.width}
      height={props.height}
      skeletonStyle={styles.bar}
      style={styles.skeleton}
      LinearGradientComponent={Gradient}
    ></Skeleton>
  );
};

export default SkeletonLoad;

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: "#1C1C23",
    color: "red",
  },

  bar: {
    backgroundColor: "transparent",
  },
});
