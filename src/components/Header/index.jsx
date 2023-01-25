import React from 'react';
import { Container, Title } from './styles';

export default function Header({ title }){
  return(
    <Container>
      { title && (
        <Title>{title}</Title>
      )}
    </Container>
  )
}