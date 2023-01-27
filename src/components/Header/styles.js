import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 30px;
  margin-left: 15px;
  margin-bottom: 15px;
  width: 100%;
  max-height: 60px;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #121212;
  margin-left: 15px;
`;


export const ButtonMenu = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #eee;
  padding: 10px;
  border-radius: 10px;
`;