import {React, useState} from 'react';
import {View, StyleSheet, Text, Image, TextInput, Alert} from 'react-native';
import Button from '../compononents/button';
import {validateEmail} from '../utils/index';

const SubscribeScreen = () => {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/little-lemon-logo-grey.png')}
        resizeMode="contain"
      />
      <Text style={styles.welcomeText}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <TextInput
        style={styles.emailInput}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholder="Type your email"
        textContentType="emailAddress"
      />
      <Button
        text="Subscribe"
        disabled={!validateEmail(email)}
        onPress={() => {
          Alert.alert('Thank you for subscribing, stay tuned!');
        }}
      />
    </View>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    height: 100,
    width: 100,
    marginVertical: 50,
  },
  welcomeText: {
    fontSize: 20,
    color: '#333333',
    textAlign: 'center',
    marginHorizontal: 30,
  },
  emailInput: {
    height: 40,
    width: '90%',
    marginTop: 50,
    borderColor: '#495E57',
    borderWidth: 2,
    borderRadius: 10,
  },
});
