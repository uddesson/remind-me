import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';
import { toggleModal, deselectReminder } from '../redux/reminders';
import ModalContent from './ModalContent';

const mapStateToProps = state => ({ showModal: state.reminders.showModal });
const mapDispatchToProps = dispatch => ({ 
  triggerToggleModal: () => dispatch(toggleModal()),
  triggerDeselectReminder: () => dispatch(deselectReminder()),
 });

@connect(mapStateToProps, mapDispatchToProps)
export default class ReminderModal extends Component {

  clearModal = () => {
    const { triggerDeselectReminder, triggerToggleModal } = this.props;
    triggerDeselectReminder();
    triggerToggleModal();
  }

  render(){
    const { showModal } = this.props;
    return(
      <Modal
        isVisible={showModal}
        backdropOpacity={0.5}
        backdropColor='black'
        avoidKeyboard={true}
        onBackdropPress={() => this.clearModal()}
      >
        <ModalContent />
      </Modal>
    );
  }
}