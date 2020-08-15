import React,{ useEffect,createRef } from "react" ;
import Toast from "./Toast";
import Loading from "./Loading" ;
export let toast = null;
export let loading = null;
export default () => {
  const _toast = createRef();
  const _loading = createRef();
  useEffect(() => {
    toast = _toast.current ;
    loading = _loading.current ;
  },[]);
  return (
    <>
      <Toast ref={_toast}/>
      <Loading ref={_loading}/>
    </>
  )
}
