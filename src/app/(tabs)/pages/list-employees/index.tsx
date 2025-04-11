import { useEffect, useState, useCallback } from "react";
import CardEmployee from "../../../../components/card-employee/CardEmployee";
import SkeletonLoad from "../../../../components/loading/SkeletonLoad";
import { FlatList, RefreshControl } from "react-native";
import styled from "styled-components/native";
import Search from "../../../../components/search";
import EmployeeApi, { EmployeeType } from "../../../api/employee";
import { usePathname } from "expo-router";

interface ListEmployeesProps {}

const ListEmployees = (props: ListEmployeesProps) => {
  const [isLoading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<EmployeeType[]>([]);

  const pathname = usePathname();

  const fetchData = useCallback(async () => {
    try {
      const data = await EmployeeApi.getAll();
      setData(data);
    } catch (error) {
      console.error("Erro ao buscar funcionários:", error);
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    const loadData = async () => {
      await fetchData();
      setTimeout(() => setLoading(false), 1000);
    };

    loadData();
  }, [pathname, fetchData]);

  const onRefresh = async () => {
    setRefreshing(true);
    setLoading(true);

    await fetchData();

    setTimeout(() => {
      setLoading(false);
      setRefreshing(false);
    }, 1000);
  };

  return (
    <BoxMain>
      <Search
        placeholder="Nome, função, setor, cpf..."
        style={{ marginTop: 10, marginBottom: 10 }}
      />
      <BoxScroll>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) =>
            isLoading ? (
              <SkeletonLoad
                key={index}
                style={{
                  width: "100%",
                  height: 60,
                  borderRadius: 10,
                  marginBottom: 10,
                }}
              />
            ) : (
              <CardEmployee
                idUser={item.id}
                name={item.name}
                roles={item.rolesEmployee.roles.name}
                score={4.9}
              />
            )
          }
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
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
  padding: 0px 15px 110px 15px;
  margin-bottom: 80px;
`;

const BoxScroll = styled.View`
  width: 100%;
  height: min-content;
  padding: 5px 0px 0px 0px;
`;
