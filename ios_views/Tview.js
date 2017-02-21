import React , { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native'

class TWebView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      url: this.props.url
    }
  }
  render() {
    return (
      <View style={styles.content}>
      {
        this.state.status?
        <View style={styles.errorInfo}>
          <Text>
          网络有问题,啊哈哈,请联系***
          </Text>
        </View>
        :
        <WebView
         onError={this._load.bind(this)}
         startInLoadingState={true}
         source={{url:this.state.url}}/>
      }
      <Text>
      {this.state.url}
      </Text>
      </View>
    )
  }
  _load() {
    this.setState({
      status:true
    })
  }
}

var styles = StyleSheet.create({
  content: {
    flex: 1
  },
  errorInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

module.exports = TWebView;
