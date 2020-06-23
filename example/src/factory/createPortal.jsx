import React from "react"
import RootSiblings from 'react-native-root-siblings';
class Portal {
  portal = null
  constructor(Widget,initProps){
    this.Widget = Widget ;
    this.initProps = initProps || {}
  }
  create(){
    const Widget = this.Widget
    this.portal = new RootSiblings(<Widget { ...this.initProps }/>)
    return this ;
  }
  update(props){
    if(this.portal){
      const Widget = this.Widget
      this.portal.update(<Widget { ...props }/>)
    }
    return this
  }
  destroy(){
    if(this.portal){
      this.portal.destroy();
    }
    return this
  }
}
export function createPortal(Widget,props) {
  return new Portal(Widget,props)
}
export default createPortal
