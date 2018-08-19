/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {createStore} from 'redux'
import {Provider} from 'react-redux' 

import configStore from '../Config/StoreConfig';
import { App } from './App';

// 创建仓库
let store = configStore()

export default class Root extends Component {
  render() {
    return (
          <Provider store = {store}>
             <App/>
          </Provider> 
    );
  }
}




