import React , { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native'
import TWebView from './Tview'
class ToiletPage extends Component {
  render() {
    return (
      <View style={styles.content}>
        <TWebView url="http://127.0.0.1:8080/nearby.html?v=2016.2.10.1"/>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  content: {
    flex: 1
  }
})

module.exports = ToiletPage;
