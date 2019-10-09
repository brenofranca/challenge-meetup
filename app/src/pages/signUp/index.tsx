import React, { useState } from "react";
import { AsyncStorage } from "react-native";
import {
  Container,
  Form,
  Logo,
  AccountName,
  AccountEmail,
  AccountPassword,
  ButtonSignIn,
  ButtonSignInText,
  ButtonSignUp,
  ButtonSignUpText
} from "./styles";

interface Account {
  name: string;
  email: string;
  password: string;
}

export default function signUp({ navigation }) {
  const [account, setAccount] = useState({
    name: "",
    email: "",
    password: ""
  } as Account);

  function handleCreateAccount() {
    if (!account.name || !account.email || !account.password) return;

    console.log(account);
  }

  return (
    <Container behavior="padding" enabled={false}>
      <Form>
        <Logo>M</Logo>

        <AccountName
          placeholder="Nome Completo"
          autoCapitalize="sentences"
          autoCorrect={false}
          autoFocus={true}
          returnKeyType="next"
          value={account.email}
          onChangeText={name => setAccount({ ...account, name })}
        />

        <AccountEmail
          placeholder="Digite seu e-mail"
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={true}
          returnKeyType="next"
          value={account.email}
          onChangeText={email => setAccount({ ...account, email })}
        />

        <AccountPassword
          placeholder="Sua senha secreta"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          returnKeyType="done"
          value={account.password}
          onChangeText={password => setAccount({ ...account, password })}
        />

        <ButtonSignIn onPress={() => handleCreateAccount()}>
          <ButtonSignInText>Criar conta</ButtonSignInText>
        </ButtonSignIn>

        <ButtonSignUp onPress={() => navigation.navigate("SignIn")}>
          <ButtonSignUpText>Já tenho login</ButtonSignUpText>
        </ButtonSignUp>
      </Form>
    </Container>
  );
}
