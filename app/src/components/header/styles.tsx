import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  background-color: rgba(0, 0, 0, 0.3);
  height: 100px;
  justify-content: center;
  align-items: center;
  padding-top: ${getStatusBarHeight()};
`;

export const Logo = styled.Image``;
