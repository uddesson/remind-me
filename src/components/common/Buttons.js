import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export const DeleteButton = ({ style, ...props }) => (
  <TouchableOpacity style={[styles.delete, style]} {...props} onPress={props.deleteReminder} >
    <Text style={styles.deleteText}>
      -
    </Text>
  </TouchableOpacity>
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
    backgroundColor: '#89dcd3',
    borderRadius: 100,
    width: 20,
    height: 20,
  },
  deleteText: {
    fontFamily: 'Quicksand',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff'
  },
  update: {
    marginTop: 20,
    marginBottom: 20,
    width: '50%',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#89dcd3',
    padding: 10,
    borderRadius: 5,
  },
  updateText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#89dcd3',
    fontWeight: 'bold',
  },
});
