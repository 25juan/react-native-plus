import React from "react" ;
import easyHttp2  from 'easy-http2' ;
import Plus from "../index" ;
export default class Component extends React.Component {
  $$Apis = easyHttp2.Apis ;
  $$data = easyHttp2.data ;
  $$bool = easyHttp2.bool ;
  showToast =  Plus.showToast ;
  showLoading = Plus.showLoading ;
  hideLoading = Plus.hideLoading
  showActionSheet = Plus.showActionSheet ;
  showModal = Plus.showModal ;
}
