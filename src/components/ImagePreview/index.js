import React, {Component} from "react" ;
import {
    Modal,
    Share,
    View,
    Text,
    Image,
    CameraRoll,
    Dimensions,
    Platform,
    TouchableOpacity,
    StatusBar
} from "react-native";
import ImageViewer from 'react-native-image-zoom-viewer';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default class extends Component {
    state = {
        visible: false,
        config: {
            images: [],
            index: 0,
            rightTitle: '',
            title:'图片预览',
            onRightPress: null
        }
    };

    show = (config, cb) => {
        if (Platform.OS === 'android') {
            StatusBar.setBackgroundColor('rgb(0,0,0)');
        }
        this.state.config.images = config.images.map(item => {
            if (typeof item === "number") {
                return {
                    url: '',
                    props: {source: item, style: {width: width, height: 300}}
                };
            } else {
                return {
                    url: item,
                    props: {style: {width: width, height: 300}}
                };
            }

        });
        this.state.config.index = config.index || 0;
        this.toggleModal();
        this.closeBack = cb;
    };


    toggleModal = (callback) => {
        this.state.visible = !this.state.visible;
        this.setState(this.state, callback);
    };
    saveLocal = () => {
        let imgs = this.state.config.images[this.state.config.index];
        let url = imgs.url ? imgs.url : imgs.props.source.uri;
        // if(url){
        //     window.download(url);
        // }
    };

    onRightPress = () => {
        const onRightPress = this.state.config.onRightPress ;
        typeof onRightPress === 'function' && onRightPress();
    }

    render() {
        return (
            <Modal
                transparent={false}
                animated={true}
                onRequestClose={() => this.toggleModal()}
                animationType={'fade'}
                visible={this.state.visible}>
                <View style={{flex: 1, backgroundColor: '#000'}}>
                    <StatusBar backgroundColor={"#000"} barStyle={'light-content'}/>

                    <ImageViewer index={this.state.config.index}
                                 enableSwipeDown={true}
                                 saveToLocalByLongPress={false}
                                 onCancel={() => this.toggleModal()}
                                 renderHeader={() => {
                                     return (
                                         <View style={Style.headerContainer}>
                                             <TouchableOpacity onPress={() => this.toggleModal(this.closeBack)}
                                                               activeOpacity={0.8}
                                                               style={Style.btnLeftContainerStyle}>
                                                 <Image tintColor={'#fff'} style={Style.btnIconStyle}
                                                        source={require('./icons/arrow-left.png')}/>
                                             </TouchableOpacity>

                                             <Text style={[Style.headerStyle]}>{ this.state.config.title ||'' }</Text>
                                             {
                                                 this.state.config.rightTitle?(
                                                     <TouchableOpacity onPress={this.onRightPress}
                                                                       activeOpacity={0.8}
                                                                       style={Style.btnLeftContainerStyle}>
                                                         <Text style={Style.rightTextStyle}>{ this.state.config.rightTitle }</Text>
                                                     </TouchableOpacity>
                                                 ):(
                                                     <TouchableOpacity activeOpacity={0.8}
                                                                       style={Style.btnLeftContainerStyle}>
                                                         <Text style={Style.rightTextStyle}>{ this.state.config.rightTitle || ' ' }</Text>
                                                     </TouchableOpacity>
                                                 )
                                             }
                                         </View>
                                     )
                                 }}
                                 onChange={index => {
                                     this.state.config.index = index;
                                     this.setState(this.state);
                                 }}
                                 imageUrls={this.state.config.images}/>
                </View>
            </Modal>
        )
    }
};
const Style = {
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnLeftContainerStyle: {
        zIndex: 999,
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    rightTextStyle: {
        fontSize: 16,
        color: "#fff"
    },
    headerStyle: {
        fontSize: 18,
        color: "#fff",
        textAlign: 'center',
        flex: 1,
    },
    btnRightContainerStyle: {
        position: 'absolute',
        right: 0,
        top: 30,
        paddingVertical: 16,
        paddingHorizontal: 16,
        zIndex: 999
    },
    btnIconStyle: {
        height: 16,
        width: 16,
        tintColor: "#fff",
        resizeMode: 'contain'
    }
};
