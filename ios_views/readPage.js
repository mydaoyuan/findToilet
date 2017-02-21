import React , { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import TWebView from './Tview'

class ReadPage extends Component {
  render() {
    return (
      <View style={styles.content}>
        <Text style={styles.text}>
          阅读
        </Text>
        <TWebView url="http://127.0.0.1:8080/nearby.html"/>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  text: {
    fontSize: 60
  },
  content: {
    flex: 1
  },
})

module.exports = ReadPage;
