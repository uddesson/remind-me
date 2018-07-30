import React, { Component } from 'react';
import { View, FlatList, StyleSheet, AsyncStorage } from 'react-native';
import { Paragraph } from './common/TextFormats';


export default class List extends Component {
  state = {
    reminders: null,
  }


  async loadReminders() {
    // TODO: Error handling
    await AsyncStorage.getAllKeys()
    .then((keys) => {
      this.setReminders(keys);
    })
  }

  async setReminders(keys) {
    let reminders = [];
    await AsyncStorage.multiGet(keys)
    .then((result) => {
      result.map((result, i, items) => {
        let singleReminder = JSON.parse(items[i][1])
        reminders.push(singleReminder)
      });
    })
    this.setState({reminders})
  }

  componentDidMount(){
    this.loadReminders();
  }

  render() {
    return(
      <View style={styles.container}>
        <FlatList
          data={this.state.reminders}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Paragraph>{`${item.text} at ${item.time}`}</Paragraph>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})
