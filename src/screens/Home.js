import React,{useEffect} from 'react'
import { StyleSheet, Text, View,FlatList,SafeAreaView } from 'react-native'
import {Container,H1} from 'native-base'
import {connect} from "react-redux";
import {getPost} from "../action/post"
import propType from 'prop-types'
import Post from '../component/Post'
import EmptyContainer from '../component/EmptyContainer'

const Home = ({GetPost,PostState,userDetails}) => {

  useEffect(()=>{
    GetPost()
  },[])

  if(PostState.loding){
    return <EmptyContainer/>
  }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
            data={PostState.posts}
            keyExtractor = {(item) => item.id}
            renderItem = {({item,index,separators})=>(
              <Post item={item} key={index} userDetails={userDetails} />
            )}
            ListEmptyComponent={() => (
              <Container style={styles.emptyContainer}>
                <H1>No post fond</H1>
              </Container>
            )}
            ></FlatList>
        </SafeAreaView>
    )
}

const mapDispatchToProps = {
  GetPost: () => getPost(),
}

const mapStateToProps = (state) => ({
  PostState: state.post,
  userDetails: state.auth.user
})

Home.propTypes = {
  GetPost: propType.func.isRequired,
  PostState: propType.object.isRequired,
  userDetails: propType.object
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1b262c',
      justifyContent: 'flex-start',
      padding: 4,
      flex: 1,
    },
    emptyContainer: {
      flex: 1,
      backgroundColor: '#1b262c',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

