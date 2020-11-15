import React,{useEffect} from 'react'
import 'react-native-gesture-handler';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {useDispatch,connect} from 'react-redux'

import signin from './screens/signin';
import signup from './screens/signup';
import Home from './screens/Home';
import AddPost from './screens/AddPost';
import CustomHeader from './layout/CustomHeader'

import {IS_AUTHONTICATED,SET_USER} from './action/actionType'
import EmptyContainer from './component/EmptyContainer'
import {RequestPermission} from './utils/AskPermission'

const Stack = createStackNavigator();

const App = ({authState}) => {

  const dispatch = useDispatch();

  const onAuthStateChange = (user) => {
    if(user){
      dispatch({
        type:IS_AUTHONTICATED,
        payload: true
      })
      console.log(user._user.uid)

      database()
      .ref(`/user/${user._user.uid}`)
      .on('value',(snapshot) => {
        console.log('USER_DETAILS',snapshot.val())
        dispatch({
          type:SET_USER,
          payload:snapshot.val()
        })
      })

    }else{
      dispatch({
        type:IS_AUTHONTICATED,
        payload: false
      })
    }
  }

  useEffect(() => {
    RequestPermission()
    const subscriber = auth().onAuthStateChanged(onAuthStateChange)
    return subscriber
  },[])
  
  if(authState.loding){
    return <EmptyContainer/>
  }

    return (
        <NavigationContainer>
          <Stack.Navigator 
          screenOptions={{
            header: (props) => <CustomHeader {...props} />
          }}
          >
          {authState.isAuthonticated ? (
            <>
              {/* Home */}
              <Stack.Screen name="Home" component={Home}/>
              {/* Add Post */}
              <Stack.Screen name="AddPost" component={AddPost}/>
            </>
          ):(
            <>
              {/* signin */}
              <Stack.Screen name="SignIn" component={signin}/>
              {/* signup */}
              <Stack.Screen name="SignUp" component={signup}/>
            </>
          )}
          </Stack.Navigator>
          </NavigationContainer>
    )
}

const mapStateToProps = (state) => ({
  authState: state.auth
})

export default connect(mapStateToProps)(App)

