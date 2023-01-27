import React from 'react';
import { Container, Title, ButtonMenu, ButtonPerfil } from './styles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

export default function Header({ title }){
  const navigation = useNavigation();
  return(
    <Container>
      <ButtonMenu onPress={ () => navigation.openDrawer()}>
        <Icon name="grid" size={25} color="#121212"/>
      </ButtonMenu>

      { title && (
        <Title>{title}</Title>
      )}

    </Container>
  )
}