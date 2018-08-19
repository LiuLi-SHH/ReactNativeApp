import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableHighlight
} from 'react-native';
import SiteItem from './SiteItem';
import * as HomeTypes from '../../APPSRC/Types/HomeType';




export default class Site extends Component {

  static navigationOptions = {
    title: '学习园地'
  };

  constructor(props) {
    super(props);
    this.state = {
      learnList: [
        {
          key: '加减法认识redux',
          index:0
        }, 
        {
          key: '网络学习',
          index:1
        },
        {
          key: '本地交互',
          index:2
        },
        {
          key: '本地UI',
          index:3
        },
        {
          key: '哈哈哈, 淡定! 不要疼',
          index:99
        }
      ]
    };
  }

  selectAction(item) {
    

    if (item.index === 0)
    {
      this.props.navigation.navigate(HomeTypes.Route_SiteAddReduce)
    }
    else if (item.index === 1)
    {
      this.props.navigation.navigate(HomeTypes.Route_SiteNetWork)
    }
    else if (item.index === 2)
    {
      this.props.navigation.navigate(HomeTypes.Route_SiteNativeBridge)
    }
    else if (item.index === 3)
    {
      this.props.navigation.navigate(HomeTypes.Route_SiteNativeUI)
    }
    else
    {
      alert(item.key);
    }
    

  }
  
  render() {
    return (<FlatList
      data={this.state.learnList}
      onPress
      renderItem={({item, separators}) => (
      <TouchableHighlight
        onPress={() => this.selectAction(item)}
        onShowUnderlay={separators.highlight}
        onHideUnderlay={separators.unhighlight}>

        <SiteItem title={item.key}></SiteItem>
        
      </TouchableHighlight>)} />);
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
