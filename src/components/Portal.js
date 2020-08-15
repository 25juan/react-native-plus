import React,{ useEffect,createRef } from "react" ;
import Toast from "./Toast";
import Loading from "./Loading" ;
import ActionSheet from "./ActionSheet";
import Alert from "./Alert";
export let toast = null;
export let loading = null;
export let actionSheet = null ;
export let alert = null ;
export default () => {
  const _toast = createRef();
  const _loading = createRef();
  const _actionSheet = createRef() ;
  const _alert = createRef() ;
  useEffect(() => {
    toast = _toast.current ;
    loading = _loading.current ;
    actionSheet = _actionSheet.current ;
    alert = _alert.current ;
  },[]);
  return (
    <>
      <Toast ref={_toast}/>
      <Loading ref={_loading}/>
      <ActionSheet ref={_actionSheet}/>
      <Alert ref={_alert}/>
    </>
  )
}
