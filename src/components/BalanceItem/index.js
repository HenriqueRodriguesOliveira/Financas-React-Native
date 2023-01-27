import React, { useMemo } from 'react'
import { Container, Label, Balance } from './styles'
import Cartao from '../../assets/Cartão.png';

export default function BalanceItem({ data }) {

  const labelName = useMemo(() => {
    if(data.tag === 'saldo'){
      return{
        label: 'Saldo atual',
        color: '121212',
      }
    }else if(data.tag === 'receita'){
      return{
        label: 'Entradas de hoje',
        color: '00b94a',
      }
    }else{
      return{
        label: 'Saidas de hoje',
        color: 'EF463a'
      }
    }
  }, [data])
  return (
    <Container source={Cartao} resizeMode="contain">
      <Label> {labelName.label} </Label>
      <Balance> 
        R$ {data.saldo},00
      </Balance>
    </Container>
  )
}