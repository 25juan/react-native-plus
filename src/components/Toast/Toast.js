import React from "react" ;
import {View, Text, StyleSheet, Animated, Dimensions,} from "react-native" ;
import Component from "../Component";
import PropTypes from "prop-types";

/**
 *
 * @param {Object} props toast的属性
 * @param {string} props.maskStyle 遮罩层的样式
 * @param {number} props.boxStyle toast盒子的样式
 * @param {number} props.textStyle 显示的文本的样式
 * @param {function} props.visible 控制toast的显示
 * @returns {*}
 */
export default class Toast extends Component {
  static POSITION = {
    TOP: 50,
    CENTER: 0,
    BOTTOM: -50
  };
  static DURATION = {
    LONG: 3500,
    SHORT: 2000
  } ;

  static propTypes = {
    visible: PropTypes.bool,
    mask: PropTypes.bool,
    position: PropTypes.number,
    duration: PropTypes.number,
  };
  static defaultProps = {
    visible: false,
    mask: true,
    position: Toast.POSITION.TOP,
    duration: Toast.DURATION.SHORT
  }

  constructor(props) {
    super(props)
    // this.state = {
    //   opacity: new Animated.Value(0),
    //   visible: props.visible,
    //   mask: props.mask
    // }
  }
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if(this.state.visible){
  //     this._show()
  //   }else {
  //     this._hide()
  //   }
  // }

  // _show() {
  //   if(this.timer) {
  //     clearTimeout(this.timer) ;
  //     this._hide(this._show)
  //     return ;
  //   }
  //   Animated.timing(this.state.opacity, {
  //     toValue: 1,
  //     duration: 500
  //   }).start(({finished}) => {
  //     if (finished) {
  //       this.setState({visible: true, opacity: new Animated.Value(1)})
  //       this.timer = setTimeout(this._hide,this.props.duration)
  //     }
  //   });
  // }

  // _hide = (callback) => {
  //   Animated.timing(this.state.opacity, {
  //     toValue: 0,
  //     duration: 500
  //   }).start(({finished}) => {
  //     if (finished) {
  //       this.setState({visible: false, opacity: new Animated.Value(0)},callback)
  //     }
  //   });
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.visible !== prevState.visible) {
  //     return {visible: nextProps.visible, mask: nextProps.mask}
  //   }
  //   return null
  // }

  get maskStyle() {
    if (this.props.position > 0) {
      return {top: this.props.position}
    } else if (this.props.position == 0) {
      return {top: Dimensions.get('window').height / 2 - 30} // 大概居中，并不是真正意义上的居中
    } else if (this.props.position < 0) {
      return {bottom: Math.abs(this.props.position)}
    }
  }

  get noMaskBox() {
    if (this.props.position > 0) {
      return {paddingTop: this.props.position}
    } else if (this.props.position == 0) {
      return {justifyContent: "center",} // 大概居中，并不是真正意义上的居中
    } else if (this.props.position < 0) {
      return {justifyContent: "flex-end", paddingBottom: Math.abs(this.props.position)}
    }
  }

  render() {
    const props = this.props;
    const maskStyle = props.mask ? [Styles.maskBox, this.noMaskBox, props.maskStyle] : [Styles.noMaskBox, this.maskStyle,{ bottom: 0 }] ;
    if(!this.props.visible){
      return null ;
    }
    return (
      <View style={maskStyle}>
        <Animated.View style={[Styles.box, props.boxStyle, { opacity:1 }]}>
          <Text style={[Styles.text, props.textStyle]}>hello world</Text>
        </Animated.View>
      </View>)
  }

}
const Styles = StyleSheet.create({
  maskBox: {
    backgroundColor: 'transparent',
    zIndex: 99,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'column',
    alignItems: 'center',
  },
  noMaskBox: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    width: '100%',
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
