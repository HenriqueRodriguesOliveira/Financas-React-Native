import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { AuthContext } from '../../contexts/auth';

import { DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer';

export default function CustomDrawer(props){
  const { user, signOut } = useContext(AuthContext);

  return(
    <DrawerContentScrollView {...props}>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 25}}>
        <Image 
          source={require('../../assets/Logo.png')}
          style={{ width: 90, height: 90}}
          resizeMode="contain"
        />

        <Text style={{ fontSize: 18, marginTop: 14 }}>
          Bem-vindo
        </Text>

        <Text numberOfLines={1} style={{ fontSize: 17, fontWeight: 'bold', marginBottom: 25, paddingHorizontal: 20}}>
          {user && user.name}
        </Text>
      </View>
      <DrawerItemList {...props}/>

    </DrawerContentScrollView>
  )
}