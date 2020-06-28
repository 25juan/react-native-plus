export interface Loading {
  // loading框的标题
  title: string;
  // 是否有遮罩
  mask?: boolean;

  success();

  fail();

  complete();
}

export enum Position {

  TOP,
  BOTTOM,
  CENTER
}

export interface Toast {
  // toast的标题
  title: string;
  // toast 图标
  icon?: string;
  // toast 图片
  image?: string;
  // 是否遮罩
  mask?: boolean;
  // toast显示的图片
  duration?: number;
  // toast显示的位置
  position?: number;

  success();

  fail();

  complete();
}

export interface Modal {
  // 模态框的标题
  title: string;
  // 模态框的内容
  content: string;
  // 是否显示取消按钮
  showCancel?: boolean;
  // 取消文本
  cancelText?: string;
  // 取消文本的颜色
  cancelColor?: string;
  // 确认文本
  confirmText?: string;
  // 确认文本颜色
  confirmColor?: string;

  success();

  fail();

  complete();
}

export interface ActionSheet {
  // 选项列表
  itemList: string[];
  itemColor?: string;

  success();

  fail();

  complete();
}

export default interface PlusInterface {
  toast: any ;
  showLoading(option: Loading): void;

  hideLoading(): void;

  showToast(option: Toast): void;
  hideToast(): void;

  showModal(option: Modal): void;

  showActionSheet(option: ActionSheet): void;
}
