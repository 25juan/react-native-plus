import {toast, loading, actionSheet, alert,shareCard, imagePreview,prompt,cityPicker,search} from "./components/Portal";
import Toast from "./components/Toast"
import cities from "./components/CityPicker/city";
export Portal  from "./components/Portal";

function invoke(obj,method,params) {
  if(!obj){
    return
  }
  return obj[method](params) ;
}
export default {
  /**
   * 显示城市选择
   * @param {Object} option 显示城市选择的配置项
   * @param {string} option.cities 标题
   * @param {Function} option.success 用户点击之后的回调函数,传入当前itemList的索引
   */
  showCityPicker(option = { cities,success : (city)=>{} }){
    invoke(cityPicker,'show',option)
  },
  /**
   * 显示检索界面
   * @param {Object} option 显示检索界面的配置项
   * @param {Function} option.success 用户输入关键字之后的回调函数
   */
  showSearch(option = { success : (keyword)=>{} }) {
    invoke(search,'show',option)
  },

  previewImage(option ={
    images:[],
    index:0
  }){
    invoke(imagePreview,'show',option)
  },
  /**
   * 显示action sheet
   * @param {Object} option 显示action sheet的配置项
   * @param {string} option.title 标题
   * @param {Array} option.itemList 菜单选项，字符串数组['菜单1','菜单2','取消']
   * @param {string} option.message 描述
   * @param {Function} option.success 用户点击之后的回调函数,传入当前itemList的索引
   * @param {number} option.cancelButtonIndex 取消菜单的索引,默认是itemList最后一个选项
   * @param {number} option.destructiveButtonIndex 激活菜单的选,默认没有激活
   */
  showActionSheet(option = {
    title: '',
    itemList:[],
    cancelButtonIndex:0,
    destructiveButtonIndex: -1,
    tintColor:'#1890ff',
    message:'',
    success(tapIndex){}
  }) {
    invoke(actionSheet,'show',option)
  },
  /**
   * 显示loading框
   * @param {Object} option 显示loading的配置项
   * @param {string} option.title 标题
   * @param {string} option.theme loading框的主题,可取值Plus.Loading.THEME.THEME1,Plus.Loading.THEME.THEME2,Plus.Loading.THEME.THEME3
   */
  showLoading(option = {
    title: '',
    theme: Loading.THEME.THEME3
  }) {
    invoke(loading,'show',option)
  },
  /**
   * 手动关闭加载框
   */
  hideLoading() {
    invoke(loading,'hide')
  },
  /**
   * 显示对话框
   * @param {Object} option 显示对话框的配置项
   * @param {string} option.title 标题
   * @param {string} option.message 对话框消息
   * @param {boolean} option.showCancel 是否显示取消按钮
   * @param {boolean} option.showConfirm 是否显示确认按钮
   * @param {string} option.textCancel 取消按钮文本
   * @param {string} option.textCancel 确认按钮文本
   * @param {Function} option.closeOnPressMask 点击遮罩是否关闭
   * @param {Function} option.closeOnPressBack 自定义Android返回键按钮事件
   * @param {boolean} option.useNativeDriver 是否用原生动画驱动
   * @param {Function} option.onCancel 点击取消按钮触发回调
   * @param {Function} option.onConfirm 点击确认按钮触发回调
   * @param {Function} option.onClose 关闭对话框触发回调
   */
  showModal(option = {
    title: "消息",
    message: "",
    showCancel: true,
    showConfirm: true,
    textCancel: "关闭",
    textConfirm: "确认",
    closeOnPressMask: false,
    closeOnPressBack: false,
    useNativeDriver: false,
    onCancel: null,
    onConfirm: null,
    onClose: null
  }) {
    invoke(alert,'show',option)
  },

  /**
   * 显示对话框
   * @param {Object} option 显示对话框的配置项
   * @param {string} option.title 标题
   * @param {string} option.message 对话框消息
   * @param {boolean} option.showCancel 是否显示取消按钮
   * @param {boolean} option.showConfirm 是否显示确认按钮
   * @param {string} option.textCancel 取消按钮文本
   * @param {string} option.textCancel 确认按钮文本
   * @param {Function} option.closeOnPressMask 点击遮罩是否关闭
   * @param {Function} option.closeOnPressBack 自定义Android返回键按钮事件
   * @param {boolean} option.useNativeDriver 是否用原生动画驱动
   * @param {Function} option.onCancel 点击取消按钮触发回调
   * @param {Function} option.onConfirm 点击确认按钮触发回调
   * @param {Function} option.onClose 关闭对话框触发回调
   */
  showPrompt(option = {
    title: "消息",
    text: '',
    placeholder: '',
    inputProps:{},
    showCancel: true,
    showConfirm: true,
    textCancel: "关闭",
    textConfirm: "确认",
    closeOnPressMask: false,
    closeOnPressBack: false,
    useNativeDriver: false,
    onCancel: null,
    onConfirm: null,
    onClose: null
  }) {
    invoke(prompt,'show',option)
  },

  /**
   * 显示分享面板
   * @param {Object} option 显示分享面板的配置项
   * @param {Function} option.success 点击某一个分享按钮之后的回调
   */
  showShareCard(option){
    invoke(shareCard,'show',option)
  },
  /**
   * 手动关闭分享面板
   */
  hideShareCard(option){
    invoke(shareCard,'hide',option)
  },
  /**
   * 手动关闭对话框
   */
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
  showToast(option = {
    title: '',
    duration:Toast.DURATION.SHORT,
    position: Toast.POSITION.TOP,
  }) {
    invoke(toast,'show',option)
  }
}

