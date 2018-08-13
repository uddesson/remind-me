import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import moment from 'moment';
import { selectReminder, updateReminders } from '../redux/reminders';
import ListItem from './ListItem';

const mapStateToProps = state => ({
  reminders: state.reminders.reminders,
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

  // TODO: Turn into selector. Use reselect? https://github.com/reduxjs/reselect
  sortRemindersByTime = () => {
    const { reminders, triggerUpdateReminders } = this.props;
    let sorted = [...reminders];
    let now = moment();

    sorted.sort(function(a, b){
      if(moment(a.time).isBefore(now) && moment(a.time).isBefore(b.time)){
        return a.time < b.time;
      }
      if(moment(a.time).isAfter(now) && moment(a.time).isAfter(b.time)){
        return a.time < b.time;
      }
    });
    triggerUpdateReminders(sorted);
  }

  componentDidMount(){
    this.sortRemindersByTime(); // Temp
  }

  render() {
    const { reminders } = this.props;
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
