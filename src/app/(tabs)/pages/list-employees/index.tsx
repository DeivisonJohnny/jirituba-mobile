import * as React from "react";
import CardEmployee from "../../../../components/card-employee/CardEmployee";
import SkeletonLoad from "../../../../components/loading/SkeletonLoad";
import { ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";

interface ListEmployeesProps {}

const ListEmployees = (props: ListEmployeesProps) => {
  const [isLoading, setLoading] = React.useState(false);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  function handleSearch() {
    console.log("search");
  }

  return (
    <BoxMain>
      <BoxInputSearch>
        <InputSearch
          placeholder="Nome, função, setor, cpf..."
          placeholderTextColor={"#63636889"}
        ></InputSearch>
        <ButtonSearch onPress={handleSearch}>
          <Icon type="ionicon" name="search" color={"white"} size={18}></Icon>
        </ButtonSearch>
      </BoxInputSearch>
      <BoxScroll>
        <ScrollView
          contentContainerStyle={{
            alignItems: "center",
            gap: 10,
            width: "100%",
            paddingBottom: 80
          }}
          style={{ backgroundColor: "#0e0e12" }}
        >
          {isLoading
            ? Array.from({ length: 40 }).map((_, index) => (
                <SkeletonLoad
                  key={index.toString()}
                  height={50}
                  width={"90%"}
                ></SkeletonLoad>
              ))
            : Array.from({ length: 40 }).map((_, index) => (
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
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

const BoxInputSearch = styled.View`
  width: 90%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 80px;
  z-index: 2;  
`;

const BoxScroll = styled.View`
  width: 100%;
  padding: 5px 0px 0px 0px;
`;

const InputSearch = styled.TextInput`
  background-color: #1c1c23;
  padding: 0px 5px;
  border-radius: 5px 0px 0px 5px;
  width: 90%;
  height: 100%;
  border: 1px solid #2b2b35;
  color: white;
  letter-spacing: 0.8px;
  font-weight: normal;
`;

const ButtonSearch = styled.TouchableOpacity`
  background-color: #45455a;
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 5px 5px 0px;
`;
