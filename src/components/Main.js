import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './Header';
import List from './List';
import AddModal from './Modal';

export default class Main extends Component {
  render() {
    return (
      <>
        <AddModal />
        <View>
          <Header />
          <List />
        </View>
     </>
    );
  }
}
