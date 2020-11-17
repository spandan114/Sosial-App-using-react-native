import React,{useState} from 'react'
import {StyleSheet, ScrollView, TouchableOpacity, View} from 'react-native'

import {
    Container,
    Form,
    Item,
    Input,
    Text,
    Button,
    Thumbnail,
    Content
} from 'native-base'

import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import ProgressBar from 'react-native-progress/Bar'
import ImagePicker from 'react-native-image-picker';
import {options} from '../utils/options'
import propType from 'prop-types'
import {signUp} from '../action/auth'
import {connect} from 'react-redux'


 const signup = ({signUp}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [instaUserName, setInstaUserName] = useState('')
    const [country, setCountry] = useState('')
    const [bio, setBio] = useState('')
    const [image, setImage] = useState(
        'https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png'
    )

    const [imageUploading, setImageUploading] = useState(false)
    const [uploadStatus, setUploadStatus] = useState(null)

    const shooseImage = async () =>{
      ImagePicker.showImagePicker(options, (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
         // const source = { uri: response.uri };
       
          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          console.log(response)
          uploadImage(response)
        }
      })
    }

    const uploadImage = async (response) => {
      setImageUploading(true)
      const reference = storage().ref(response.fileName);
      const Task = await reference.putFile(response.path);
      Task.on('state_changed',(taskSnapshot) => {
        const percentage = (taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 1000
        setUploadStatus(percentage)
      })
     Task.then(async () => {
       const url = await reference.getDownloadURL()
       setImage(url)
       setUploadStatus(false)
     })
    }

    const doSignup = async () => {
      signUp({name,instaUserName,email,password,image,bio,country})
    }

    return (
        <Container style={styles.container}>
          <Content padder>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
              <View style={styles.imageContainer}>
                <TouchableOpacity onPress={()=>shooseImage()}>
                  <Thumbnail large source={{uri: image}} />
                </TouchableOpacity>
              </View>
    
              {imageUploading && (
                <ProgressBar progress={uploadStatus} style={styles.progress} />
              )}
    
              <Form>
                <Item regular style={styles.formItem}>
                  <Input
                    placeholder="name"
                    value={name}
                    style={{color: '#eee'}}
                    onChangeText={(text) => setName(text)}
                  />
                </Item>
                <Item regular style={styles.formItem}>
                  <Input
                    placeholder="email"
                    value={email}
                    style={{color: '#eee'}}
                    onChangeText={(text) => setEmail(text)}
                  />
                </Item>
                <Item regular style={styles.formItem}>
                  <Input
                    placeholder="password"
                    value={password}
                    secureTextEntry={true}
                    style={{color: '#eee'}}
                    onChangeText={(text) => setPassword(text)}
                  />
                </Item>
                <Item regular style={styles.formItem}>
                  <Input
                    placeholder="Instagram user name"
                    value={instaUserName}
                    style={{color: '#eee'}}
                    onChangeText={(text) => setInstaUserName(text)}
                  />
                </Item>
                <Item regular style={styles.formItem}>
                  <Input
                    placeholder="Your Short Bio"
                    value={bio}
                    style={{color: '#eee'}}
                    onChangeText={(text) => setBio(text)}
                  />
                </Item>
                <Item regular style={styles.formItem}>
                  <Input
                    placeholder="country"
                    value={country}
                    style={{color: '#eee'}}
                    onChangeText={(text) => setCountry(text)}
                  />
                </Item>
                <Button regular block onPress={()=> doSignup()}>
                  <Text>SignUp</Text>
                </Button>
              </Form>
            </ScrollView>
          </Content>
        </Container>
      );
}

const mapDispatchToProps = {
  signUp : (data) => signUp(data)
}

signup.propType = {
  signUp: propType.func.isRequired
}

export default connect(null,mapDispatchToProps)(signup)

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1b262c',
      flex: 1,
      justifyContent: 'flex-start',
    },
    imageContainer: {
      alignItems: 'center',
      marginVertical: 5,
    },
    progress: {width: null, marginBottom: 20},
    formItem: {
      marginBottom: 20,
    },
  });





