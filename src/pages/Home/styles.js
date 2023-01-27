import styled from 'styled-components/native'

export const Background = styled.SafeAreaView`
  flex: 1;
  background-color: #FFF;
`;

export const ListBalance = styled.FlatList`
  max-height: 190px;
`;

export const Area = styled.View`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  flex-direction: row;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 14px;
  margin-top: 24px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  margin-left: 4px;
  color: #121212;
  margin-bottom: 14px;
  font-family:'Poppins-Bold';
  font-weight: bold;
  font-size: 22px;
`;

export const List = styled.FlatList`
  flex: 1;
`;