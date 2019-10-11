import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../store/login/actions";
import {
  Container,
  Form,
  Logo,
  Email,
  Password,
  ButtonLoading,
  ButtonSignIn,
  ButtonSignInText,
  ButtonSignUp,
  ButtonSignUpText
} from "./styles";

interface Account {
  email: string;
  password: string;
}

interface LoginState {
  data: {
    type: string;
    token: string;
    refreshToken: string;
  };
  error: null | string;
  loading: null | boolean;
}

export default function signIn({ navigation }) {
  const dispatch = useDispatch();

  const login = useSelector(state => state.login) as LoginState;

  const [account, setAccount] = useState({
    email: "franciscobreno.si@gmail.com",
    password: "12345678"
  } as Account);

  function handleLogin() {
    if (!account.email || !account.password) return;

    dispatch(loginRequest(account));
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
          {login.loading ? (
            <ButtonLoading />
          ) : (
            <ButtonSignInText>Entrar</ButtonSignInText>
          )}
        </ButtonSignIn>

        <ButtonSignUp onPress={() => navigation.navigate("SignUp")}>
          <ButtonSignUpText>Criar conta grátis</ButtonSignUpText>
        </ButtonSignUp>
      </Form>
    </Container>
  );
}
