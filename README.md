# react-native-plus

## 安装

`npm install react-native-plus --save`

### 自动link

`$ react-native link react-native-plus`

## 用法
```javascript
import Plus from 'react-native-plus';
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
```
