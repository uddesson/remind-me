import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export const DeleteButton = ({ style, ...props }) => (
  <TouchableOpacity style={[styles.delete, style]} {...props} />
);

export const UpdateButton = ({ style, ...props }) => (
  <TouchableOpacity style={[styles.update, style]} {...props} onPress={props.onPress}>
    <Text style={styles.updateText}>
      {props.text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  delete: {
    alignSelf: 'center',
    backgroundColor: 'tomato', // Temp
    borderRadius: 100, // Temp
    width: 20, // Temp
    height: 20, // Temp
  },
  update: {
    marginTop: 20,
    marginBottom: 20,
    width: '40%',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'tomato',
    padding: 10,
    borderRadius: 5,
  },
  updateText: {
    textAlign: 'center',
    color: 'tomato',
    fontWeight: 'bold',
  }
});
