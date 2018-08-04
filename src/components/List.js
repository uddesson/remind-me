import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { ScrollView, FlatList, StyleSheet, AsyncStorage } from 'react-native';
// import { loadReminders } from '../redux/reminders';
import ListItem from './ListItem';

/**
* TODO: Implement redux
* const mapStateToProps = state => ({ remindersInState: state.reminders.reminders });
* const mapDispatchToProps = dispatch => ({ triggerLoadReminders: () => dispatch(loadReminders(reminders)) });
* @connect(mapStateToProps, mapDispatchToProps)
*/

export default class List extends Component {
  state = {
    reminders: null,
  }

  async loadKeys() {
    // TODO: Error handling
    await AsyncStorage.getAllKeys()
    .then((keys) => {
      this.loadReminders(keys);
    })
  }

  async loadReminders(keys) {
    let reminders = [];
    await AsyncStorage.multiGet(keys)
    .then((result) => {
      result.map((result, i, items) => {
        let singleReminder = JSON.parse(items[i][1])
        reminders.push(singleReminder)
      })
    })
    .then(() => {this.setState({reminders})})
    .catch(error => {
      console.log(error)
    });
  }

  componentDidMount(){
    this.loadKeys();
  }

  render() {
    return(
      <ScrollView style={styles.container}>
        <FlatList
          data={this.state.reminders}
          keyExtractor={item => item.id}
          renderItem={({item}) =>
            <ListItem text={item.text} time={item.time} />
          }
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    height: '100%',
  },
})
