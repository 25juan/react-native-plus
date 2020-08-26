import React, {Component} from "react" ;
import {Modal, ScrollView,Image, View,Vibration, Text,TextInput,StatusBar, FlatList,TouchableOpacity,StyleSheet, SafeAreaView} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
let STORAGE_KEY = "SEARCH_KEYWORLD" ;
export default class extends Component {
    state = {
        visible:false,
        tags: [] ,
        tag: ''
    };

    constructor(props) {
        super(props);
    }
    show = (state = { success : (text)=>{} }) => {
        this.success = state.success ;
        this.getTags()
        this.toggleModal();
    };


    toggleModal = (callback) => {
        let visible = !this.state.visible;
        this.setState({ visible }, callback);
    };

    cacheTag = (tags) => {
        this.setState({ tags }) ;
        return AsyncStorage.setItem(STORAGE_KEY,JSON.stringify(tags));
    };

    getTags = () => {
        return AsyncStorage.getItem(STORAGE_KEY).then(data => {
            if(data){
                return JSON.parse(data) ;
            }
            return [];
        }).then(tags => {
            console.log(tags)
            this.setState({ tags })
        })
    }

    delAllTags = () => {
        const tags = [] ;
        this.setState({ tags })
        this.cacheTag(tags);
    };
    onSearch = (item) => {
        let tags = this.state.tags ;
        tags = Array.from(new Set([ item,...tags ])) ;
        if(item){
            this.cacheTag(tags);
        }
        this.toggleModal();
        this.setState({ tag: '' }) ;
        typeof this.success === 'function' && this.success(item);
    };

    delTag = (idx) => {
        let tags = this.state.tags ;
        tags.splice(idx, 1) ;
        this.cacheTag(tags) ;
        Vibration.vibrate([100,200]);
    }

    renderTags = () => {
        return this.state.tags.map((item,index) =>(
            <TouchableOpacity onLongPress={() => this.delTag(index)} key={item} style={Styles.tagStyle} onPress={()=>this.onSearch(item)}>
                <Text style={Styles.tagTextStyle}>{ item }</Text>
            </TouchableOpacity>
        ))
    }

    render() {
        return (
            <Modal
                transparent={false}
                animated={true}
                onRequestClose={() => this.toggleModal()}
                animationType={'fade'}
                visible={this.state.visible}>
                <SafeAreaView style={[Styles.flex ]}>
                    <View style={[Styles.header ]}>
                        <TouchableOpacity onPress={()=>this.toggleModal()} style={Styles.button}>
                            <Image tintColor={"#aaa"} resizeMode={'contain'} source={require('./icons/arrow-left.png')} style={Styles.icon}/>
                        </TouchableOpacity>
                        <TextInput onChangeText={tag => this.setState({ tag })} value={this.state.tag} style={[Styles.textInput, Styles.flex]}/>
                        <TouchableOpacity onPress={()=>this.onSearch(this.state.tag)} style={Styles.button}>
                            <Text style={Styles.descTextStyle}>检索</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.historyContainer}>
                        <Text style={Styles.historyText}>搜索历史</Text>
                        <TouchableOpacity onPress={this.delAllTags} style={Styles.iconContainerStyle}>
                            <Image tintColor={"#aaa"} resizeMode={'contain'} source={require('./icons/trash.png')} style={Styles.icon,Styles.delIcon}/>
                        </TouchableOpacity>
                    </View>
                    <View style={[Styles.historyContainer,{ paddingTop:0 }]}>
                        <Text style={[Styles.infoTextStyle,{ fontSize: 12 }]}>长按选项进行删除</Text>
                    </View>
                    <View style={Styles.tagContainerStyle}>
                        { this.renderTags() }
                    </View>
                </SafeAreaView>
            </Modal>
        )
    }
};
const Styles = {
    greyBGColor:{
      backgroundColor:"rgb(240,240,240)",
    },
    icon: {
      height: 26,width: 26,
      resizeMode:'contain',
        tintColor:"#333"
    },
    button: {
        height:50,
        width:50,
        alignItems:'center',
        justifyContent:'center',
    },
    textInput:{
        height:34,
        borderRadius: 4,
        fontSize:14,
        borderWidth:StyleSheet.hairlineWidth,
        borderColor:"#ccc",
        paddingVertical:0,
        paddingHorizontal: 8
    },
    header:{
      height:50,
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#ccc'
    },
    flex:{
      flex:1
    },
    headerTitle:{
      fontSize: 18,
        fontWeight: 'bold',
        textAlign:'center',
        flex:1
    },

    infoTextStyle:{
        color:"#aaa",
        fontSize:14
    },
    tagContainerStyle: {
      flexDirection: 'row',
        flexWrap:'wrap',
        paddingHorizontal:16,
        paddingBottom:16,
        paddingTop:0
    },
    tagStyle: {
        height:18,
        paddingHorizontal: 4,
        backgroundColor: '#dedede',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 4,
        marginRight:8,
        marginTop:8
    },
    tagTextStyle: {
        fontSize:12,
        color:"#999"
    },
    historyContainer:{
      paddingHorizontal:16,
      paddingVertical: 8,
        paddingBottom: 0,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    historyText: {
        fontSize:14,
        fontWeight: 'bold',
        color:"#333"
    },
    iconContainerStyle: {
        paddingLeft:16,
    },
    delIcon: {
        height: 16,
        width: 16,

    }
};
