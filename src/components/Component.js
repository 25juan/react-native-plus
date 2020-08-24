import React from "react" ;
import easyHttp2  from 'easy-http2' ;
import Plus from "../../index" ;
export default class Component extends React.Component {
  $$Apis = easyHttp2.Apis ;
  $$data = easyHttp2.data ;
  $$bool = easyHttp2.bool ;
  $$_Apis = easyHttp2._Apis ;
  $$Plus = Plus ;
}
