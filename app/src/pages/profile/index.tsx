import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { profileRequest, profileUpdate } from "../../store/profile/actions";
import {
  Container,
  Content,
  Input,
  HairLine,
  Button,
  ButtonText,
  ButtonLoading
} from "./styles";
import Header from "../../components/header/index";
import { ProfileState } from "../../store/profile/reducers";

class Account {
  name: string = "";
  email: string = "";
  password_new: string;
  password_current: string;
  password_confirmation: string;
}

export default function profile() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.profile) as ProfileState;

  const [account, setAccount] = useState(new Account());

  useEffect(() => {
    dispatch(profileRequest());
  }, []);

  useEffect(() => {
    if (profile.data) {
      const { name, email } = profile.data;

      setAccount({ ...account, name, email });
    }
  }, [profile]);

  function handleUpdateProfile() {
    dispatch(profileUpdate(account));
  }

  return (
    <Container>
      <Header />
      <Content>
        <Input
          placeholder="Nome Completo"
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={true}
          returnKeyType="next"
          value={account.name}
          onChangeText={name => setAccount({ ...account, name })}
        />
        <Input
          placeholder="E-mail"
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={true}
          returnKeyType="next"
          value={account.email}
          onChangeText={email => setAccount({ ...account, email })}
        />

        <HairLine />

        <Input
          placeholder="Senha atual"
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={true}
          secureTextEntry={true}
          returnKeyType="next"
          onChangeText={password_current =>
            setAccount({ ...account, password_current })
          }
        />

        <Input
          placeholder="Nova senha"
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={true}
          secureTextEntry={true}
          returnKeyType="next"
          onChangeText={password_new =>
            setAccount({ ...account, password_new })
          }
        />

        <Input
          placeholder="Confirmação de senha"
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={true}
          secureTextEntry={true}
          returnKeyType="done"
          onChangeText={password_confirmation =>
            setAccount({ ...account, password_confirmation })
          }
        />

        <Button onPress={() => handleUpdateProfile()}>
          {profile.loading ? (
            <ButtonLoading />
          ) : (
            <ButtonText>Salvar perfil</ButtonText>
          )}
        </Button>

        <Button heightSize="40px">
          <ButtonText>Sair do Meetup</ButtonText>
        </Button>
      </Content>
    </Container>
  );
}
