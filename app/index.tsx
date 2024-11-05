import { Alert, View, Text, StyleSheet, Button, TouchableHighlight } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'

const Home = () => {
  const router = useRouter();

  const onPressButton = () => {
    router.push('/PayScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <TouchableHighlight onPress={onPressButton} underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>Click to Pay!</Text>
        </View>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
  },
  button: {
    marginBottom: 30,
    width: 200,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    borderRadius: 10
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
  },
})

export default Home