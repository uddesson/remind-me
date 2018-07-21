import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Paragraph } from './common/TextFormats';

export default class List extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Paragraph>Reminder</Paragraph>
        <Paragraph>Reminder</Paragraph>
        <Paragraph>Reminder</Paragraph>
        <Paragraph>Reminder</Paragraph>
        <Paragraph>Reminder</Paragraph>
        <Paragraph>Reminder</Paragraph>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})
