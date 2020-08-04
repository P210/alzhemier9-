import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet,Image } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class PreventionScreen  extends React.Component {
  render(){
    return(
 
       
        <View>
        <Image
      style = {styles.imageIcon}
       source={require('../Images/Prevention.png')}
              />
     
       
        <Text
          style={styles.buttonText}>
   Can You Prevent Alzheimer’s Disease?
Alzheimer’s is one of the diseases people most want to avoid, and for good reason. There is no proven way to prevent it. But there’s a lot you can do to lower your chance of getting it.
Doctors don’t know exactly why the disease strikes some people and not others, why it gets worse over the years, or how to cure it. And because they don’t know the answers to these questions, they also aren’t totally sure how to treat it.
It’s true that Alzheimer’s becomes more common with age. But it’s not a normal part of getting older. It’s also true that some gene glitches make you more likely to get it.
You can’t control aging or your genes, but that doesn’t mean you can’t do anything about the disease. In fact, the same things that are good for your heart -- and the rest of your body -- could also help you make Alzheimer’s disease less likely. And a lot of it comes down to simple things you do every day.
Manage your numbers. Do you know if your blood pressure, blood sugar, and cholesterol are too high? Research shows strong connections between Alzheimer’s and conditions like high blood pressure, high cholesterol, type 2 diabetes, and heart disease. A lot of people don’t know that they have these conditions. A check-up could let you know. And you and your doctor can work to manage any health problems you have.
Check your weight. If you have a lot of weight to lose, and start to work on shedding those pounds and keeping them off, if also could help lower your risk. One study found that obesity can change the brain in a way that raises your odds of getting Alzheimer’s.
Exercise your body. When you work out, even a little bit, more blood flows to the brain, which makes your brain healthier. Aim for at least 30 minutes of exercise, 5 or more days per week.
Challenge your mind. People who keep learning and stay social may be less likely to get Alzheimer’s disease. It’s not completely clear yet, but the mental stimulation may be like a workout for your brain.
Buckle up. If you hurt your head in a car wreck or fall off a bike without a helmet on, it could make Alzheimer’s disease more likely years from now. Also, check your home for places where you might fall, like an area rug that doesn’t have a sticky padding beneath it to keep it in place.

Maintain your weight. Eat a heart-healthy diet with lots of fruits and vegetables, whole grains, lean protein, and low-fat dairy. Limit saturated fat (found in meats and full-fat dairy products), added sugars, carbs, sodium, and alcohol.



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
