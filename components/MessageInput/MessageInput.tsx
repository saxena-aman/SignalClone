import React , {useState} from 'react';
import { StyleSheet, View,TextInput,Text,Pressable,KeyboardAvoidingView, Platform} from 'react-native';
import { AntDesign, Feather, MaterialCommunityIcons, Octicons, FontAwesome } from '@expo/vector-icons';

const MessageInput=()=>{
    const [message,setMessage] = useState('');
    const onPress = () => {
        if(message) {
            sendMessage();
        }
        else{
            onPlusClicked();
        }
    }
    const sendMessage = () => {
        console.warn("Message:",message)
        setMessage("")
    }
    const onPlusClicked = () => {
        console.warn("On Plus Clicked")
    }
    return (
        <KeyboardAvoidingView 
        style={styles.root}
        behavior={Platform.OS == "ios" ? 'padding' : 'height'}
        keyboardVerticalOffset={100}
        >
            <View style={styles.inputContainer}>
                <Octicons name="smiley" size={24} color="black" />
                <TextInput 
                style={styles.input}
                value={message}
                onChangeText={setMessage}
                placeholder="Write Something..."
                />
                <Feather name="camera" size={24} color="Black" style={styles.icon}/>
                <MaterialCommunityIcons name="microphone-outline" size={24} color="Black" style={styles.icon}/>
            </View>
            <Pressable onPress={onPress} style={styles.buttonContainer}>
                {message ? <Feather name="send" size={20} color="white" style={styles.icon}/> : <AntDesign name="plus" size={24} color="white" style={styles.icon}/>}
            </Pressable>
        </KeyboardAvoidingView>
    )
}

const styles=StyleSheet.create({
    buttonContainer:{
        width:50,
        height:50,
        backgroundColor:'#3777f0',
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center'
    },
    root:{
        flexDirection:'row',
        padding:10,
    },
    inputContainer:{
        backgroundColor:'#f2f2f2',
        flex:1,
        marginRight:10,
        borderRadius:25,
        borderWidth:1,
        borderColor:'#dedede',
        alignItems:'center',
        paddingHorizontal:10,
        flexDirection:'row',
        padding:10
    },
    buttonText:{
        color:'white',
        fontSize:35,
        
    },
    input:{
        flex:1,
        marginHorizontal:5
    },
    icon:{
        marginHorizontal:5,
    }
})

export default MessageInput;