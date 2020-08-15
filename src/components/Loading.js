import React from "react" ;
import {View, Text, StyleSheet, ActivityIndicator, Modal,} from "react-native" ;

let indicatorProps = null ;
/**
 *
 * @returns {*}
 */
export default class Loading extends React.Component {
  static THEME = {
    THEME1:'normal',
    THEME2: 'box' ,
    THEME3: 'square' ,
  };
  static setIndicatorProps(props) {
    indicatorProps = props ;
  }
  state = {
    visible: false,
    title: '',
    theme: Loading.THEME.THEME1
  };
  timer = null ;
  show = (option = {}) =>{
    let state = {
      theme: Loading.THEME.THEME1
    };
    if(typeof option === 'string'){
      state.title = option ;
    }else {
      state = {
        ...state ,
        ...option
      }
    }

    if(this.state.visible){
      this.timer && clearTimeout(this.timer) ;
    }
    this.setState({ ...state,visible:true });
  };

  hide = () => {
    let state = {
      visible:false,
      title: '',
    };
    this.setState({ ...state });
  };

  render() {
    const theme = themes[this.state.theme] ;
    const indicator = indicatorProps ||  theme.indicatorProps || {} ;
    return (
      <Modal visible={this.state.visible} animationType={"fade"} transparent>
        <View style={[theme.maskBox]}>
          <View style={[theme.box]}>
            <ActivityIndicator  { ...indicator }/>
            <Text style={[theme.text]}>{this.state.title}</Text>
          </View>
        </View>
      </Modal>)
  }
}
const themes = {
  normal: {
    indicatorProps: {
      color:'#1890ff',
      size: 'small'
    },
    maskBox: {
      flex:1,
      backgroundColor:'rgba(0,0,0,0.2)',
      flexDirection: 'row',
      justifyContent:'center',
      alignItems: 'center',
    },
    box: {
      backgroundColor: "#fff",
      width:"90%",
      borderRadius: 4,
      flexDirection: 'row',
      alignItems:"center",
      paddingHorizontal:16,
      paddingVertical:8,
    },
    text: {
      color: "#666",
      paddingTop: 3,
      paddingBottom: 3,
      paddingLeft: 5,
      paddingRight: 5,
      fontSize: 14
    }
  },
  box: {
    indicatorProps: {
      color:'#fff',
      size: 'small'
    },
    maskBox: {
      flex:1,
      backgroundColor:'transparent',
      flexDirection: 'row',
      justifyContent:'center',
      alignItems: 'center',
      maxWidth: '90%'
    },
    box: {
      backgroundColor: "rgba(0,0,0,0.8)",
      borderRadius: 4,
      flexDirection: 'row',
      alignItems:"center",
      paddingHorizontal:16,
      paddingVertical:8,
    },
    text: {
      color: "#fff",
      paddingTop: 3,
      paddingBottom: 3,
      paddingLeft: 5,
      paddingRight: 5,
      fontSize: 14
    }
  },
  square: {
    indicatorProps: {
      color:'#fff',
      size: 'large'
    },
    maskBox: {
      flex:1,
      backgroundColor:'transparent',
      flexDirection: 'column',
      justifyContent:'center',
      alignItems: 'center',
    },
    box: {
      backgroundColor: "rgba(0,0,0,0.8)",
      borderRadius: 4,
      flexDirection: 'column',
      alignItems:'center',
      justifyContent:'center',
      minWidth: 100,
      minHeight:100,
      paddingHorizontal:16,
      paddingVertical:8,
    },
    text: {
      color: "#fff",
      paddingTop: 3,
      paddingBottom: 3,
      paddingLeft: 5,
      paddingRight: 5,
      fontSize: 14
    }
  }
};

