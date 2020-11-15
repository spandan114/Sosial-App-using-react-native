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

 const signup = () => {

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

    return (
        <Container style={styles.container}>
          <Content padder>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
              <View style={styles.imageContainer}>
                <TouchableOpacity onPress={()=>{}}>
                  <Thumbnail large source={{uri: image}} />
                </TouchableOpacity>
              </View>
    
              {/* {imageUploading && (
                <ProgressBar progress={uploadStatus} style={styles.progress} />
              )} */}
    
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
                <Button regular block onPress={()=>{}}>
                  <Text>SignUp</Text>
                </Button>
              </Form>
            </ScrollView>
          </Content>
        </Container>
      );
}

export default signup

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





