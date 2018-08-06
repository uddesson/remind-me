import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';
import { toggleModal } from '../redux/reminders';
import AddReminder from './AddReminder';

const mapStateToProps = state => ({ showModal: state.reminders.showModal });
const mapDispatchToProps = dispatch => ({ triggerToggleModal: () => dispatch(toggleModal()) });

@connect(mapStateToProps, mapDispatchToProps)
export default class AddModal extends Component {
  render(){
    const { showModal, triggerToggleModal } = this.props;

    return(
      <Modal
        isVisible={showModal}
        backdropOpacity={0.5}
        backdropColor='black'
        avoidKeyboard={true}
        onBackdropPress={() => triggerToggleModal()}
      >
        <AddReminder />
      </Modal>
    );
  }
}