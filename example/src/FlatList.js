import React from "react" ;
import {StyleSheet, Text} from "react-native";
import { FlatList } from "react-native-plus" ;
import {View,} from "react-native";
let collection = [] ;
function fetchData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(collection.length > 30){
        resolve([])
      }
      const list = new Array(10).fill(0).map(item => {
         return parseInt(Math.random()*10000)+10000
      });
      collection = [ ...collection, ...list ]
      resolve(list)
    },1000)
  })
}

function renderItem({ item,index }) {
  return (
    <View style={styles.row}>
      <Text style={styles.text}>{item}</Text>
    </View>
  )
}
export default () => {
  React.useEffect(() => {
    collection = [] ;
  },[]);
  return (
    <FlatList
      renderItem={renderItem}
      onLoadMore={fetchData}
      onRefresh={fetchData}/>
  )
}
const styles = {
  row:{
    flexDirection: "row",
    borderBottomColor: "#ccc",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  text:{
    fontSize:16,
    color:"#333"
  }
}
