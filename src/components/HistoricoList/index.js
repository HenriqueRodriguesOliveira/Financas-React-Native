import React from 'react'
import { TouchableWithoutFeedback, Alert } from 'react-native'
import { Container, Tipo, IconView, TipoText, ValorText, Descricao, Data } from './styles'
import Icon from 'react-native-vector-icons/Feather';

export default function HistoricoList({ data, deleteItem }) {

  function handleDeleteItem(){
    Alert.alert(
      'Atenção',
      'Você tem certeza que deseja deletar esse registro?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Continuar',
          onPress: () => deleteItem(data.id)
        }
      ]
    )
  }
  return (
    <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
    <Container>

      <Tipo>
        <IconView tipo={data.type}>
          <Icon 
          name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'} 
          size={20} 
          color="#FFF"
          />
          <TipoText> {data.type} </TipoText>
        </IconView>

        <ValorText>
        R${data.value},00
        </ValorText>
      </Tipo>

      <Descricao>
        {data.description}
      </Descricao>

      <Data>
        {data.date}
      </Data>

    </Container>
    </TouchableWithoutFeedback>
  )
}