import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderOne } from './common/TextFormats';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
            <HeaderOne>Lägg till +</HeaderOne>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 30,
    paddingLeft: 20,
    backgroundColor: 'tomato',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
