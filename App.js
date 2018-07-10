/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry} from 'react-native';
import Header from '/src/components/Header';

const instructions = Platform.select({
  const { textStyle } = styles;
  const { viewStyle } = styles;
  const { textStyle2 } = styles;

  ios: 'ios appGunluk',
  android: 'appGunluk android' });

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Header />
      <View style={styles.container}>
        <Text style={styles.hi}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  hi: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
