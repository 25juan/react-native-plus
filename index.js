import { NativeModules } from 'react-native';
import Plus,{ Portal as Wrapper} from "./src" ;
import Toast from "./src/components/Toast";
import Loading from "./src/components/Loading";
export Component from "./src/components/Component" ;
export const Portal  = Wrapper;
const native = NativeModules.Plus;
export default {
  ...Plus,
  Toast,
  Loading,
  ...native
};
