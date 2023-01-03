import React from 'react';
import { StyleSheet, View,FlatList, SafeAreaView} from 'react-native';
import Message from '../components/Message';
import ChatRoomData from '../assets/dummy-data/Chats';
import MessageInput from '../components/MessageInput';
import { useRoute } from '@react-navigation/native';
export default function ChatRoomScreen(){
    const route = useRoute();
    console.warn("Display", route.params?.id)
    return(
        <SafeAreaView style={styles.page}>
            <FlatList
                data={ChatRoomData.messages}
                renderItem={({item})=><Message message={item}/>}
            />
            <MessageInput/>
        </SafeAreaView>
    )
};

const styles=StyleSheet.create({
    page:{
        backgroundColor:'white',
        flex:1,
    }
})