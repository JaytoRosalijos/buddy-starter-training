import "../src/index.css";
import { TodoProvider } from '../src/context';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <TodoProvider>
      <Story />
    </TodoProvider>
  ),
];