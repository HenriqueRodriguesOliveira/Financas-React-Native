import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #FFF;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Message = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 24px;
`;

export const Name = styled.Text`
  font-size: 24px;
  margin-bottom: 24px;
  margin-top: 8px;
  padding: 0 14px;
  color: #121212;
`;
export const NewLink = styled.TouchableOpacity`
  background-color: #000;
  width: 90%;
  height: 45px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;
export const NewText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #FFF;
`;

export const LogoutButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 45px;
  border-width: 1px;
  border-radius: 8px;
  border-color: #000;
`;
export const LogoutText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000
`;