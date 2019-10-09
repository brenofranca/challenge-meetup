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

interface Credentials {
  email: string;
  password: string;
}

export default function signIn() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  } as Credentials);

  function handleLogin() {
    if (!credentials.email || !credentials.password) return;

    AsyncStorage.setItem("@Meetup:crendentials", JSON.stringify(credentials));
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
          value={credentials.email}
          onChangeText={email => setCredentials({ ...credentials, email })}
        />

        <Password
          placeholder="Sua senha secreta"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          returnKeyType="done"
          value={credentials.password}
          onChangeText={password =>
            setCredentials({ ...credentials, password })
          }
        />

        <ButtonSignIn onPress={() => handleLogin()}>
          <ButtonSignInText>Entrar</ButtonSignInText>
        </ButtonSignIn>

        <ButtonSignUp>
          <ButtonSignUpText>Criar conta grátis</ButtonSignUpText>
        </ButtonSignUp>
      </Form>
    </Container>
  );
}
