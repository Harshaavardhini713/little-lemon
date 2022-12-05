import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Button from '../compononents/Button';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/little-lemon-logo.png')}
        resizeMode="contain"
      />
      <Text style={styles.welcomeText}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Button
        text="Newsletter"
        disabled={false}
        onPress={() => navigation.navigate('Subscribe')}
      />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 220,
    width: 130,
  },
  welcomeText: {
    fontSize: 20,
    color: '#333333',
    fontWeight: 'bold',
    marginTop: 60,
    textAlign: 'center',
    marginHorizontal: 30,
    marginBottom: 70,
  },
});
