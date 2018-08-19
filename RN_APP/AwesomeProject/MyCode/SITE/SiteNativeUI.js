
import React, {Component} from 'react'
import {View, StyleSheet, Text, requireNativeComponent} from 'react-native'

var RNTMap = requireNativeComponent('RNNativeUIBridge', null);

var RNTRedView = requireNativeComponent('RNTMap', null);
export default class SiteNativeUI extends Component {


    render() {
        return (
            <View style={SiteNativeUI.container}>
            <Text>
            这是心的呼唤
            </Text>
            <RNTMap {...this.props} style={SiteNativeUIStyles.mapView} />
            <RNTRedView {...this.props} style={SiteNativeUIStyles.mapView} />
            </View>
        );
    }
}


const SiteNativeUIStyles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapView:{
        width:200,
        height:200
    },
})