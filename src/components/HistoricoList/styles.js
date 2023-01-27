import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #FFF;
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 14px;
  padding: 18px;
  flex-direction: column;
  border-width: 1px;
  border-color: #eee;
`;

export const Tipo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const IconView = styled.View`
  flex-direction: row;
  background-color: ${props => props.tipo === 'despesa' ? '#c62c36' : '#049301'};
  padding-bottom: 4px;
  padding-top: 4px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 4px;
  margin-bottom: 2px;
`;

export const TipoText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const Descricao = styled.Text`
  color: #121212;
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 2px;
`;

export const ValorText = styled.Text`
  color: #121212;
  font-size: 22px;
`;

export const Data = styled.Text`
  color: #ccc;
  font-size: 15px;
`;