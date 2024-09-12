import * as React from 'react';
import { Icon } from 'react-native-elements';
import styled from 'styled-components/native';

interface ButtonUploadProps {}

const ButtonUpload = (props: ButtonUploadProps) => {
  return (
    <ButtonContainer>
        <Icon type='octicon' name='upload' size={30} />
    </ButtonContainer>
  );
};
export default ButtonUpload;

const ButtonContainer = styled.TouchableOpacity`
padding: 20px;
background-color: gray;
border-radius: 7px;
width: 83px;
height: 80px;
display: flex;
align-items: center;
justify-content: center;

`

