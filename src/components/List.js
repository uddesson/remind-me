import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { selectReminder } from '../redux/reminders';
import ListItem from './ListItem';

const mapStateToProps = state => ({
  reminders: state.reminders.reminders,
});
const mapDispatchToProps = dispatch => ({
  triggerSelectReminder: (reminder) => dispatch(selectReminder(reminder)),
});
@connect(mapStateToProps, mapDispatchToProps)
export default class List extends Component {

  setSelectedItem = (reminder) => {
    const { triggerSelectReminder } = this.props;
    triggerSelectReminder(reminder)
  }
  /** Todo:
   * Sort reminders by time
   * Add content for when list is empty
   * */

  render() {
    const { reminders } = this.props;
    return(
      <ScrollView style={styles.container}>
        <FlatList
          data={reminders}
          keyExtractor={item => item.id}
          renderItem={({item}) =>
            <TouchableOpacity onPress={() => {this.setSelectedItem(item)}}>
              <ListItem text={item.text} time={item.time} id={item.id} />
            </TouchableOpacity>
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
