import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';


import Image1 from '../assets/images/friedrice.png';
import Image2 from '../assets/images/noodles.png';
import Image3 from '../assets/images/paneer.png';
import Image4 from '../assets/images/pasta.png';

const Home = () => {
  const router = useRouter();



  const onPressButton = (imageId) => {
    router.push({
      pathname: '/PayScreen',
      params: { imageId }, // Pass the image identifier as a parameter
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.title1}>Order Now...</Text>

      
      <Image source={Image1} style={styles.image} />
      <Text style={styles.subtitle}>Fried Rice</Text>
      <TouchableHighlight onPress={() => onPressButton('friedrice')} underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>Pay</Text>
        </View>
      </TouchableHighlight>

     
      <Image source={Image2} style={styles.image} />
      <Text style={styles.subtitle}>Noodles</Text>
      <TouchableHighlight onPress={() => onPressButton('noodles')} underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>Pay</Text>
        </View>
      </TouchableHighlight>

   
      <Image source={Image3} style={styles.image} />
      <Text style={styles.subtitle}>Panner Butter Masala</Text>
      <TouchableHighlight onPress={() => onPressButton('pbm')} underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>Pay</Text>
        </View>
      </TouchableHighlight>

  
      <Image source={Image4} style={styles.image} />
      <Text style={styles.subtitle}>Pasta</Text>
      <TouchableHighlight onPress={() => onPressButton('pasta')} underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>Pay</Text>
        </View>
      </TouchableHighlight>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  title1:{
    fontSize: 20,
    alignContent:'flex-start',
    marginBottom: 15,
    fontWeight: 'bold',
    color: '#333',

  },
  subtitle:{
    fontSize: 15,
    color: '#333',

  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
  },
  button: {
    marginBottom: 20,
    width: 200,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
