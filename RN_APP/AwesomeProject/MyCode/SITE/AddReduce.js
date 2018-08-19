import React, {Component} from 'react'; // 统一引入组件
import {View, Text, Button, StyleSheet} from 'react-native'; // 根据需要引入各组的页面组件

import PropTypes from 'prop-type'; // 引入变量校验, 不同react版本引入方式不一样. 为注意事项

// 默认导出类
export default class AddReduce extends Component {

  // 声明所需参数
  static propTypes = {
    addFunc: PropTypes.func,
    reduceFunc: PropTypes.func
  };

  render() {

    console.log('AddReduce');
    console.log(this.props);

    // 导入所需参数
    const {addFunc, reduceFunc, counter} = this.props
    return (
      <View style={styles.container}>

        <Text style={{
          textAlign: 'center'
        }}>
          {counter}
        </Text>

        <Button
          onPress={() => {
          addFunc();
          console.log(this.props)
        }}
          title="加1计算"/>

        <Button onPress={reduceFunc} title='减1计算'/>

      </View>
    );
  }

};

// 样式定义
const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    backgroundColor: '#ff5500'
  }
});