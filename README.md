# react-native-plus
扩展日常开发所需要的API,列入弹框，loading，ActionSheet等等。
## 安装

`npm install react-native-aplus --save`

### 自动link

`$ react-native link react-native-aplus`

## 用法
```javascript
import { Platform,Button, StyleSheet, Text, View } from 'react-native';
import Plus,{ Portal,Component } from 'react-native-aplus';
import React  from 'react';
//  在你的根组件中用 Portal组件, 如果是继承了 react-native-aplus 的component 则可以直接使用this.方法 来代替Plus.方法
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

// 弹框
Plus.showModal({
  title:"消息",
  message:'hello world',
  showCancel: true,
  showConfirm: true,
  textCancel: "关闭",
  textConfirm: "确认",
  onConfirm(){
    Plus.hideModal()
  }
});
```
### TODO
1. loading **(完成)**
1. toast **(完成)**
1. 对话框 **(完成)**
1. ActionSheet **(完成)**
1. FlatList **(完成)**
1. ShareCard面板 **(完成)**
1. 图片选择
1. 图片预览
1. 多列选择
1. 三方登录
1. 三方支付...
