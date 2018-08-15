import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { selectReminder, passedReminders, upcomingReminders } from '../redux/reminders';
import ListItem from './ListItem';

const mapStateToProps = state => ({
  upcomingReminders: upcomingReminders(state),
  passedReminders: passedReminders(state),
});
const mapDispatchToProps = dispatch => ({
  triggerSelectReminder: (reminder) => dispatch(selectReminder(reminder)),
  triggerUpdateReminders: (reminders) => dispatch(updateReminders(reminders)),
});
@connect(mapStateToProps, mapDispatchToProps)
export default class List extends Component {

  setSelectedItem = (reminder) => {
    const { triggerSelectReminder } = this.props;
    triggerSelectReminder(reminder);
  }

  // TODO: Fix issue with selectors
  render() {
    const { upcomingReminders, passedReminders } = this.props;
    let reminders = upcomingReminders.concat(passedReminders);
    return(
      <ScrollView style={styles.container}>
        <FlatList
          data={reminders}
          keyExtractor={item => item.id}
          renderItem={({item}) =>
            <TouchableOpacity onPress={() => {this.setSelectedItem(item.id)}}>
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
