import React, { useState } from "react";
import { AsyncStorage } from "react-native";
import {
  Container,
  Form,
  Logo,
  Email,
  Password,
  ButtonSignIn,
  ButtonSignInText,
  ButtonSignUp,
  ButtonSignUpText
} from "./styles";

interface Account {
  email: string;
  password: string;
}

export default function signIn({ navigation }) {
  const [account, setAccount] = useState({
    email: "",
    password: ""
  } as Account);

  function handleLogin() {
    if (!account.email || !account.password) return;

    AsyncStorage.setItem("@Meetup:crendentials", JSON.stringify(account));
  }

  return (
    <Container behavior="padding" enabled={false}>
      <Form>
        <Logo>M</Logo>
        <Email
          placeholder="Digite seu e-mail"
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={true}
          returnKeyType="next"
          value={account.email}
          onChangeText={email => setAccount({ ...account, email })}
        />

        <Password
          placeholder="Sua senha secreta"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          returnKeyType="done"
          value={account.password}
          onChangeText={password => setAccount({ ...account, password })}
        />

        <ButtonSignIn onPress={() => handleLogin()}>
          <ButtonSignInText>Entrar</ButtonSignInText>
        </ButtonSignIn>

        <ButtonSignUp onPress={() => navigation.navigate("SignUp")}>
          <ButtonSignUpText>Criar conta grátis</ButtonSignUpText>
        </ButtonSignUp>
      </Form>
    </Container>
  );
}
