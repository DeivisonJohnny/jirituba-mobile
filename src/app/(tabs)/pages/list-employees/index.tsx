import * as React from "react";
import CardEmployee from "../../../../components/card-employee/CardEmployee";
import SkeletonLoad from "../../../../components/loading/SkeletonLoad";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import InputSearch from "../../../../components/input-search";

interface ListEmployeesProps {}

const ListEmployees = (props: ListEmployeesProps) => {
  const [isLoading, setLoading] = React.useState(false);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <BoxMain>
      <InputSearch
        placeholder="Nome, função, setor, cpf..."
        style={{ marginTop: 10, marginBottom: 10 }}
      />
      <BoxScroll>
        <ScrollView
          contentContainerStyle={{
            alignItems: "center",
            gap: 10,
            width: "100%",
            paddingBottom: 140,
          }}
        >
          {isLoading
            ? Array.from({ length: 20 }).map((_, index) => (
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
      </BoxScroll>
    </BoxMain>
  );
};

export default ListEmployees;
const BoxMain = styled.View`
  background-color: #0e0e12;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 15px;
  margin-bottom: 80px;
`;

const BoxScroll = styled.View`
  width: 100%;
  height: min-content;
  padding: 5px 0px 0px 0px;
`;
