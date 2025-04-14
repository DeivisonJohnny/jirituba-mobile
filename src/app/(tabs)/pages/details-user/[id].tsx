import { useCallback, useEffect, useState } from "react";
import styled from "styled-components/native";
import { useLocalSearchParams, usePathname, useRouter } from "expo-router";
import { Icon } from "react-native-elements";
import { Text } from "react-native";
import TextIA from "../../../../components/text-ia";
import EmployeeApi, { EmployeeType } from "../../../api/employee";

const DetailsUser = () => {
  const [data, setData] = useState<EmployeeType | null>(null);

  const { id } = useLocalSearchParams();
  const router = useRouter();

  if (!id) {
    router.back();
  }

  const fetchData = useCallback(async () => {
    try {
      const data = await EmployeeApi.getByIdOrCPF(id as string);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const loadData = async () => {
      await fetchData();
    };
    loadData();
  }, []);

  return (
    <ContainerMain>
      <BoxEmployee>
        <ImageProfile
          source={require("../../../assets/img/foto-perfil.jpg")}
        ></ImageProfile>
        <ContentData>
          <BoxName>
            <Label>Nome</Label>
            <Name>
              {data?.name} {data?.surname}
            </Name>
          </BoxName>
          <BoxCpf>
            <Label>CPF</Label>
            <Cpf>{data?.cpf}</Cpf>
          </BoxCpf>
          <BoxAssessable>
            <Assessable>
              {data?.assessable ? "Perfil avaliável" : "Não avaliável"}
            </Assessable>
          </BoxAssessable>
        </ContentData>
        <BoxActions>
          <BoxScore>
            <Score>4.5</Score>
            <Icon type="ionicon" name="star" size={15} color={"yellow"} />
          </BoxScore>
        </BoxActions>
      </BoxEmployee>
      <ContainerAttributes>
        <ProfessionalAttributes>
          <LabelContainer>Atributos Profissionais</LabelContainer>
        </ProfessionalAttributes>
        <BoxAttributes>
          <Attribute>
            <LabelAttribute>Função</LabelAttribute>
            <TextAttribute> {data?.rolesEmployee.roles.name} </TextAttribute>
          </Attribute>
          <Attribute>
            <LabelAttribute>Setor</LabelAttribute>
            <TextAttribute> {data?.sector.name} </TextAttribute>
          </Attribute>
          <Attribute>
            <LabelAttribute>Turno</LabelAttribute>
            <TextAttribute> {data?.shift} </TextAttribute>
          </Attribute>
        </BoxAttributes>
      </ContainerAttributes>

      <ContainerActions>
        <Text style={{ color: "#797979", marginLeft: 10 }}>Ações</Text>
        <ContainerButtons>
          <ButtonAvaliations>
            <Icon
              name="reader-outline"
              type="ionicon"
              size={25}
              color={"#00d62e"}
            />

            <Text style={{ color: "#00d62e", fontSize: 12 }}>Avaliações</Text>
          </ButtonAvaliations>
          <ButtonEdit>
            <Icon
              name="create-outline"
              type="ionicon"
              size={25}
              color={"#53c5fa"}
            />
            <Text style={{ color: "#53c5fa", fontSize: 12 }}>Editar</Text>
          </ButtonEdit>

          <ButtonDelete>
            <Icon
              name="trash-outline"
              type="ionicon"
              size={25}
              color={"#ff4d4d"}
            />
            <Text style={{ color: "#ff4d4d", fontSize: 12 }}>Deletar</Text>
          </ButtonDelete>
        </ContainerButtons>
      </ContainerActions>
      <TextIA>
        <Text style={{ color: "#fff" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          quia, esse porro dolores ad qui dicta labore vel, consequuntur,
          consectetur quibusdam. Nihil doloribus quasi sit, facere provident
          voluptatum soluta recusandae! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatibus fuga blanditiis repellat optio at
          consequatur quod sapiente ab saepe omnis eveniet animi minima
          temporibus, vero, non illo ducimus distinctio provident. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Ullam explicabo in
          maiores, incidunt sit provident quisquam, laudantium asperiores ex
          obcaecati consectetur officiis! Modi inventore rerum expedita
          voluptatem ut nemo aliquam?
        </Text>
      </TextIA>
    </ContainerMain>
  );
};

export default DetailsUser;

const ContainerMain = styled.ScrollView`
  display: flex;
  flex-direction: column;
  background-color: #0e0e12;
  color: white;
  padding: 0px 20px;
  height: fit-content;
`;

const ImageProfile = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 5px;
`;

const BoxEmployee = styled.View`
  width: 100%;
  height: 105px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px 10px;
  gap: 10px;
`;

const BoxName = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const ContentData = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: fit-content;
  height: 100%;
`;

const Label = styled.Text`
  font-size: 10px;
  color: #4d4d4d;
  font-weight: bold;
  letter-spacing: 0.5px;
`;
const Name = styled.Text`
  font-size: 13px;
  color: white;
`;

const BoxCpf = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Cpf = styled.Text`
  font-size: 13px;
  color: white;
`;

const BoxAssessable = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 5px;
  width: 100%;
`;

const Assessable = styled.Text`
  font-size: 10px;
  color: #53baff;
`;

const BoxActions = styled.View`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;

const BoxScore = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 5px;
`;

const Score = styled.Text`
  font-size: 18px;
  color: white;
`;
const ProfessionalAttributes = styled.View``;

const ContainerAttributes = styled.View`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  padding: 10px 20px;
`;
const LabelContainer = styled.Text`
  font-size: 12px;
  color: #929292;
  letter-spacing: 0.3px;
`;

const BoxAttributes = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const Attribute = styled.View`
  display: flex;
  flex-direction: column;
`;

const LabelAttribute = styled.Text`
  font-size: 10px;
  color: #797979;
  letter-spacing: 0.5px;
`;

const TextAttribute = styled.Text`
  color: white;
`;

const TitleTable = styled.Text`
  width: 100%;

  padding: 10px 0px 10px 5px;
  color: #797979;
`;

const ContainerActions = styled.View`
  width: 100%;
  flex-direction: column;
  margin: 40px 0px;
  gap: 15px;
`;

const ContainerButtons = styled.View`
  width: 100%;
  justify-content: space-around;
  flex-direction: row;
`;

const ButtonAvaliations = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  gap: 4px;

  background-color: #1c1c23;
  gap: 5px;
  padding: 10px;
  border-radius: 5px;
  padding: 10px;
`;

const ButtonEdit = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  gap: 4px;

  background-color: #1c1c23;
  padding: 10px 20px;
  border-radius: 5px;
`;

const ButtonDelete = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  gap: 4px;

  background-color: #1c1c23;
  padding: 10px 20px;
  border-radius: 5px;
`;
