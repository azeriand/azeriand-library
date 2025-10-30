import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',

  // Branding
  brandTitle: "Azeriand's Library",
  brandUrl: 'https://library.andrearc.com',
  brandImage: '/public/azeriand.png',
  brandTarget: '_self',

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Primary Brand Colors
  colorPrimary: '#00F5D4', //Highlight principal
  colorSecondary: '#FF9BDA', //Acento secundario

  // UI Backgrounds
  appBg: '#0C0F1C', //Navbar y background general
  appContentBg: '#0F1524', //Secciones internas
  appPreviewBg: '#0A0E19',
  appBorderColor: '#1A2333',
  appBorderRadius: 6,

  // Text colors
  textColor: '#CDEAFF', //Texto principal
  textInverseColor: '#0C0F1C',

  // Toolbar (Tabs, icons)
  barBg: '#0F1524',
  barTextColor: '#CDEAFF',
  barHoverColor: '#00F5D4',
  barSelectedColor: '#FF9BDA',

  // Forms
  inputBg: '#ffffff',
  inputBorder: '#ffffff',
  inputTextColor: '#CDEAFF',
  inputBorderRadius: 4,
});