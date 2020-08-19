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
export default (props) => {
  const _toast = createRef();
  const _loading = createRef();
  const _actionSheet = createRef() ;
  const _alert = createRef() ;
  const _shareCard = createRef() ;
  useEffect(() => {
    toast = _toast.current ;
    loading = _loading.current ;
    actionSheet = _actionSheet.current ;
    alert = _alert.current ;
    shareCard = _shareCard.current ;
  },[]);
  return (
    <>
      <Toast ref={_toast}/>
      <Loading customActivityIndicator={props.customActivityIndicator || null} ref={_loading}/>
      <ActionSheet ref={_actionSheet}/>
      <Alert ref={_alert}/>
      <ShareCard ref={_shareCard}/>
    </>
  )
}
