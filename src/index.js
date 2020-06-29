import Toast from "./components/Toast";
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
  /**
   * 显示toast
   * @param {Object} option 显示toast的配置项
   * @param {string} option.title 显示的文本内容
   * @param {number} option.duration 显示时长
   * @param {number} option.position 显示位置
   * @param {function} option.success 显示位置
   */
  showToast(option) {
    Toast.show(option.title,option)
  }
}

