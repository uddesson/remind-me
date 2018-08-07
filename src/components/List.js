import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, FlatList, StyleSheet } from 'react-native';
import ListItem from './ListItem';

const mapStateToProps = state => ({
  reminders: state.reminders.reminders,
});
@connect(mapStateToProps)
export default class List extends Component {

  // Todo: Sort reminders by time
  render() {
    const { reminders } = this.props;
    return(
      <ScrollView style={styles.container}>
        <FlatList
          data={reminders}
          keyExtractor={item => item.id}
          renderItem={({item}) =>
            <ListItem text={item.text} time={item.time} />
          }
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    height: '100%',
  },
})
