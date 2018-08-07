import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TextInput, DatePickerIOS, StyleSheet } from 'react-native';
import uuidv1 from 'uuid/v1';
import { toggleModal, addReminder } from '../redux/reminders';
import { UpdateButton } from './common/Buttons';

const mapStateToProps = state => ({ showModal: state.reminders.showModal });
const mapDispatchToProps = dispatch => ({
  triggerToggleModal: () => dispatch(toggleModal()),
  triggerAddReminder: (reminder) => dispatch(addReminder(reminder))
});
@connect(mapStateToProps, mapDispatchToProps)
export default class AddReminder extends Component {

  state = {
    time: new Date(),
    text: undefined,
  }

  setDate = (newDate) => {
    this.setState({time: newDate})
  }

  createReminder = () => {
    const { triggerAddReminder } = this.props;

    let reminder = {
      time: this.state.time,
      text: this.state.text,
      id: uuidv1(), // Generates a uniqe id
    }

    triggerAddReminder(reminder);
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
          minimumDate={new Date()}
          minuteInterval={1}
          date={this.state.time}
          onDateChange={this.setDate}
        />

        <UpdateButton onPress={() => {this.createReminder()}} text={'Done'} />

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