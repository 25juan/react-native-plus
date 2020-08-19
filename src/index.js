import {toast, loading, actionSheet, alert,shareCard} from "./components/Portal";
export Portal  from "./components/Portal";
function invoke(obj,method,params) {
  if(!obj){
    return
  }
  return obj[method](params) ;
}
export default {
  toast: null,

  showActionSheet(option) {
    invoke(actionSheet,'show',option)
  },
  showLoading(option) {
    invoke(loading,'show',option)
  },
  hideLoading() {
    invoke(loading,'hide')
  },
  showModal(option) {
    invoke(alert,'show',option)
  },
  showShareCard(option){
    invoke(shareCard,'show',option)
  },
  hideShareCard(option){
    invoke(shareCard,'hide',option)
  },
  hideModal() {
    invoke(alert,'hide')
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
    invoke(toast,'show',option)
  }
}

