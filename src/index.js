import {toast} from "./components/Portal";
export Portal,{ toast } from "./components/Portal";
function invoke(obj,method,params) {
  if(!obj){
    return
  }
  return obj[method](params) ;
}
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
  /**
   * 手动关闭toast
   */
  hideToast(){
    if(this.toast) {
      invoke(toast,'hide')
    }
  },
  /**
   * 显示toast
   * @param {Object} option 显示toast的配置项
   * @param {string} option.title 显示的文本内容
   * @param {number} option.duration 显示时长
   * @param {number} option.position 显示位置
   */
  showToast(option) {
    // Toast.show(option.title,option)
    invoke(toast,'show',option)
  }
}

