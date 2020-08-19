import React, {Component} from "react" ;
import {FlatList as RNFlatList, View, Text,Image} from "react-native" ;
import PropTypes from "prop-types" ;

const defaultPagination = { page_index:0, page_size:10, over:false, start:0, length:10 };

export class FlatList extends Component {
    static propTypes = {
        onRefresh: PropTypes.func,
        onLoadMore: PropTypes.func,
    };

    static defaultProps = {

        onRefresh() {
        },

        onLoadMore() {

        }

    };
    state = {
        refreshing: false,
        loading: false,
        empty:false,
        data:[]
    };

    pagination = { ...defaultPagination } ;


    componentDidMount(){
        this.onRefresh();
    }

    /**
     * 当列表数据刷新完成之后的回调函数
     */
    setRefreshing = (refreshing = false,callback) => {
        this.setState({refreshing},callback);
    };
    /**
     * 当载入更多的时候的数据完成之后的回调函数
     */
    setLoading = (loading = false) => {
        this.setState({loading: !!loading});
    };
    /**
     *下拉刷新功能
     */
    onRefresh = () => {
        let { onRefresh } = this.props;

        // RNDialog.Loading.show();
        this.pagination = { ...defaultPagination };
        if(typeof onRefresh !== "function" || this.state.refreshing){
            return ;
        }
        this.setRefreshing(true);
        let promise = onRefresh(this.pagination);
        if( promise && promise.then && typeof  promise.then === 'function'){ // 重新刷新
            promise.then(data=>{
                let empty = false ;
                // RNDialog.Loading.hide({},true);
                if( data.length<this.pagination.page_size ){ // 当刷新返回的数据小于page size 的时候则不进行触发加载更多的方法
                    this.pagination.over = true ;
                }
                if(!data.length){
                    empty = true ;
                }
                this.setState({ data,empty }) ;
                this.setRefreshing(false);
            }).catch(()=>{
                this.setRefreshing(false);
                // RNDialog.Loading.hide();
            });
        }
    };
    /**
     * 加载更多功能
     */
    onEndReached = () => {
        let pagination = this.pagination ;
        if(pagination.over || this.state.loading){
            return ;
        }
        let {onLoadMore} = this.props;
        this.setLoading(true);
        pagination.page_index = pagination.page_index + 1 ;
        pagination.start = pagination.page_index *pagination.page_size ;
        pagination.length = pagination.page_size;
        let promise = onLoadMore(pagination);
        if( promise && promise.then && typeof  promise.then === 'function'){
            promise.then(data=>{
                if( data.length<this.pagination.page_size ){ // 当刷新返回的数据小于page size 的时候则不进行触发加载更多的方法
                    this.pagination.over = true ;
                }
                this.setState({ loading:false,data:[ ...this.state.data, ...data ] }) ;
            });
        }
    };
    /**
     * 渲染底部
     * @returns {null}
     */
    renderFooter = () => {
        let {loading} = this.state;
        if(!loading){
            return null ;
        }
        let text = "加载中...";
        return <View style={{paddingVertical: 8}}><Text style={styles.footerTextStyle}>{text}</Text></View>
    };
    /**
     * 渲染空数据
     * @returns {null}
     */
    renderEmpty = () => {
        if(!this.state.empty){
            return null;
        }
        let text = "暂无数据";
        return (
            <View style={styles.emptyStyle.containerStyle}>
                <Image style={styles.emptyStyle.imgStyle} source={require("./icon/empty.png")}/>
                <Text style={styles.emptyStyle.textStyle}>{text}</Text>
            </View>
        );
    };

    render() {
        let {
            onRefresh,
            ...props
        } = this.props;
        let contentStyle = this.state.data.length ? {} : styles.contentStyle;
        return <RNFlatList
            contentContainerStyle={contentStyle}
            keyExtractor={(item, index) => `${index}`}
            initialNumToRender={8}
            ListEmptyComponent={this.renderEmpty()}
            ListFooterComponent={this.renderFooter()}
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={0.3}
            {...props} data={this.state.data}/>
    }
}
const styles = {
    footerTextStyle: {
        color: "#999999",
        textAlign: "center",
        fontSize: 14
    },
    contentStyle: {
        flex: 1
    },
    emptyStyle: {
        containerStyle: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingTop:16
        },
        textStyle: {
            color: "#999999",
            fontSize: 14
        },
        imgStyle:{
            marginBottom:16,
            height:100,
            width:100
        }
    }
};

export default FlatList ;
