/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable , Text,View, Image, useWindowDimensions} from 'react-native';
import { Feather,Ionicons } from '@expo/vector-icons'; 


import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';


import HomeScreen from '../screens/HomeScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';

import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="Home" 
      component={HomeScreen}
      options={{headerTitle: HomeHeader}}
      />
      <Stack.Screen 
      name="ChatRoom" 
      component={ChatRoomScreen}
      options={{headerTitle: ChatRoomHeader,headerBackVisible:false}}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

const HomeHeader = (props) =>{
  const {width} = useWindowDimensions();
  return (
    <View style={{
      flexDirection:'row',
      //backgroundColor:'#3872E9',
      justifyContent:'space-between',
      width:'95%',
      padding:5,
      alignItems:'center',
      borderRadius:30,
      marginRight:40,
      marginBottom:50
      }}>
      <Image 
        source={{uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg'}}
        style={{width:35, height:35, borderRadius:35,borderWidth:1,borderColor:'white'}}
      />
      <Text style={{flex:1, textAlign:'center', marginLeft:40, fontWeight:'bold', color:'black', }}>Signal</Text>
      <Feather name="camera" size={24} color="black" style={{marginHorizontal:10}}/>
      <Feather name="edit-2" size={24} color="black" style={{marginHorizontal:10}}/>
    </View>
  )
}

const ChatRoomHeader = (props) =>{
  const {width} = useWindowDimensions();
  return (
    <View style={{
      flexDirection:'row',
      backgroundColor:'#3872E9',
      justifyContent:'space-between',
      width:'90%',
      padding:5,
      alignItems:'center',
      borderRadius:30,
      marginRight:70,
      marginLeft:15,
      marginBottom:50
      }}>
      <Image 
        source={{uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg'}}
        style={{width:35, height:35, borderRadius:35,borderWidth:1,borderColor:'white'}}
      />
      <Text style={{flex:1, marginLeft:10, fontWeight:'bold', color:'white', }}>{props.children}</Text>
      <Feather name="camera" size={24} color="white" style={{marginHorizontal:10}}/>
      <Feather name="edit-2" size={24} color="white" style={{marginHorizontal:10}}/>
    </View>
  )
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */


/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
