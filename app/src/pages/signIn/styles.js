import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Form = styled(LinearGradient).attrs({
  colors: ["#22202C", "#402845"]
})`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Text`
  font-size: 70px;
  color: #f94d6a;
  margin-bottom: 50px;
`;

export const Email = styled.TextInput.attrs({
  placeholderTextColor: "#979797"
})`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  width: 100%;
  height: 60px;
  padding: 20px;
  font-size: 20px;
  color: #fff;
  /* border: 0.2px solid #979797; */
`;

export const Password = styled.TextInput.attrs({
  placeholderTextColor: "#979797"
})`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  width: 100%;
  height: 60px;
  padding: 20px;
  font-size: bold;
  font-size: 20px;
  color: #fff;
  margin-top: 20px;
`;

export const ButtonSignIn = styled.TouchableOpacity`
  background-color: #f94d6a;
  width: 100%;
  border-radius: 4px;
  height: 60px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const ButtonSignInText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  font-family: Helvetica;
`;

export const ButtonSignUp = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: center;
`;

export const ButtonSignUpText = styled.Text`
  color: #979797;
  font-weight: bold;
  font-size: 16px;
  font-family: Helvetica;
`;

export const ButtonLoading = styled.ActivityIndicator.attrs({
  color: "#FFF",
  size: "small"
})``;
