import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import { Paragraph, SmallPrint } from './common/TextFormats';
import { DeleteButton } from './common/Buttons';
import { deleteReminder } from '../redux/reminders';

const mapStateToProps = state => ({
  reminders: state.reminders.reminders,
});
const mapDispatchToProps = dispatch => ({
  triggerDeleteReminder: (reminders) => dispatch(deleteReminder(reminders))
});
@connect(mapStateToProps, mapDispatchToProps)
export default class ListItem extends Component {

  findIndexToDelete = (id) => {
    const { reminders, triggerDeleteReminder } = this.props;
    const newRemindersArray = [...reminders];

    for (var i = 0; i < newRemindersArray.length; i++){
      if(newRemindersArray[i].id == id){
        newRemindersArray.splice(i, 1)
      }
    }
    // Will set reminders in asyncstorage to new array without the deleted reminder
    triggerDeleteReminder(newRemindersArray);
  }

  render() {
    const { id, text, time } = this.props;

    /**
     * Check if the reminder-time has passed (is before now),
     * and use that false/true variable to render different
     * textstyles for the listcomponent.
     */
    let now = moment().format();
    let reminderDateHasPassed = moment(time).isBefore(now);

    const renderUpcomingReminder = () => {
      return(
        <>
        <Paragraph>
            {text}
        </Paragraph>
        <SmallPrint>
          {moment(time).calendar()}
        </SmallPrint>
        </>
      )
    }

    const renderPassedReminder = () => {
      return(
        <>
        <Paragraph style={styles.passedReminderText}>
          {text}
        </Paragraph>
        <SmallPrint style={styles.passedReminderText}>
          {moment(time).fromNow()}
        </SmallPrint>
        </>
      )
    }

    return (
      <View style={styles.container}>

        <View style={[styles.col_lg, styles.innerContainer]}>
          {!reminderDateHasPassed && renderUpcomingReminder()}
          {reminderDateHasPassed && renderPassedReminder()}
        </View>

        <View style={[styles.col_sm, styles.innerContainer]}>
          <DeleteButton deleteReminder={() => {this.findIndexToDelete(id)}}/>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 4,
    paddingLeft: 20,
    paddingRight: 15,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  innerContainer: {
    marginTop: 4,
  },
  col_lg: {
    width: '80%',
  },
  col_sm: {
    justifyContent: 'center',
    flexDirection: 'column',
    width: '20%',
  },
  passedReminderText: {
    color: 'rgba(0, 0, 0, 0.3)',
    fontStyle: 'italic',
  }
});
