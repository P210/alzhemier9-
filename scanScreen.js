import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet ,Image} from 'react-native';
import AppHeader from '../components/AppHeader';

export default class Scan  extends React.Component {
  render(){
    return(
 
        
        <View>
        <Image
      style = {styles.imageIcon}
       source={require('../Images/Scan here.jpg')}
              />
      
     
        <Text
          style={styles.buttonText}>
     Scan here
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
    width: 100,
    height: 100,
    marginLeft: 60,
  }
});