import React, {Component} from "react" ;
import {Modal, Share, View, Text,Image, CameraRoll, Dimensions,Platform,TouchableOpacity, StatusBar} from "react-native";
import ImageViewer from 'react-native-image-zoom-viewer';
import { Button } from 'react-native-elements';

let width = Dimensions.get('window').width ;
let height = Dimensions.get('window').height ;

export default class extends Component {
    state = {
        visible: false,
        config:{
            images:[],
            index:0
        }
    };

    show = (config,cb)=>{
        if(Platform.OS === 'android'){
            StatusBar.setBackgroundColor('rgb(0,0,0)');
        }
        this.state.config.images = config.images.map(item=>{
            if (typeof item === "number"){
                return {
                    url:'',
                    props:{ source:item,style:{ width:width,height:300 } }
                }  ;
            }else{
                return {
                    url:item,
                    props:{ style:{ width:width,height:300 } }
                }  ;
            }

        });
        this.state.config.index = config.index || 0 ;
        this.toggleModal();
        this.closeBack = cb ;
    };


    toggleModal = (callback) => {
        this.state.visible = !this.state.visible;
        this.setState(this.state,callback);
        if(!this.state.visible && Platform.OS === 'android'){
            StatusBar.setBackgroundColor(window.Colors.headerBackgroundColor);
        }
    };
    saveLocal = ()=>{
        let imgs = this.state.config.images[this.state.config.index] ;
        let url = imgs.url?imgs.url:imgs.props.source.uri ;
        if(url){
            window.download(url);
        }
    };

    render() {
        return (
            <Modal
                transparent={false}
                animated={true}
                onRequestClose={()=>this.toggleModal()}
                animationType={'fade'}
                visible={this.state.visible}>
                <View style={{ flex:1,backgroundColor:'#000' }}>
                    {/*<TouchableOpacity onPress={ ()=>this.toggleModal(this.closeBack) }*/}
                    {/*                  activeOpacity={0.8}*/}
                    {/*                  style={Style.btnLeftContainerStyle}>*/}
                    {/*    <Image style={Style.btnIconStyle} source={require('./icons/arrow-left.png')}/>*/}
                    {/*</TouchableOpacity>*/}

                    {/*<Button type={"clear"}*/}
                    {/*        onPress={ ()=>this.saveLocal() }*/}
                    {/*        containerStyle={Style.btnRightContainerStyle}*/}
                    {/*        icon={{size:26, type:"ionicon",color:'#fff',name:'md-download'}} />*/}
                    <ImageViewer index={this.state.config.index}
                                 enableSwipeDown={true}
                                 saveToLocalByLongPress={false}
                                 onCancel={ ()=>this.toggleModal() }
                                 onChange={index=>{
                                     this.state.config.index = index ;
                                     this.setState(this.state);
                                 }}
                                 imageUrls={this.state.config.images}/>
                </View>
            </Modal>
        )
    }
};
const Style = {
    btnLeftContainerStyle:{
        position:'absolute',
        left:0,
        top:50,
        zIndex:999,
        paddingVertical:16,
        paddingHorizontal:16,
    },
    btnRightContainerStyle:{
        position:'absolute',
        right:0,
        top:30,
        paddingVertical:16,
        paddingHorizontal:16,
        zIndex:999
    },
    btnIconStyle: {
        height:16,
        width:16,
        resizeMode:'contain'
    }
};
