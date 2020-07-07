import { StatusBar } from 'expo-status-bar';
import React , { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';
import { Value } from 'react-native-reanimated'; 



export default function Home({navigation}) {

    const [name, SetName] = useState (null);
    const [emails, SetEmails] = useState (null);
    const [pass, SetPass] = useState (null);


    const clickHandler = () => {
        SetName('chun-li');
    }

    const backHandler =() => {
        SetName(null);
    }

    const nextHandler =() => {
        navigation.navigate('Register')
    }

  return (
    <View style={styles.container}>
      <Text>TESTING FOR FIREBASE LA CEDAN PANDAI ---- ({name})  </Text>

      <View>
        <Text> Enter Your Fooking Email ey: </Text>
        <TextInput
         style={styles.emailss}
         multiline
         placeholder='alibaba@gmail.com'
         onChangeText={(val) => SetEmails(val)} />
      </View>

      <View>
        <Text> Enter Your Fooking Password ey: </Text>
        <TextInput
         style={styles.passwords}
         secureTextEntry
         placeholder='password123'
         onChangeText={(val) => SetPass(val)} />
      </View>

      <View style = {styles.nextpage}>
      <Button title = 'NextPage'  onPress={nextHandler} />
      </View>

      <Text> Your Email is : ({emails})</Text>
      <Text> Your Password is : ({pass})</Text>
      <View style ={styles.buttonContainer}>
      <Button title = 'Change Name'  onPress={clickHandler} />
      </View>

      <View style = {styles.backContainer}>
      <Button title = 'Back Name'  onPress={backHandler} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },

  emailss:{
    borderWidth: 1,
    borderColor: '#777',
    padding:8,
    margin:10,
    width:200,
  },

  passwords:{
    borderWidth: 1,
    borderColor: '#777',
    padding:8,
    margin:10,
    width:200,
  },

  buttonContainer: {
      paddingTop: 30,
  },

  backContainer: {
      paddingTop: 30,
  },

  nextpage: {
      paddingTop: 30,
  },

});