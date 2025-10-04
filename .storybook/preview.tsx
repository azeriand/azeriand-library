import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";
import { ThemeContextComponent } from "../src/components/theme-context";
import { Theme } from "@emotion/react";

export const decorators = [
  (Story) => (
    <ThemeContextComponent>
      <Story />
    </ThemeContextComponent>
  ),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
