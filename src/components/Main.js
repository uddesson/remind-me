import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import Header from './Header';
import List from './List';
import AddModal from '../components/modals/AddModal';

export default class Main extends Component {
  render() {
    return (
      <>
        <AddModal />
        <ScrollView>
          <Header />
          <List />
        </ScrollView>
     </>
    );
  }
}
