import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';


import homeReducer from '../../APPSRC/Types/HomeReducer';


import { Route_SettingPage, Route_SitePage } from '../../APPSRC/Types/HomeType';


export default class Home extends Component {

  render() {

    return (
      <View style={styles.container}>
    
        <Button
          title="去学习园地"
          onPress={() => {
          this
            .props
            .navigation
            .navigate(Route_SitePage);
         
        }}/>


        <Button
          title="去设置"
          onPress={() => {
          this
            .props
            .navigation
            .navigate(Route_SettingPage);
         
        }}/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff5555'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});


