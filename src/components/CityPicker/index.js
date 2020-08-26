import React, {Component} from "react" ;
import {Modal, ScrollView,Image, View, Text, FlatList,TouchableOpacity,StyleSheet, SafeAreaView} from "react-native";
import cities from "./city" ;

export default class extends Component {
    state = {
        visible:false,
        cities:cities,
        selectCity:0,
        title:'城市选择',
        selectProvince:false // 是否可以选择省
    };

    show = (state = { cities,success : (city)=>{} }) => {
        this.state = { ...this.state,...state };
        this.success = state.success ;
        this.toggleModal();
    };


    toggleModal = (callback) => {
        this.state.visible = !this.state.visible;
        this.setState(this.state, callback);
    };

    onItemPress = (item,hasParent=true) => {
        let parentArea =  null ;
        if(hasParent){
            parentArea =  this.state.cities[this.state.selectCity] ;
        }
        this.toggleModal(()=>{
            typeof this.success === "function" && this.success({ ...item,parent:parentArea });
        });
    };

    onProvincePress = (selectCity)=>{
        this.setState({ selectCity });
    };

    renderItem = ({ item,index })=>{
        let style = index === this.state.selectCity ?Styles.greyBGColor:{};
        return (
            <TouchableOpacity onPress={()=>this.onProvincePress(index)} activeOpacity={0.8} style={[Styles.rowItemContainerStyle,style]}>
                <Text style={Styles.descTextStyle}>{ item.name }</Text>
            </TouchableOpacity>
        )
    };

    get childrenData(){
        return this.state.cities[this.state.selectCity]?.children || [];
    }

    renderChildren = ()=>{
        return this.childrenData.map((item,idx)=>(
            <TouchableOpacity activeOpacity={0.8} onPress={()=>this.onItemPress(item)} style={Styles.itemStyle} key={item.code+idx}>
                <Text style={Styles.infoTextStyle}>{ item.name }</Text>
            </TouchableOpacity>
        ))
    };

    render() {
        return (
            <Modal
                transparent={false}
                animated={true}
                onRequestClose={() => this.toggleModal()}
                animationType={'fade'}
                visible={this.state.visible}>
                <SafeAreaView style={[Styles.flex,Styles.greyBGColor ]}>
                    <View style={Styles.header}>
                        <TouchableOpacity onPress={()=>this.toggleModal()} style={Styles.button}>
                            <Image tintColor={"#aaa"} resizeMode={'contain'} source={require('./icons/arrow-left.png')} style={Styles.icon}/>
                        </TouchableOpacity>
                        <Text style={Styles.headerTitle}>城市选择</Text>
                        <TouchableOpacity style={Styles.button}>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.content}>
                        <View style={{ backgroundColor:'#fff' }}>
                            <FlatList data={this.state.cities}
                                      showsVerticalScrollIndicator={false}
                                      keyExtractor={item=>`${item.code}`}
                                      renderItem={this.renderItem}/>
                        </View>
                        <ScrollView style={[Styles.flex]}>
                            <View style={[Styles.rowCenter,Styles.childrenItemStyle]}>
                                { this.renderChildren() }
                            </View>
                        </ScrollView>
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
    header:{
      height:50,
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor: '#dedede'
    },
    headerTitle:{
      fontSize: 18,
        fontWeight: 'bold',
        textAlign:'center',
        flex:1
    },
    content: {
      flexDirection:'row',
    },
    infoTextStyle:{
        color:"#aaa",
        fontSize:14
    },
    descTextStyle:{
        color:"#aaa",
        fontSize:16
    },
    rowCenter:{
        flexDirection:'row',
        alignItems:'center'
    },
    rowItemContainerStyle:{
        paddingHorizontal:16,
        paddingVertical:12,
        backgroundColor:"#fff",
        alignItems: 'center',
        flexDirection: "row"
    },
    childrenItemStyle:{
        flexDirection:"row",
        flexWrap:'wrap',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:32
    },
    itemStyle:{
        paddingVertical: 12,
        borderRadius:4,
        borderWidth:StyleSheet.hairlineWidth,
        borderColor:'#dedede',
        width:90,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:16,
        backgroundColor:"#fff"
    }
};
