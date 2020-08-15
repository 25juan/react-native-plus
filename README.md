# react-native-plus

## 安装

`npm install react-native-plus --save`

### 自动link

`$ react-native link react-native-plus`

## 用法
```javascript
import Plus from 'react-native-plus';
import { Platform,Button, StyleSheet, Text, View } from 'react-native';
import Plus,{ Portal,Component } from 'react-native-plus';
import React  from 'react';
//  在你的根组件中用 Portal组件, 如果是继承了 react-native-plus 的component 则可以直接使用this.方法 来代替Plus.方法
export class App extends Component {
  render(){
    return (
          <View>
              <Portal/>
          </View>)
  }
}


// Toast组件
Plus.showToast('hello toast') // or
Plus.showToast({ title:"hello",duration: Plus.Toast.DURATION.LONG,position: Plus.Toast.POSITION.CENTER })

// Loading组件
Plus.showLoading('数据加载中...'); // or
Plus.Loading.setIndicatorProps({ // 设置loading的颜色
  color:'#f50', 
  size:'large' 
});
Plus.showLoading({
  title:'数据加载中...',
  theme: Plus.Loading.THEME.THEME3
}); // 使用主题三

// actionsheet
Plus.showActionSheet({
  title:'请选择',
  message:'请选择一种水果',
  itemList: ['香蕉','梨子','关闭'],
  success(tapIndex) { // 点击之后的回调函数，数组的下标
    console.log(tapIndex)
  }
});
```
