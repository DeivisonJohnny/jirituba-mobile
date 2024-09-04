import * as React from "react";
import CardEmployee from "../../../components/card-employee/CardEmployee";
import SkeletonLoad from "../../../components/loading/SkeletonLoad";
import { ScrollView } from "react-native";

interface ListEmployeesProps {}

const ListEmployees = (props: ListEmployeesProps) => {
  const [isLoading, setLoading] = React.useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: "center",
        gap: 10,
        paddingVertical: 10,
      }}
      style={{backgroundColor: "#0e0e12"}}
    >
      {isLoading
        ? Array.from({ length: 10 }).map((_, index) => (
            <SkeletonLoad
              key={index.toString()}
              height={50}
              width={"90%"}
            ></SkeletonLoad>
          ))
        : Array.from({ length: 20 }).map((_, index) => (
            <CardEmployee
              key={index.toString()}
              name="Deivison Johnny"
              roles="Recepcionista"
              score={4.9}
              
            ></CardEmployee>
          ))}
    </ScrollView>
  );
};

export default ListEmployees;

