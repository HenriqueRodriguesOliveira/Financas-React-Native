import styled from 'styled-components/native';

export const Background = styled.View`
  flex:1;
  background-color: #FFF;
`;

export const Input = styled.TextInput`
  height: 50px;
  width: 90%;
  background-color: #f1f1f1;
  font-size: 17px;
  padding: 0 8px;
  margin-bottom: 14px;
  border-radius: 4px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: #000;
  border-radius: 4px;
`;

export const SubmitText = styled.Text`
  color: #FFF;
  font-size: 21px;
  font-weight: bold;
`;
