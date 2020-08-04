import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet , Image} from 'react-native';
import AppHeader from '../components/AppHeader';

export default class AboutScreen  extends React.Component {
  render(){
    return(

       
        <View>
            <Image
      style = {styles.imageIcon}
       source={require('../Images/about.jpg')}
              />
      
   
       
      
        <Text
          style={styles.buttonText}>
     Like all types of dementia, Alzheimer's is caused by brain cell death. It is a neurodegenerative disease, which means there is progressive brain cell death that happens over time. In a person with Alzheimer's, the tissue has fewer and fewer nerve cells and connections.
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
    marginLeft: 45,
    alignItems:'center',
  },
});

