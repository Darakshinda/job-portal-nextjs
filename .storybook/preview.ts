import type { Preview } from "@storybook/react";
import '../src/stories/tailwind.css';
import '@storybook/addon-console';
>>>>>>>>> Temporary merge branch 2

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
