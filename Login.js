// Login.js
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
        <Text style={styles.Firsttitle}>JOBIZZ</Text>
        <Text style={styles.title}>WELCOME BACK</Text>
        <Text style={styles.title}>LET'S LOGIN. APPLY TO JOBS</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
    <Button style={styles.button} title="Login" onPress={() => alert('Login button pressed')} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  Firsttitle:{
    fontSize: 25 ,
    alignContent:"left",
    color:'blue',
    marginBottom: 25,
    fontweight: "bold",
  }

    button: {
    backgroundColor:" blue",
    
    },

  
});
