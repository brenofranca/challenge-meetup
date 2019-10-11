import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(LinearGradient).attrs({
  colors: ["#22202C", "#402845"]
})`
  flex: 1;
`;

export const Content = styled.View`
  margin: 0 20px;
  margin-top: 10px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#979797"
})`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  width: 100%;
  height: 60px;
  padding: 20px;
  font-size: 20px;
  color: #fff;
  margin-bottom: 10px;
`;

export const HairLine = styled.View`
  border-bottom-color: #bbb;
  border-bottom-width: ${StyleSheet.hairlineWidth};
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Button = styled(RectButton)`
  background-color: #f94d6a;
  width: 100%;
  border-radius: 4px;
  height: ${props => (props.heightSize ? "50px" : "60px")};
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  font-family: Helvetica;
`;

export const ButtonLoading = styled.ActivityIndicator.attrs({
  color: "#FFF",
  size: "small"
})``;
