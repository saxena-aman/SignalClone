import * as React from 'react';
import { Text, StyleSheet, View, FlatList, Pressable} from 'react-native';
import UserItem from '../components/UserItem';
import Users from '../assets/dummy-data/Users';

export default function HomeScreen(){
  return(
    <View style={styles.page}>
      <FlatList
        data={Users}
        renderItem={({item})=><UserItem user={item}/>}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page:{
    backgroundColor:'white'
  }
});