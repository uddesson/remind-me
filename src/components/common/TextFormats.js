import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const HeaderOne = ({ style, ...props }) => (
  <Text style={[styles.h1, style]} {...props} />
);

export const Paragraph = ({ style, ...props }) => (
  <Text style={[styles.paragraph, style]} {...props} />
);

export const SmallPrint = ({ style, ...props }) => (
  <Text style={[styles.smallprint, style]} {...props} />
);

const styles = StyleSheet.create({
  h1: {
    fontSize: 38,
    color: '#fff',
    fontWeight: '700',
    fontFamily: 'Roboto'
  },
  paragraph: {
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.2,
    color: '#2d2d2d',
    lineHeight: 20,
    fontFamily: 'Roboto',
  },
  smallprint: {
    marginTop: 1,
    color: 'rgba(0, 0, 0, 0.4)',
    fontSize: 13,
    fontFamily: 'Roboto Mono',
  },
});
