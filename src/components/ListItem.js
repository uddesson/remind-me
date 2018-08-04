import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import moment from 'moment';
import { Paragraph, SmallPrint } from './common/TextFormats';
import { DeleteButton } from './common/Buttons';

export default class ListItem extends Component {
  render(){
    const { text, time } = this.props;
    console.log(time)
    return(
      <View style={styles.container}>

        <View style={[styles.col_lg, styles.innerContainer]}>
          <Paragraph>{text}</Paragraph>
          <SmallPrint>{moment(time).calendar()}</SmallPrint>
        </View>

        <View style={[styles.col_sm, styles.innerContainer]}>
          <DeleteButton />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 4,
    paddingLeft: 20,
    paddingRight: 15,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  innerContainer: {
    marginTop: 4,
  },
  col_lg: {
    width: '80%',
  },
  col_sm: {
    justifyContent: 'center',
    flexDirection: 'column',
    width: '20%',
  }
})