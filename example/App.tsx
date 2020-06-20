/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  StatusBar,
} from 'react-native';
import Plus,{ Position } from "./src";

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View style={styles.row}>
            <Button onPress={()=>Plus.showToast({ title:"hello world",position:Position.TOP })} title={"点击调用toast"}/>
          </View>
          <Button onPress={()=>Plus.showToast({ title:"hello world",position:Position.CENTER })} title={"点击调用toast"}/>
          <Button onPress={()=>Plus.showToast({ title:"hello world",position:Position.BOTTOM })} title={"点击调用toast"}/>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  row:{
    paddingVertical: 16 ,
    paddingHorizontal:8,
    borderBottomWidth:StyleSheet.hairlineWidth,
    borderBottomColor:"#ddd"
  }
});

export default App;
