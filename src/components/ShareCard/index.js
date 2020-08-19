import React, {Component} from "react" ;
import {Modal, Image, View, Text, TouchableOpacity, Platform} from "react-native";
export const textLargeSize = 16 ;
export const descTextSize = 14 ;
export const infoTextSize = 12 ;
const defaultList = ['qq',"wechat","qqzone","wechatzone","sina","more"] ;
export default class extends Component {
    state = {
        visible: false,
        shareList:defaultList
    };

    onItemPress = (type) => {
        typeof this.success === "function" && this.success(type);
        this.hide()
    };

    show = (option = {}) => {
        const state = {
            shareList : defaultList ,
            ...option
        };
        this.success = option.success || function(item){}
        this.setState({ ...state,visible:true })
    };

    hide = () => {
        this.setState({
            visible: false,
            shareList:defaultList
        });
    };

    render() {
        return (
            <Modal
                transparent={true}
                animated={true}
                onRequestClose={()=>this.hide()}
                animationType={'fade'}
                visible={this.state.visible}>
                <TouchableOpacity onPress={()=>this.hide()} activeOpacity={1} style={Style.containerStyle}>
                    <View style={Style.contentStyle}>
                        <View style={Style.titleContainerStyle}>
                            <Text style={Style.titleStyle}>分享</Text>
                        </View>
                        <View style={Style.rowStyle}>
                            <TouchableOpacity onPress={() => this.onItemPress('qq')} style={Style.itemStyle}>
                                <Image source={require("./icons/QQ.png")} style={Style.iconStyle}/>
                                <Text style={Style.itemTextStyle}>QQ</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.onItemPress('qzone')} style={Style.itemStyle}>
                                <Image source={require("./icons/qqzone.png")} style={Style.iconStyle}/>
                                <Text style={Style.itemTextStyle}>QQ空间</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.onItemPress('wechat_session')}
                                              style={Style.itemStyle}>
                                <Image source={require("./icons/wechat.png")} style={Style.iconStyle}/>
                                <Text style={Style.itemTextStyle}>微信</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={Style.rowStyle}>
                            <TouchableOpacity onPress={() => this.onItemPress('wechat_timeLine')}
                                              style={Style.itemStyle}>
                                <Image source={require("./icons/friendzone.png")} style={Style.iconStyle}/>
                                <Text style={Style.itemTextStyle}>朋友圈</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.onItemPress('sina_weibo')}  style={Style.itemStyle}>
                                <Image source={require("./icons/sina.png")} style={Style.iconStyle}/>
                                <Text style={Style.itemTextStyle}>微博</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.onItemPress('more')} style={Style.itemStyle}>
                                <Image source={require("./icons/more.png")} style={Style.iconStyle}/>
                                <Text style={Style.itemTextStyle}>更多</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </TouchableOpacity>
            </Modal>
        )
    }
};
const Style = {
    containerStyle: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center'
    },
    contentStyle: {
        backgroundColor: "#fff",
        marginHorizontal: 32,
        marginTop: 32,
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderRadius: 4,
    },
    rowStyle: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    titleStyle: {
        fontSize: textLargeSize,
        color: "#666",
        fontWeight: '700',
    },
    qrCodeContainerStyle: {
        marginTop: 16
    },
    infoStyle: {
        fontSize: infoTextSize,
        color: "#aaa",
        lineHeight: infoTextSize * 1.6,
        paddingVertical: 8
    },
    descStyle: {
        fontSize: descTextSize,
        color: "#aaa",
        fontWeight: '700'
    },
    closeContainerStyle: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    itemStyle: {
        flex: 1,
        paddingVertical: 16,
        alignItems: 'center',
    },
    itemTextStyle: {
        fontSize: descTextSize,
        color: "#666",
        lineHeight: descTextSize * 1.6,
        marginTop: 8
    },
    titleContainerStyle: {
        alignItems: 'center',
        paddingVertical: 10,
    },
    iconStyle:{
        height:30,
        width:30,
        resizeMode:'contain'
    }
};
