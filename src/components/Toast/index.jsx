import React from 'react';
import Toast, {positions, durations} from './Toast';
import createPortal from "../../createPortal";

export default class ToastPortal {

  static positions = positions;
  static durations = durations;
  static toast = createPortal(Toast);

  static show = (message, options = {position: positions.BOTTOM, duration: durations.SHORT}) => {
    return ToastPortal.toast.update({ ...options,children:message, visible:true });
  };

  static hide = () => {
    ToastPortal.toast.destroy();
  };
};
