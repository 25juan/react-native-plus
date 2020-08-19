import React from "react" ;
import { Text } from "react-native";
import { FlatList } from "react-native-plus" ;
import {View,} from "react-native";

function fetchData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const list = new Array(10).fill(0).map(item => {
         return Math.random()*10000+10000
      });
      resolve(list)
    },1000)
  })
}

export default () => {
  return (
    <FlatList onRefresh={fetchData}/>
  )
}
const styles = {
  row:{
    paddingVertical:16,
    paddingHorizontal:16
  },
  text:{
    fontSize:16,
    color:"#999"
  }
}
