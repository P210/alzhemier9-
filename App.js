import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';
import AppHeader from './components/AppHeader';
// You can import from local files
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/aboutScreen';
import SymptomsScreen from './screens/symptomsScreen';
import PreventionScreen from './screens/preventionScreen';
import Howtouse from './screens/howtouseScreen';
import Scan from './screens/scanScreen';
import Allitems from './screens/allscaniteamsScreen';


export default class App extends React.Component {
  render() {
    return (  
      <View>   
      <Image
      style = {styles.imageIcon}
       source={require('./Images/alzhemier image.jpg')}  
              /> 
              <AppHeader/> 
        <AppContainer/>  
          
      </View> 
    );
  }
}


var AppNavigator = createSwitchNavigator({
 
 
  HomeScreen: HomeScreen,
  AboutScreen:AboutScreen,
  SymptomsScreen:SymptomsScreen,
  PreventionScreen:PreventionScreen,
  Howtouse:Howtouse,
  Scan:Scan,
  Allitems:Allitems,


 
});

const AppContainer = createAppContainer(AppNavigator);
const styles = StyleSheet.create({
  imageIcon: {
    width: 100,
    height: 100,
    marginLeft: 90,
  }
  });