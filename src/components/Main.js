import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './Header';
import List from './List';
import ReminderModal from './ReminderModal';

export default class Main extends Component {
  render() {
    return (
      <>
        <ReminderModal />
        <View style={{ paddingBottom: 120 }}>
          <Header />
          <List />
        </View>
     </>
    );
  }
}
