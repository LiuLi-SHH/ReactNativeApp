import React, {Component} from 'react';
import {StyleSheet, TouchableHighlight, Button, View, Text, NativeModules, TextInput} from 'react-native';

var NetWorkBridge = NativeModules.NetWorkBridge;




export default class SiteNativeBridge extends Component {


constructor(props) {
    super(props);
    this.state = {
        textInput:"我是初始化数据",
        callBackStr:['原始值'],
        netBridgeStr:['native发起网络访问']
    }
}


    jsCallNative(params) {

        NetWorkBridge.addEvent(this.state.textInput);
    };

    jsCallNativeBack(params) {
        alert(this.state.callBackStr[0]);
        NetWorkBridge.callBackAction(this.state.textInput, (error, events) => {
            if (error) {
                console.error(error);
              } else {
                this.setState({callBackStr: events});
              }
        } )

    }


/*
{
    activeType = 2;
    pemUserId = 5D0F9F918B503791E05490E2BADCE8C8;
    requestType = 1;
    token = a65ac5239eebab7896c744d33e01825b;
}*/
    netBridge(params) {

        let temnpParam = {
            activeType : '2',
            pemUserId : '5D0F9F918B503791E05490E2BADCE8C8',
            requestType : '1',
            token : 'a65ac5239eebab7896c744d33e01825b'
        };

        NetWorkBridge.postReuest("https://dmzstg1.pa18.com", 
        "/padelm/mobileAppBanner/querytiActiveCenterBannerList", 
        JSON.stringify(temnpParam), 
    (error, result) => {
        if(error)
        {
            alert(JSON.stringify(error));
        }
        else
        {
            this.setState({netBridgeStr:result});
        }
    });

    };

    render() {
        return (
           <View style={SiteNativeBridgeStyles.container}>
             <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({textInput : text})}
        value={this.state.textInput}
      />
            <Button title={"点击按钮jsCallNative方法"} onPress={this.jsCallNative.bind(this)}></Button>
            <Button title={"点击按钮jsCallNativeBack方法"} onPress={this.jsCallNativeBack.bind(this)}></Button>
            <Text> {this.state.callBackStr[0]} </Text>
            <Button title={"点击按钮native网络请求方法"} onPress={this.netBridge.bind(this)}></Button>
            <Text> {this.state.netBridgeStr[0]} </Text>
           </View>
        );
    }
}


const SiteNativeBridgeStyles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
    },
    
})