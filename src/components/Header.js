import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { toggleModal, deleteAllReminders } from '../redux/reminders';
import { HeaderOne } from './common/TextFormats';

const mapStateToProps = state => ({ showModal: state.reminders.showModal });
const mapDispatchToProps = dispatch => ({
  triggerToggleModal: () => dispatch(toggleModal()),
  triggerDeleteAllReminders: () => dispatch(deleteAllReminders())
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Header extends Component {
  render() {
    const { triggerToggleModal, triggerDeleteAllReminders } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.row}>

          <TouchableOpacity style={styles.col} onPress={() => {triggerToggleModal()}}>
            <HeaderOne>Add reminder</HeaderOne>
          </TouchableOpacity>

          <TouchableOpacity style={styles.col} onPress={() => {triggerDeleteAllReminders()}}>
            <HeaderOne>*Evil laugh*</HeaderOne>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 30,
    paddingLeft: 20,
    backgroundColor: 'tomato',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  col: {
    flex: 1,
  }
});
