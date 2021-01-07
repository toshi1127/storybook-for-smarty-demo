import { createHello } from './Hello';

export default {
  title: 'Example/Hello',
};

const Template = (args) => createHello(args);

export const Default = Template.bind({});