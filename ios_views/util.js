import React , { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  PixelRatio
} from 'react-native'
// 1.fetch
// 2.获取屏幕宽高
// 3.获取最小线宽

var {height, width} = Dimensions.get('window');
var pix = PixelRatio.get();
function get(url, successback, errorback) {
  fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      successback(responseJson);
    })
    .catch((error) => {
      errorback(error);
    });
}
module.exports = {
  height,
  width,
  get,
  pix
};
