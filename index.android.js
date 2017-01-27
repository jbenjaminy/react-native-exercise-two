// All we want to do in both index.android.js & index.ios.js is to make use
// of the App component, so that we can keep the app consistent between both
// platforms. First place we are doing any logic/modifications is app.js file.
import { AppRegistry } from 'react-native';
import App from './src/app';

AppRegistry.registerComponent('auth', () => App);
