import React from "react" ;
import {View, Text, StyleSheet, Animated, Dimensions,} from "react-native" ;

/**
 *
 * @param {Object} props toast的属性
 * @param {string} props.maskStyle 遮罩层的样式
 * @param {number} props.boxStyle toast盒子的样式
 * @param {number} props.textStyle 显示的文本的样式
 * @param {function} props.visible 控制toast的显示
 * @returns {*}
 */
export default class Toast extends React.Component {
  static  POSITION = {
    TOP: 50,
    CENTER: 0,
    BOTTOM: -50
  };
  static DURATION = {
    LONG: 5000,
    SHORT: 3500
  };
  state = {
    visible: false,
    title: '',
    position: Toast.POSITION.TOP
  };
  constructor(props) {
    super(props);
    this.animateValue = new Animated.Value(0);
  }

  get maskStyle() {
    if (this.state.position > 0) {
      return {top: this.state.position}
    } else if (this.state.position == 0) {
      return {top: Dimensions.get('window').height / 2 - 30} // 大概居中，并不是真正意义上的居中
    } else if (this.state.position < 0) {
      return {bottom: Math.abs(this.state.position)}
    }
  }
  timer = null ;
  show = (option = {}) =>{
    let state = {
      position: Toast.POSITION.TOP
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
    this.setState({ ...state,visible:true },() => {
      Animated.timing(this.animateValue, {
        toValue: 1,
        duration: 300
      },{ useNativeDriver:false }).start();
    });
    this.timer = setTimeout(() => {
      this.hide()
    },state.duration || Toast.DURATION.SHORT);
  };

  hide = () => {
    let state = {
      visible:false,
      title: '',
    };
    if(this.timer){
      clearTimeout(this.timer) ;
    }
    Animated.timing(this.animateValue, {
      toValue: 0,
      duration: 300
    },{ useNativeDriver:false }).start(() => {
      this.setState({ ...state });
    });
  };

  render() {
    const props = this.props;
    if(!this.state.visible){
      return null ;
    }
    return (
      <View style={[Styles.maskBox, this.maskStyle]}>
        <Animated.View style={[Styles.box, props.boxStyle,{ opacity: this.animateValue }]}>
          <Text style={[Styles.text, props.textStyle]}>{this.state.title}</Text>
        </Animated.View>
      </View>)
  }

}
const Styles = StyleSheet.create({
  maskBox: {
    backgroundColor: 'transparent',
    zIndex: 99,
    position: 'absolute',
    left: 0,
    right: 0,
    flexDirection: 'column',
    alignItems: 'center',
  },
  box: {
    backgroundColor: "rgba(0,0,0,0.8)",
    borderRadius: 4,
  },
  text: {
    color: "#fff",
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 11
  }
});
