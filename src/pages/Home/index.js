import React, { useContext } from 'react';

import { AuthContext} from '../../contexts/auth';

import { Background, Title } from './styles';
import Header from '../../components/Header/index';

export default function Home() {
  return (
   <Background>
      <Header title="Minhas movimentações"/>
   </Background>
  );
}