import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View,Image } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jobizz</Text>
      <Text style={styles.welcome}>Welcome Back</Text>
      <Text style={styles.apply}>Let's login. Apply to jobs!</Text>
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
      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or continue with</Text>
        <View style={styles.line} />
      </View>
      <Image source={require('./assets/104490_apple_icon.png')} style={styles.icons}/>
      <Image source={require('./assets/2993685_brand_brands_google_logo_logos_icon.png')} style={styles.icons}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 16,
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
    marginTop: 140,
    marginLeft: 18,
    fontWeight: 'bold',
    color: '#5072A7',
  },
  input: {
    width: 310,
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    marginLeft: 18,
  },
  welcome: {
    fontSize: 25,
    marginBottom: 5,
    marginLeft: 18,
    fontWeight: 'bold',
  },
  apply: {
    marginLeft: 18,
    marginBottom: 60,
    color: 'grey',
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'stretch', 
    marginHorizontal: 18, 
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'grey',
  },
  orText: {
    marginHorizontal: 10,
    color: 'grey',
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    marginTop: 20,
    width: 310,
    maxWidth: 400, 
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  icons:{
    width:250,
    length:250,
    borderRadius:10,
    marginRight:20,
  }
});
