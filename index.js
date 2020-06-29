import { NativeModules } from 'react-native';
import PlusTools from "./src" ;
import { RootSiblingParent  } from "react-native-root-siblings"
const { Plus } = NativeModules;
export const Portal = RootSiblingParent ;
export default {
  ...PlusTools
};
