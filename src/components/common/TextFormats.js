import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const HeaderOne = ({ style, ...props }) => {
  return (
    <Text style={[styles.h1, style]} {...props} />
  );
};

export const Paragraph = ({ style, ...props }) => {
  return (
    <Text style={[styles.paragraph, style]} {...props} />
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 15,
    color: '#2d2d2d',
  }
});
