import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.firstTitle}>JOBIZZ</Text>
      <Text style={styles.title}>WELCOME BACK</Text>
      <Text style={styles.subtitle}>LET'S LOGIN. APPLY TO JOBS</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={() => alert('Login button pressed')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <img style={styles.Icons} >
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start', // Position content at the top
    padding: 20,
    paddingTop: 80, 
  },
  firstTitle: {
    fontSize: 25,
    color: 'blue',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: '300',
    textAlign: 'center',
  },
  input: {
    width: '90', // Set width to a more reasonable value
    maxWidth: 400,
    padding: 12,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    marginTop: 20,
    width: '80%', // Keep consistent with input width
    maxWidth: 400, 
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
