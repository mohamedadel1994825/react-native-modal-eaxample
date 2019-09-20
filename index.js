import { FlatListFood } from './components/FlatListFood';
import { HorizontalScrollView } from './components/HorizontalScrollView';
import { Width, Height, MyColors } from './components/consts';
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import App1 from './App1';
import TextPlink from './components/TextPlink';
import TextApp from './components/TextApp';
AppRegistry.registerComponent(appName, () => FlatListFood);
export {
    Width,
    Height,
    MyColors

}