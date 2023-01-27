import React, { useContext } from 'react';
import Header from '../../components/Header';
import { Container, Message, Name, NewLink, NewText, LogoutButton, LogoutText } from './styles';
import { AuthContext } from '../../contexts/auth';

import { useNavigation } from '@react-navigation/native';

export default function Profile(){
  const { user, signOut } = useContext(AuthContext);
  const navigation = useNavigation();

  return(
    <Container>
      <Header title="Perfil"/>

      <Message>
        Hey, bem vindo de volta!
      </Message>

      <Name numberOflines={1} >
        {user && user.name}
      </Name>

      <NewLink onPress={ () => navigation.navigate('Registrar')}>
        <NewText>Fazer registro</NewText>
      </NewLink>

      <LogoutButton onPress={ () => signOut()}>
        <LogoutText>Sair</LogoutText>
      </LogoutButton>
    </Container>
  )
}