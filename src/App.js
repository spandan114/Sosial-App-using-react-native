import React from 'react'
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import signin from './screens/signin';
import signup from './screens/signup';
import Home from './screens/Home';
import AddPost from './screens/AddPost';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          {/* signin */}
          <Stack.Screen
            name="SignIn"
            component={signin}
            options={{
              headerStyle: {
                backgroundColor: '#0f4c75',
              },
              title: 'Sosial app',
              headerTitleStyle: {
                textAlign: 'center',
                color: '#00b7c2',
              },
            }}
          />
          {/* signup */}
          <Stack.Screen
            name="SignUp"
            component={signup}
            options={{
              headerStyle: {
                backgroundColor: '#0f4c75',
              },
              title: 'Sosial app',
              headerTitleStyle: {
                textAlign: 'center',
                color: '#00b7c2',
              },
            }}
          />
          {/* Home */}
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerStyle: {
                backgroundColor: '#0f4c75',
              },
              title: 'Sosial app',
              headerTitleStyle: {
                textAlign: 'center',
                color: '#00b7c2',
              },
            }}
          />
          {/* Add Post */}
          <Stack.Screen
            name="AddPost"
            component={AddPost}
            options={{
              headerStyle: {
                backgroundColor: '#0f4c75',
              },
              title: 'Sosial app',
              headerTitleStyle: {
                textAlign: 'center',
                color: '#00b7c2',
              },
            }}
          />
          </Stack.Navigator>
          </NavigationContainer>
    )
}

