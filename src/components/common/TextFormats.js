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

export const SmallPrint = ({ style, ...props }) => {
  return (
    <Text style={[styles.smallprint, style]} {...props} />
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 14,
    color: '#2d2d2d',
  },
  smallprint: {
    marginTop: 2,
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 13,
  },
});
