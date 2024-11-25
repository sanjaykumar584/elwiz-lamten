import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import QRCodeImage from '../assets/images/qr-code.jpg'; // Adjust the path as needed

const PayScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan to Pay</Text>
      <Image source={QRCodeImage} style={styles.qrCode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  qrCode: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
});

export default PayScreen;