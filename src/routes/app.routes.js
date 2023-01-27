import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import Registrar from '../pages/New';
import Perfil from '../pages/Profile';
import CustomDrawer from '../components/CustomDrawer';

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
    return(
        <AppDrawer.Navigator
          drawerContent={ (props) => <CustomDrawer {...props} /> }
          screenOptions={{
            headerShown:false,
            drawerStyle:{
                backgroundColor: '#FFF',
                paddingTop: 20,
            },
            drawerActiveBackgroundColor:'#121212',
            drawerActiveTintColor: '#FFF',

            drawerInactiveBackgroundColor: '#f1f1f1',
            drawerInactiveTintColor: '#121212'
          }}
        >
            <AppDrawer.Screen 
              name="Home"
              component={Home}
            />

            <AppDrawer.Screen 
              name="Registrar"
              component={Registrar}
            />

            <AppDrawer.Screen 
              name="Perfil"
              component={Perfil}
            />
        </AppDrawer.Navigator>
    )
}

export default AppRoutes;