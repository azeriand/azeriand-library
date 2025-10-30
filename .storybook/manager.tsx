import { addons } from '@storybook/manager-api';
import './manager.css';
import azeriandTheme from './azeriand-theme';
 
addons.setConfig({
  theme: azeriandTheme,
  navBg: '#FFFFFF'

});