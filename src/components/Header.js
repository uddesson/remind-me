import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { toggleModal } from '../redux/reminders';
import { HeaderOne } from './common/TextFormats';

const mapStateToProps = state => ({ showModal: state.reminders.showModal });
const mapDispatchToProps = dispatch => ({ triggerToggleModal: () => dispatch(toggleModal()) });

@connect(mapStateToProps, mapDispatchToProps)
export default class Header extends Component {
  toggleModal = () => {
    const { triggerToggleModal, showModal } = this.props;
    triggerToggleModal();
    console.log(showModal)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => {this.toggleModal()}}>
            <HeaderOne>Add reminder</HeaderOne>
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
});
