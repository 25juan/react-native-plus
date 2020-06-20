import React  from  "react"
import { Modal,View,Text } from "react-native"
interface LoadingProps {
  show : boolean ,
  title: string,
  mask: boolean
}
export default class Loading extends React.Component<LoadingProps>{
  render(){
    if(!this.props.show) {
      return null
    }

    return (
      <Modal>

      </Modal>
    )
  }
}
