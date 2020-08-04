import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet ,Image} from 'react-native';
import AppHeader from '../components/AppHeader';

export default class SymptomsScreen extends React.Component {
  render(){
    return(

        <View>
         <Image
      style = {styles.imageIcon}
       source={require('../Images/Symptoms.jpg')}
              />
      
       
        <Text
          style={styles.buttonText}>
      10 Early Signs and Symptoms of Alzheimer's
10 Early Signs and Symptoms of Alzheimer's
Share or Print this page
Memory loss that disrupts daily life may be a symptom of Alzheimer's or other dementia. Alzheimer's is a brain disease that causes a slow decline in memory, thinking and reasoning skills. 
There are 10 warning signs and symptoms. If you notice any of them, don't ignore them. Schedule an appointment with your doctor.

Subscribe to our e-newsletter to learn how you can help those affected by Alzheimer's.
1
Memory loss that disrupts daily life
One of the most common signs of Alzheimer’s disease, especially in the early stage, is forgetting recently learned information. Others include forgetting important dates or events, asking for the same questions over and over, and increasingly needing to rely on memory aids (e.g., reminder notes or electronic devices) or family members for things they used to handle on their own.
What's a typical age-related change?
Sometimes forgetting names or appointments, but remembering them later.
2
Challenges in planning or solving problems
Some people living with dementia may experience changes in their ability to develop and follow a plan or work with numbers. They may have trouble following a familiar recipe or keeping track of monthly bills. They may have difficulty concentrating and take much longer to do things than they did before.
What's a typical age-related change?
Making occasional errors when managing finances or household bills.
 
3
Difficulty completing familiar tasks 
People with Alzheimer's often find it hard to complete daily tasks. Sometimes they may have trouble driving to a familiar location, organizing a grocery list or remembering the rules of a favorite game.
What's a typical age-related change?
Occasionally needing help to use microwave settings or to record a TV show.
4
Confusion with time or place
People living with Alzheimer's can lose track of dates, seasons and the passage of time. They may have trouble understanding something if it is not happening immediately. Sometimes they may forget where they are or how they got there.
What's a typical age-related change?
Getting confused about the day of the week but figuring it out later.
5
Trouble understanding visual images and spatial relationships
For some people, having vision problems is a sign of Alzheimer's. This may lead to difficulty with balance or trouble reading. They may also have problems judging distance and determining color or contrast, causing issues with driving.
What's a typical age-related change?
Vision changes related to cataracts.
6
New problems with words in speaking or writing
People living with Alzheimer's may have trouble following or joining a conversation. They may stop in the middle of a conversation and have no idea how to continue or they may repeat themselves. They may struggle with vocabulary, have trouble naming a familiar object or use the wrong name (e.g., calling a "watch" a "hand-clock").
What's a typical age-related change?
Sometimes having trouble finding the right word.
7
Misplacing things and losing the ability to retrace steps
A person living with Alzheimer's disease may put things in unusual places. They may lose things and be unable to go back over their steps to find them again. He or she may accuse others of stealing, especially as the disease progresses.
What's a typical age-related change?
Misplacing things from time to time and retracing steps to find them.
8
Decreased or poor judgment
Individuals may experience changes in judgment or decision-making. For example, they may use poor judgment when dealing with money or pay less attention to grooming or keeping themselves clean.
What's a typical age-related change?
Making a bad decision or mistake once in a while, like neglecting to change the oil in the car.
9
Withdrawal from work or social activities
A person living with Alzheimer’s disease may experience changes in the ability to hold or follow a conversation. As a result, he or she may withdraw from hobbies, social activities or other engagements. They may have trouble
keeping up with a favorite team or activity.
What's a typical age-related change?
Sometimes feeling uninterested in family or social obligations.
10
Changes in mood and personality
Individuals living with Alzheimer’s may experience mood and personality changes. They can become confused, suspicious, depressed, fearful or anxious. They may be easily upset at home, with friends or when out of their
comfort zone.



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

