import * as React from 'react';
import { Text, StyleSheet, View, FlatList, Pressable} from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem';
import ChatRoomsData from '../assets/dummy-data/ChatRooms';
import {
  useAuthenticator,
  withAuthenticator,
} from '@aws-amplify/ui-react-native';

export default function HomeScreen(){
  const { signOut } = useAuthenticator();
  return(
    <View style={styles.page}>
      <FlatList
        data={ChatRoomsData}
        renderItem={({item})=><ChatRoomItem chatRoom={item}/>}
        showsVerticalScrollIndicator={false}
      />
      <Pressable onPress={signOut} style={{backgroundColor:'#3872E9',height:50,margin:10,borderRadius:50, borderWidth:2, borderColor:'black', alignItems:'center', justifyContent:'center'}}>
        <Text style={{color:'white',fontSize:15,fontWeight:'bold'}}>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  page:{
    backgroundColor:'white'
  }
});