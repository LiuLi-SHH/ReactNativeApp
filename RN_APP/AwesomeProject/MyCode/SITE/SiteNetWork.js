import React, {Component} from 'react';
import {View, StyleSheet, TouchableHighlight, Button} from 'react-native';
import {StackNavigator} from 'react-navigation';
import NetWork from '../../APPSRC/Tools/NewWork';



export default class SiteNetWork extends Component {

  static navigationOptions = {
    title: '网络学习'
  };

     

  startNewWork() {

    // https://www.apiopen.top/satinGodApi?type=1&page=1
    NetWork.PostWithJsonParam("/padelm/cms/getCmsById", {token:'e79f45d060648a9e80122b0361650e81',
    pemUserId:'4E9601FB93BE2D90E054000B5DE0B7FC',cmsId:'6B95781F53E94C22E05490E2BADCE8C8',
 
  }, (response) => {
      alert(JSON.stringify(response));
    }, (errorMsg) => {
      alert(errorMsg)
    })



  }

  render() {
    return (

      <View style={SiteNetWorkStyle.container}>
        <Button onPress={() => this.startNewWork()} title="点击发起网络"></Button>
      </View>

    )
  }
}

const SiteNetWorkStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00ffdd"
  }
})