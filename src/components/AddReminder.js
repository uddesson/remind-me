import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TextInput, TouchableOpacity, DatePickerIOS, StyleSheet, AsyncStorage } from 'react-native';
import { toggleModal } from '../redux/reminders';
import { Paragraph } from '../components/common/TextFormats';
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
    id: null,
  }
  }

  setDate = (newDate) => {
    this.setState({time: newDate})
  }

  getRandomId = () => {
    let number = Math.floor(Math.random() * (1000 - 0) ) + 0;
    return number.toString()
  }

  createReminder = () => {
    let id = this.getRandomId();
    this.setState({id})
    const { triggerAddReminder } = this.props;

    let reminder = {
      time: this.state.time,
      text: this.state.text,
      id,
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