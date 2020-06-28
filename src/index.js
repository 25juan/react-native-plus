import RNRToast from 'react-native-root-toast';
export default {
  toast: null,

  hideLoading() {

  },
  showActionSheet(option) {

  },
  showLoading(option) {

  },
  showModal(option) {

  },
  hideToast(){
    if(this.toast) {
      RNRToast.hide(this.toast)
    }
  },
  showToast(option) {
    let position = RNRToast.positions.CENTER
    if (option.position === Position.TOP) {
      position = RNRToast.positions.TOP
    } else if (option.position === Position.BOTTOM) {
      position = RNRToast.positions.BOTTOM
    }
    this.toast = RNRToast.show(option.title, { duration: option.duration, position, onShown: option.success })
  }
}

