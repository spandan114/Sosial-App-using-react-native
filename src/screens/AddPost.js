import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, Image} from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Text,
  Button,
  H3,
  Textarea,
  Icon,
} from 'native-base';

const AddPost = () => {

    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null)

    const [imageUploading, setImageUploading] = useState(false)
    const [uploadStatus, setUploadStatus] = useState(null)

    const addPost = () => {
        //
    }

    const chooseImage = () => {
        //
    }

    return (
        <Container style={styles.container}>
          <Content padder>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
              {image && (
                <Image
                  source={{uri: image}}
                  style={styles.image}
                  resizeMode="center"
                />
              )}
              <Form>
                <Item regular style={styles.formItem}>
                  <Input
                    placeholder="location"
                    value={location}
                    style={{color: '#eee'}}
                    onChangeText={(text) => setLocation(text)}
                  />
                </Item>
    
                {imageUploading ? (
                  <ProgressBar progress={uploadStatus} style={styles.progress} />
                ) : (
                  <Button
                    regular
                    bordered
                    block
                    iconLeft
                    info
                    style={styles.formItem}
                    onPress={chooseImage}>
                    <Icon
                      name="md-image-outline"
                      type="Ionicons"
                      style={styles.icon}
                    />
                    <Text
                      style={{
                        color: '#fdcb9e',
                      }}>
                      Choose Image
                    </Text>
                  </Button>
                )}
    
                <Item regular style={styles.formItem}>
                  <Textarea
                    rowSpan={5}
                    placeholder="Some description..."
                    value={description}
                    style={{color: '#eee'}}
                    onChangeText={(text) => setDescription(text)}
                  />
                </Item>
    
                <Button regular block onPress={addPost}>
                  <Text>Add Post</Text>
                </Button>
              </Form>
            </ScrollView>
          </Content>
        </Container>
      );
}

export default AddPost

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1b262c',
      flex: 1,
      justifyContent: 'flex-start',
    },
    formItem: {
      marginBottom: 20,
    },
    icon: {fontSize: 20, color: '#fdcb9e'},
    image: {width: null, height: 150, marginVertical: 15},
    progress: {width: null, marginBottom: 20},
  });
