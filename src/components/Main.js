import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import Header from './Header';
import List from './List';

export default class Main extends Component {
  render() {
    return (
     <ScrollView>
      <Header />
      <List />
     </ScrollView>
    );
  }
}
