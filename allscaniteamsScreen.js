import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet,Image } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class Allitems  extends React.Component {
  render(){
    return(

        <View>
        <Image
      style = {styles.imageIcon}
       source={require('../Images/ALL_ITEMS_COLLECTION.jpg')}
              />
      
      
        <Text
          style={styles.buttonText}>
    All scanned items
        </Text>
       </View>
    );
  }
}
const styles = StyleSheet.create({
  
  buttonText: {
    fontSize: 20,
  },
  imageIcon: {
    width: 200,
    height: 100,
    marginLeft: 65,
    alignItems:'center'
  },
});