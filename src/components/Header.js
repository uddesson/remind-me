import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { toggleModal } from '../redux/reminders';
import { HeaderOne } from './common/TextFormats';

const mapStateToProps = state => ({ showModal: state.reminders.showModal });
const mapDispatchToProps = dispatch => ({
  triggerToggleModal: () => dispatch(toggleModal())
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Header extends Component {
  render() {
    const { triggerToggleModal } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.row}>

          <TouchableOpacity style={styles.col} onPress={() => {triggerToggleModal()}}>
            <HeaderOne>+</HeaderOne>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingLeft: 20,
    backgroundColor: '#89dcd3',
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
