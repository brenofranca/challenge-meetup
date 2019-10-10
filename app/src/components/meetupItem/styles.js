import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Card = styled.View`
  border-radius: 7px;
  background-color: #fff;
`;

export const CardBody = styled.View`
  padding: 20px;
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 200px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`;

export const Title = styled.Text`
  font-family: "Helvetica";
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const CardDescription = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const CardDescriptionText = styled.Text`
  margin-left: 10px;
  color: #999999;
  font-size: 16px;
`;

export const ButtonInscription = styled(RectButton)`
  background-color: #f94d6a;
  width: 100%;
  border-radius: 4px;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const ButtonInscriptionText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  font-family: Helvetica;
`;
