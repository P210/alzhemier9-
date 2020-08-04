import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet , Image} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// You can import from local files
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/aboutScreen';
import SymptomsScreen from './screens/symptomsScreen';
import PreventionScreen from './screens/preventionScreen';
import Howtouse from './screens/howtouseScreen';
import Scan from './screens/scanScreen';
import Allitems from './screens/allscaniteamsScreen';


export default class Back extends React.Component {
  render(){
    return(
     <TouchableOpacity>
     <View>
     <Image
      style = {styles.imageIcon}
       source={require('../Images/backBuuton.png')}
              />
  
     </View>
     </TouchableOpacity>
       
       
    );
  }
}
const styles = StyleSheet.create({
 
 imageIcon: {
    width: 200,
    height: 100,
    marginLeft: 45,
    alignItems:'center',
  },
});
