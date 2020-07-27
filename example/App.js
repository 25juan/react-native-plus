/**
 * Sample React Native App
 *
 * adapted from App.js generated by the following command:
 *
 * react-native init example
 *
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { SafeAreaView,Button, StyleSheet, Text, View } from 'react-native';
import Plus,{ Portal } from 'react-native-plus';

export default class App extends Component {
  state = {
    status: 'starting',
    message: '--'
  };
  componentDidMount() {
    // Plus.sampleMethod('Testing', 123, (message) => {
    //   this.setState({
    //     status: 'native callback received',
    //     message
    //   });
    // });
  }
  render() {
    return (
      <SafeAreaView style={{ flex:1 }}>
        <Portal>
          <View style={styles.container}>
            <Button title={"显示toast"} onPress={() => Plus.showToast({
              title:"hello world"
            })}/>
            <Text style={styles.welcome}>☆Plus example☆</Text>
            <Text style={styles.instructions}>STATUS: {this.state.status}</Text>
            <Text style={styles.welcome}>☆NATIVE CALLBACK MESSAGE☆</Text>
            <Text style={styles.instructions}>{this.state.message}</Text>
          </View>
        </Portal>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
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
