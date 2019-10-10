import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { RectButton } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled(LinearGradient).attrs({
  colors: ["#22202C", "#402845"]
})`
  flex: 1;
`;

export const Content = styled.View`
  margin: 0 20px;
  margin-top: 10px;
`;

export const Paginator = styled.View`
  height: 80px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PaginatorButton = styled(RectButton)``;

export const PaginatorIcon = styled(MaterialIcons)``;

export const Date = styled.Text`
  color: #fff;
  margin-right: 10px;
  margin-left: 10px;
  font-size: 25px;
  font-weight: bold;
`;
