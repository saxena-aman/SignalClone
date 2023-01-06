import * as React from 'react';
import { Text, View, Image, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function UserItem({user}){
    const navigation = useNavigation();
    const onPress=()=>{
      //
    }
    return(
        <Pressable onPress={onPress} style={styles.container}>
      <Image source={{uri:user.imageUri}} style={styles.image}/>

      <View style={styles.rightContainer}>
        <View style={styles.rows}>
          <Text style={styles.name}>{user.name}</Text>
        </View>
      </View>
    </Pressable>
    );
}