import auth from '@react-native-firebase/auth';
import Snackbar from "react-native-snackbar";
import database from '@react-native-firebase/database';

export const signUp = (data) => async (dispatch) => {
    console.log(data)
    const {name,instaUserName,bio,email,password,country,image} = data

    auth()
  .createUserWithEmailAndPassword(email,password)
  .then((data) => {
    console.log(data);
    console.log('User account created & signed in!');

  database()
    .ref('/users/'+ data.user.uid)
    .set({
        name,
        instaUserName,
        bio,
        country,
        image,
        uid:data.user.uid
      })
    .then(snapshot => {
      console.log('User data: ', snapshot.val());
      Snackbar.show({
        text:"Account created",
        textColor:"white",
        backgroundColor:"#1B262C"
    })
   });

  })
  .catch(error => {
    console.log(error)
    Snackbar.show({
        text:"Signup faild",
        textColor:"white",
        backgroundColor:"red"
    })
})
}

export const signIn = (data) => async (dispatch) => {
    console.log(data)
    const {email,password} = data

    auth()
  .signInWithEmailAndPassword(email,password)
  .then(() => {
    console.log('signed in success');
    Snackbar.show({
        text:"Signin successfully",
        textColor:"white",
        backgroundColor:"#1B262C"
    })
  })
  .catch(error => {
      console.log(error)
     Snackbar.show({
        text:"Signin faild",
        textColor:"white",
        backgroundColor:"red"
    })
    })
}

export const signOut = () => async (dispatch) => {
    auth()
  .signOut()
  .then(() => {
      console.log('User signed out!')
      Snackbar.show({
        text:"Sign out successfully",
        textColor:"white",
        backgroundColor:"#1B262C"
    })
    }).catch((error) => {
        console.log(error)
        Snackbar.show({
            text:"Sign out faild",
            textColor:"white",
            backgroundColor:"red"
        })
    })
}
