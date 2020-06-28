import React from  "react" ;
import RootSiblings from "react-native-root-siblings"
class Portal {
  Portal = null ;
  portal = null ;
  initProps = {} ;
  constructor(Portal,initProps) {
    this.Portal = Portal ;
    this.initProps = initProps || {};
  }
  create(props = { }){
    if(this.portal){
      this.update(props)
      return this ;
    }
    const Portal = this.Portal
    this.portal = new RootSiblings( <Portal { ...this.initProps } { ...props }/>)
    return this ;
  }
  update(props){
    const Portal = this.Portal
    if(this.portal){
      this.portal.update(<Portal {...props} />);
    }
    return this
  }
  destroy() {
    if(this.portal){
      this.portal.destroy();
    }
    return this
  }
}
function createPortal(Widget,initProps = {}) {
  if(!Widget){
    throw new Error("createPortal传递参数类型错误")
    return
  }
  return new Portal(Widget,initProps);
}
export default createPortal
