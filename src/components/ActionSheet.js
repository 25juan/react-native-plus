import React from "react" ;
import ASheet from 'react-native-actionsheet'
const actionSheet = React.createRef() ;
export default class ActionSheet extends React.Component{
  state = {
    title: '',
    itemList:[],
    cancelButtonIndex:0,
    destructiveButtonIndex: null,
    tintColor:'#1890ff',
    message:'',
    success(tapIndex){}
  };
  show = (option = {}) =>{
    let state = {
      cancelButtonIndex:option.itemList.length-1,
      destructiveButtonIndex: null
    };
    if(typeof option === 'string'){
      state.title = option ;
    }else {
      state = {
        ...state ,
        ...option
      }
    }
    this.setState({ ...state },() => {
      actionSheet.current.show();
    });
  };
  render() {
    return  <ASheet   title={this.state.title}
                      options={this.state.itemList}
                      cancelButtonIndex={this.state.cancelButtonIndex}
                      destructiveButtonIndex={this.state.destructiveButtonIndex}
                      ref={actionSheet}
                      tintColor={this.state.tintColor}
                      message={this.state.message}
                      onPress={this.state.success}/>
  }
}
