import React,{ useEffect,createRef } from "react" ;
import Toast from "./Toast";
export let toast = null;
export default () => {
  const _toast = createRef();
  useEffect(() => {
    toast = _toast.current ;
  },[]);
  return (
    <>
      <Toast ref={_toast}/>
    </>
  )
}
