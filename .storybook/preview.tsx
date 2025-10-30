import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";
import "./storybook.css";
import { ThemeContextComponent } from "../src/components/theme-context";
import { Theme } from "@emotion/react";
import { themes } from "@storybook/theming";

export const decorators = [
  (Story) => (
    <ThemeContextComponent>
      <Story />
    </ThemeContextComponent>
  ),
];

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
      options: {
        showPanel: false,
        // deshabilitar welcome page

      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
