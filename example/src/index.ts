import PlusInterface, {ActionSheet, Loading, Modal, Position, Toast} from "./types";
import RNRToast from 'react-native-root-toast';
 import RootToast from "./factory/Toast";
import createPortal from "./factory/createPortal";
export { Position } from "./types";

const Plus: PlusInterface = {
  toast: null,

  hideLoading(): void {

  },
  showActionSheet(option: ActionSheet): void {

  },
  showLoading(option: Loading): void {

  },
  showModal(option: Modal): void {

  },
  hideToast() {
    if (this.toast) {
      RNRToast.hide(this.toast)
    }
  },
  showToast(option: Toast): void {
    const toast = createPortal(RootToast,{ })
    console.log(toast)
    // this.hideToast()
    // this.toast = RNRToast.show(option.title, {
    //   shadow: false,
    //   duration: option.duration || 1500,
    //   backgroundColor: 'rgba(0,0,0,0.8)',
    //   position:option.position,
    //   onShown: option.success
    // })
  }
};

export default Plus

