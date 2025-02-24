import * as React from "react";
import styled from "styled-components/native";
import { useLocalSearchParams } from "expo-router";
import { Icon } from "react-native-elements";
import TableValidation from "../../../../components/table/tableAvaliation";
import { Dimensions, Text } from "react-native";
import TextIA from "../../../../components/text-ia";

interface DetailsUserProps {}

const DetailsUser = () => {
  const { id } = useLocalSearchParams();

  const { height } = Dimensions.get("window");
  const halfHeight = height / 2 - height * 0.15;

  return (
    <ContainerMain>
      <BoxEmployee>
        <ImageProfile
          source={require("../../../assets/img/foto-perfil.jpg")}
        ></ImageProfile>
        <ContentData>
          <BoxName>
            <Label>Nome</Label>
            <Name>Deivison Johnny</Name>
          </BoxName>
          <BoxCpf>
            <Label>CPF</Label>
            <Cpf>102.584.434.30</Cpf>
          </BoxCpf>
          <BoxAssessable>
            <Assessable>Perfil avaliável</Assessable>
          </BoxAssessable>
        </ContentData>
        <BoxActions>
          <BoxScore>
            <Score>4.5</Score>
            <Icon type="ionicon" name="star" size={15} color={"yellow"} />
          </BoxScore>
          <BoxButtons>
            <ButtonDelete>
              <Button>
                <Icon
                  type="ionicon"
                  name="trash-outline"
                  size={15}
                  color={"red"}
                />
              </Button>
            </ButtonDelete>
            <ButtonUpdate>
              <Button>
                <Icon
                  type="ionicon"
                  name="create-outline"
                  size={15}
                  color="#53c5fa"
                />
              </Button>
            </ButtonUpdate>
          </BoxButtons>
        </BoxActions>
      </BoxEmployee>
      <ContainerAttributes>
        <ProfessionalAttributes>
          <LabelContainer>Atributos Profissionais</LabelContainer>
        </ProfessionalAttributes>
        <BoxAttributes>
          <Attribute>
            <LabelAttribute>Função</LabelAttribute>
            <TextAttribute>Recepcionista</TextAttribute>
          </Attribute>
          <Attribute>
            <LabelAttribute>Setor</LabelAttribute>
            <TextAttribute>Atendimento</TextAttribute>
          </Attribute>
          <Attribute>
            <LabelAttribute>Turno</LabelAttribute>
            <TextAttribute>Noite</TextAttribute>
          </Attribute>
        </BoxAttributes>
      </ContainerAttributes>
      <ContainerTable>
        <TitleTable>Histórico de avaliações</TitleTable>
        <TableValidation width={100} height={`${halfHeight}px`} />
      </ContainerTable>

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

const BoxButtons = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

const Button = styled.TouchableOpacity`
  padding: 3px;
  border-radius: 3px;
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

const ContainerTable = styled.View`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin: 10px 0px 30px 0px;
`;

const ButtonUpdate = styled.TouchableOpacity`
  padding: 4px;
  border-radius: 4px;
  border: 0.8px dashed #53c5fa;
`;

const ButtonDelete = styled.TouchableOpacity`
  padding: 4px;
  border-radius: 4px;
  border: 0.8px dashed #ff0004;
`;
