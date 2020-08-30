import React, {useEffect, createRef} from "react" ;
import Toast from "./Toast";
import Loading from "./Loading" ;
import ActionSheet from "./ActionSheet";
import Alert from "./Alert";
import ShareCard from "./ShareCard";
import ImagePreview from "./ImagePreview";
import Prompt from "./Prompt" ;
import CityPicker from "./CityPicker" ;
import Search from './Search' ;

export let toast = null;
export let loading = null;
export let actionSheet = null;
export let alert = null;
export let shareCard = null;
export let imagePreview = null;
export let prompt = null;
export let cityPicker = null;
export let search = null ;

const _toast = createRef();
const _loading = createRef();
const _actionSheet = createRef();
const _alert = createRef();
const _shareCard = createRef();
const _imagePreview = createRef();
const _prompt = createRef();
const _cityPicker = createRef();
const _search = createRef();

/**
 * 此处不能用函数式组件，用了函数式组件可能造成渲染问题
 */
export default class extends React.Component {
    componentDidMount() {
        toast = _toast.current;
        loading = _loading.current;
        actionSheet = _actionSheet.current;
        alert = _alert.current;
        shareCard = _shareCard.current;
        imagePreview = _imagePreview.current;
        prompt = _prompt.current;
        cityPicker = _cityPicker.current;
        search = _search.current;
    }

    render() {
        const props = this.props;
        return (
            <>
                <Toast ref={_toast}/>
                <Loading customActivityIndicator={props.customActivityIndicator || null} ref={_loading}/>
                <ActionSheet ref={_actionSheet}/>
                <Alert ref={_alert}/>
                <ShareCard ref={_shareCard}/>
                <ImagePreview ref={_imagePreview}/>
                <Prompt ref={_prompt}/>
                <CityPicker ref={_cityPicker}/>
                <Search ref={_search}/>
                {props.children}
            </>
        )
    }
}
