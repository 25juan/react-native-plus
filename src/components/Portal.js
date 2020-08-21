import React,{ useEffect,createRef } from "react" ;
import Toast from "./Toast";
import Loading from "./Loading" ;
import ActionSheet from "./ActionSheet";
import Alert from "./Alert";
import ShareCard from "./ShareCard";

export let toast = null;
export let loading = null;
export let actionSheet = null ;
export let alert = null ;
export let shareCard = null ;
const _toast = createRef();
const _loading = createRef();
const _actionSheet = createRef() ;
const _alert = createRef() ;
const _shareCard = createRef() ;
/**
 * 此处不能用函数式组件，用了函数式组件可能造成渲染问题
 */
export default class extends React.Component{
  componentDidMount() {
    toast = _toast.current ;
    loading = _loading.current ;
    actionSheet = _actionSheet.current ;
    alert = _alert.current ;
    shareCard = _shareCard.current ;
  }

  render() {
    const props = this.props ;
    return (
      <>
        <Toast ref={_toast}/>
        <Loading customActivityIndicator={props.customActivityIndicator || null} ref={_loading}/>
        <ActionSheet ref={_actionSheet}/>
        <Alert ref={_alert}/>
        <ShareCard ref={_shareCard}/>
        {props.children}
      </>
    )
  }
}
