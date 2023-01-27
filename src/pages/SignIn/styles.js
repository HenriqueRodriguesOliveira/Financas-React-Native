import styled from 'styled-components';

export const Background = styled.View`
  flex: 1;
  background-color: #FFF;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  margin-top: 25%;
`;

export const Logo = styled.Image`
  margin-bottom: 25px;
  width: 20%;
  height: 20%;
`;

export const AreaInput = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput`
  background-color: #FFF;
  width: 90%;
  font-size: 17px;
  padding: 10px;
  border-radius: 4px;
  color: #121212;
  margin-bottom: 15px;
  border-width: 1px;
  border-color: #ccc;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  border-radius: 4px;
  background-color: #000;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  width: 90%;
  height: 45px;
  border-width: 1px;
  align-items: center;
  justify-content: center;
`;

export const LinkText = styled.Text`
  color: #171717;
`;