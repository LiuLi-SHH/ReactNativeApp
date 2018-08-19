import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-type';

export default class SiteItem extends Component {

  static propTypes = {
    title: PropTypes.string
  }

  render() {

    const {title} = this.props;
    return (
      <View style={SiteItemStyle.Container}>

        <Text style = {SiteItemStyle.SiteTitleText}>
          {title}
        </Text>

      </View>
    );
  }

}

const SiteItemStyle = StyleSheet.create({
  Container: {
    flex: 1,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
    borderBottomWidth : 3
  },
  SiteTitleText: {
    fontSize: 20,
    color: 'white'
  }

})