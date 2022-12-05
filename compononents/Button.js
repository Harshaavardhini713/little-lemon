import {React} from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';

const Button = ({text, onPress, disabled}) => {
  return (
    <Pressable
      style={[styles.button, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    backgroundColor: '#495E57',
    width: '90%',
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
  },
  disabled: {
    backgroundColor: 'grey',
    opacity: 0.5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
