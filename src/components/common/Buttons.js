import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

export const DeleteButton = ({ style, ...props }) => (
  <TouchableOpacity style={[styles.delete, style]} {...props} />
);

const styles = StyleSheet.create({
  delete: {
    alignSelf: 'center',
    backgroundColor: 'tomato', // Temp
    borderRadius: 100, // Temp
    width: 20, // Temp
    height: 20, // Temp
  },
});
