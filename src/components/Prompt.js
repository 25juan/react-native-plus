import React, { Component } from "react";
import { Text, View, Animated, Modal,StyleSheet,TouchableOpacity,TextInput } from "react-native";

const SUPPORTED_ORIENTATIONS = [
  "portrait",
  "portrait-upside-down",
  "landscape",
  "landscape-left",
  "landscape-right"
];

class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,

      customStyles: {},
      title: "消息",
      message: "Do you want to continue?",
      showCancel: true,
      showConfirm: true,
      textCancel: "关闭",
      textConfirm: "确认",
      closeOnPressMask: false,
      closeOnPressBack: false,
      useNativeDriver: false,
      text: '',
      inputProps:{},
      placeholder: '',
      onCancel: null,
      onConfirm: null,
      onClose: null
    };
    this.springValue = new Animated.Value(0);

    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
    this.open = this.show.bind(this);
    this.close = this.hide.bind(this);
  }

  onCancel() {
    const { onCancel } = this.state;
    this.hide();
    if (typeof onCancel === "function") {
      onCancel();
    };
  }

  onConfirm() {
    const { onConfirm,text } = this.state;
    this.hide();
    if (typeof onConfirm === "function") onConfirm(text);
  }

  show(option) {
    const { useNativeDriver } = this.state;
    this.setState({ ...option, visible: true }, () => {
      Animated.spring(this.springValue, {
        toValue: 1,
        speed: 35,
        bounciness: 7,
        velocity: 15,
        useNativeDriver
      }).start();
    });
  }

  hide() {
    const { onClose } = this.props;
    this.setState({ visible: false }, () => {
      this.springValue.setValue(0);
      if (typeof onClose === "function") onClose();
    });
  }

  render() {
    const {
      title,
      showCancel,
      showConfirm,
      textCancel,
      textConfirm,
      customStyles,
      closeOnPressMask,
      closeOnPressBack
    } = this.state;
    const { style = {},...inputProps } = this.state.inputProps ;
    const { visible } = this.state;

    return (
      <Modal
        visible={visible}
        transparent
        animationType="none"
        supportedOrientations={SUPPORTED_ORIENTATIONS}
        onRequestClose={closeOnPressBack ? this.close : null}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={closeOnPressMask ? this.close : null}
          style={[styles.background, customStyles.mask]}
        >
          <Animated.View
            style={[
              styles.container,
              {
                transform: [{ scale: this.springValue }]
              },
              customStyles.container
            ]}
          >
            <TouchableOpacity activeOpacity={1}>
              <View style={styles.content}>
                <Text style={[styles.title, customStyles.title]}>{title}</Text>
                <View style={styles.inputBox}>
                  <TextInput
                    placeholder={this.state.placeholder}
                    style={[styles.textInput,style]}
                    { ...inputProps }
                    onChangeText={text => this.setState({ text})}
                    value={this.state.text}/>
                </View>
              </View>

              <View style={styles.buttonContainer}>
                {showCancel ? (
                  <TouchableOpacity
                    testID="buttonCancel"
                    onPress={this.onCancel}
                    style={[styles.button, styles.buttonCancel, customStyles.buttonCancel]}
                  >
                    <Text style={[styles.textButton,styles.textCancelButton, customStyles.textCancel]}>{textCancel}</Text>
                  </TouchableOpacity>
                ) : null}
                {showConfirm ? (
                  <TouchableOpacity
                    testID="buttonConfirm"
                    onPress={this.onConfirm}
                    style={[styles.button, customStyles.buttonConfirm]}
                  >
                    <Text style={[styles.textButton,styles.textConfirmButton, customStyles.textConfirm]}>{textConfirm}</Text>
                  </TouchableOpacity>
                ) : null}
              </View>
            </TouchableOpacity>
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  inputBox: {
    paddingVertical:16,
    paddingHorizontal:16
  },
  textInput:{
    height:34,
    borderRadius: 4,
    fontSize:14,
    borderWidth:StyleSheet.hairlineWidth,
    paddingVertical:0,
    borderColor:"#ccc",
    color:"#333",
    paddingHorizontal: 8
  },
  background: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    backgroundColor: "#FFF",
    minWidth: 300,
    marginHorizontal: 30,
    borderRadius: 5
  },
  content: {
    justifyContent: "center",
    paddingTop: 16
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
  message: {
    textAlign: "center",
    fontSize: 17,
    color: "#666",
    paddingVertical: 16
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems:'center',
  },
  button: {
    alignItems: "center",
    paddingVertical: 8,
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: 'rgb(240,240,240)'
  },
  buttonCancel: {
    borderRightWidth: 1,
    borderRightColor: 'rgb(240,240,240)'
  },
  textButton: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "600"
  },
  textCancelButton:{
    color: '#F53D3D'
  },
  textConfirmButton:{
    color:"#333",
    fontWeight:'bold'
  }
});
export default Alert;
