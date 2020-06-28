import PlusInterface, {ActionSheet, Loading, Modal, Position, Toast} from "./types";
import RNRToast from 'react-native-root-toast';

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
  hideToast(){
    if(this.toast) {
      RNRToast.hide(this.toast)
    }
  },
  showToast(option: Toast): void {
    let position = RNRToast.positions.CENTER
    if (option.position === Position.TOP) {
      position = RNRToast.positions.TOP
    } else if (option.position === Position.BOTTOM) {
      position = RNRToast.positions.BOTTOM
    }
    this.toast = RNRToast.show(option.title, { duration: option.duration, position, onShown: option.success })
  }
};

export default Plus

