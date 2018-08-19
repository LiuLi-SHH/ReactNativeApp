import React, {Component} from 'react';     // 每个类都需要引入的
import {View, StyleSheet} from 'react-native';  // 根据每个类的各自需要,酌情引入系统组件
import AddReduce from './AddReduce';    // 自定义组件

import {connect} from 'react-redux';    // 用于redux的组件链接
import * as HomeAction from '../../APPSRC/Actions/Action';  // 用于redux的组件链接, action组装车间

// 创建类
class SiteAddReduce extends Component {

    static navigationOptions = {
        title: '学习REDUX'
      };

  render() {

    // redux外部prop参数引入
    const {addFunc, reduceFunc, addResult} = this.props;
    return (
        // 包装视图
      <View style={SiteAddReduceStyle.container}>

      { /* 自定义组件视图, 内部传参为redux传参方式 */ }
        <AddReduce addFunc={addFunc} reduceFunc={reduceFunc} counter={addResult}/>

      </View>
    );
  }
};


// 制作样式, 采用规定的命名空间予以区分, 防止命名重复,不易查找
const SiteAddReduceStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff5555'
  }
});

// 用connect包装类, 并导出
export default connect((state) => ({addResult: state.HomeReducer.addResult}), (dispatch) => ({
  addFunc: () => dispatch(HomeAction.addTodo()),
  reduceFunc: () => dispatch(HomeAction.reduceTodo())
}))(SiteAddReduce)