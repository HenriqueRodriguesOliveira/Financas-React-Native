import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthStack = createStackNavigator();

function AuthRoutes(){
    return(
      <AuthStack.Navigator>
        <AuthStack.Screen 
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />

        <AuthStack.Screen 
          name="SignUp"
          component={SignUp}
          options={{headerStyle:{
            backgroundColor: '#3b3dbf',
            borderBottomColor: '#00b94a',
            borderBottomWidth: 1,
          },
          headerTintColor: '#FFF',
          headerTitle: 'Voltar',
          headerBackTitleVisible: false
        }}
        />
      </AuthStack.Navigator>
    )
}

export default AuthRoutes