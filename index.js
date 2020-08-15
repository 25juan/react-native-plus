import { NativeModules } from 'react-native';
import Plus,{ Portal as Wrapper} from "./src" ;
import Toast from "./src/Toast";
export const Portal  = Wrapper;
const native = NativeModules.Plus;
export default {
  ...Plus,
  Toast,
  ...native
};
