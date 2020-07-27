import React from 'react';
import Toast, {positions, durations} from './Toast';
import createPortal from "../../createPortal";

export default class ToastPortal {

  static positions = positions;
  static durations = durations;
  static toast = createPortal(Toast);
  static timer = null ;
  static show = (message, options = {position: positions.BOTTOM, duration: durations.SHORT}) => {
    // 清除定时器
    if(ToastPortal.timer){
      clearTimeout(ToastPortal.timer);
    }
    const handle = ToastPortal.toast.update({ ...options,children:message, visible:true });
    // toast自动关闭
    ToastPortal.timer = setTimeout(() =>{
      ToastPortal.hide()
    },options.duration);
    return handle;
  };
  static hide = () => {
    return ToastPortal.toast.update({ visible:false });
  };
};
