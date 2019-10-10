import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(LinearGradient).attrs({
  colors: ["#22202C", "#402845"]
})`
  flex: 1;
`;

export const Content = styled.View`
  margin: 0 20px;
  margin-top: 10px;
`;
