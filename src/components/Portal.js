import React,{ useEffect,createRef } from "react" ;
import Toast from "./Toast";
import Loading from "./Loading" ;
import ActionSheet from "./ActionSheet";
export let toast = null;
export let loading = null;
export let actionSheet = null ;
export default () => {
  const _toast = createRef();
  const _loading = createRef();
  const _actionSheet = createRef() ;
  useEffect(() => {
    toast = _toast.current ;
    loading = _loading.current ;
    actionSheet = _actionSheet.current
  },[]);
  return (
    <>
      <Toast ref={_toast}/>
      <Loading ref={_loading}/>
      <ActionSheet ref={_actionSheet}/>
    </>
  )
}
