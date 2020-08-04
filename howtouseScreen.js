import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet,Image } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class Howtouse  extends React.Component {
  render(){
    return(
 
        <View>
       <Image
      style = {styles.imageIcon}
       source={require('../Images/Howtouse.PNG')}
              />
       
        <Text
          style={styles.buttonText}>
          =====
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
    width: 400, 
    height: 100,
    marginLeft: 105,
    alignItems:'center'
  },
});