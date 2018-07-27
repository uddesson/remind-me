import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TextInput, TouchableOpacity, DatePickerIOS, StyleSheet } from 'react-native';
import { Paragraph } from '../components/common/TextFormats';

const mapStateToProps = state => ({ showModal: state.reminders.showModal });
const mapDispatchToProps = dispatch => ({ triggerToggleModal: () => dispatch(toggleModal()) });

@connect(mapStateToProps, mapDispatchToProps)
export default class AddReminder extends Component {

  state = {
    time: new Date(),
    text: undefined,
    id: null,
  }

  setDate = (newDate) => {
    this.setState({time: newDate})
  }

  render(){
    getRandomId = () => {
      return Math.floor(Math.random() * (1000 - 0) ) + 0;
    }

    createReminder = () => {
      let id = getRandomId();
      this.setState({id})

      let reminder = {
        time: this.state.time,
        text: this.state.text,
        id: id,
      }

      /* TODO: Check if reminder is legit (date has not passed, id is set, text is set etc),
      then add reminder object to array of reminders (redux) */
      console.log(reminder)
    }

    return(
      <View style={styles.container}>
        <TextInput
          style={{height: 40, padding: 10, marginTop: 60, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          placeholder={'Skriv en påminnelse'}
          value={this.state.text}
        />

        <DatePickerIOS
          minuteInterval={1}
          date={this.state.time}
          onDateChange={this.setDate}
        />

        <TouchableOpacity style={styles.button} onPress={() => {createReminder()}}>
          <Paragraph style={{color: '#fff'}}>
            Do reminder stuff.
          </Paragraph>
        </TouchableOpacity>

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
  button: {
    backgroundColor: 'tomato',
    padding: 14,
    borderRadius: 5,
  }
})