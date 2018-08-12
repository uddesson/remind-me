import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TextInput, DatePickerIOS, StyleSheet, Alert } from 'react-native';
import uuidv1 from 'uuid/v1';
import { toggleModal, addReminder, updateReminders, deselectReminder } from '../redux/reminders';
import { UpdateButton } from './common/Buttons';

const mapStateToProps = state => ({
  reminders: state.reminders.reminders,
  showModal: state.reminders.showModal,
  selectedReminder: state.reminders.selectedReminder,
});
const mapDispatchToProps = dispatch => ({
  triggerToggleModal: () => dispatch(toggleModal()),
  triggerAddReminder: (reminder) => dispatch(addReminder(reminder)),
  triggerUpdateReminders: (reminders) => dispatch(updateReminders(reminders)),
  triggerDeselectReminder: () => dispatch(deselectReminder()),
});
@connect(mapStateToProps, mapDispatchToProps)
export default class ModalContent extends Component {

  /** Todo:
   * Fix issue with empty time on selectedreminder
   * */

  state = {
    time: new Date(this.props.selectedReminder.time) || new Date(),
    text: this.props.selectedReminder.text || null,
  componentDidMount(){
    this.checkForSelectedReminder();
  }

  handleReminderInput = () => {
    if(this.textInputIsEmpty()){
      return;
    }
    else {
      this.createNewReminder(); // Executed if a selected reminder NOT is identified
      this.updateExistingReminder(); // Executed if a selected reminder is identified
    }
  }

  createNewReminder = () => {
    const { triggerAddReminder, selectedReminder, triggerToggleModal } = this.props;
    if(selectedReminder.id === undefined){
      let reminder = {
        time: this.state.time,
        text: this.state.text,
        id: uuidv1(), // Generates a uniqe id
      }
      triggerAddReminder(reminder);
      triggerToggleModal();
    }
    return;
  }

  updateExistingReminder = () => {
    const {
      triggerUpdateReminders,
      reminders,
      selectedReminder,
      triggerToggleModal,
      triggerDeselectReminder
    } = this.props;

    if (selectedReminder.id !== undefined){
      let index = reminders.indexOf(selectedReminder);
      const updatedReminders = [...reminders];

      updatedReminders[index].text = this.state.text;
      updatedReminders[index].time = this.state.time;

      triggerUpdateReminders(updatedReminders);
      triggerToggleModal();
      triggerDeselectReminder();
      }
    return;
  }

  checkForSelectedReminder = () => {
    const { selectedReminder, reminders } = this.props;
    if (selectedReminder !== null){
      const selectedReminderContent = reminders.find(reminder => reminder.id === selectedReminder);
      const time = new Date(selectedReminderContent.time);
      const text = selectedReminderContent.text;
      this.setState({ time, text})
    }
  }

  textInputIsEmpty = () => {
    if(!this.state.text){
      Alert.alert(
        'Invalid text',
        'Looks like an empty reminder..',
        { text: 'OK' },
        { cancelable: true }
      )
      return true;
    }
  }

  setDate = (newDate) => {
    this.setState({time: newDate})
  }

  render(){
    return(
      <View style={styles.container}>

        <TextInput
          style={{height: 40, padding: 10, marginTop: 60, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          placeholder={'Skriv en påminnelse'}
          value={this.state.text}
          autoCorrect={false}
        />

        <DatePickerIOS
          locale={'sv'}
          minuteInterval={1}
          date={this.state.time}
          onDateChange={this.setDate}
        />

        <UpdateButton onPress={() => {this.handleReminderInput()}} text={'Done'} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
})