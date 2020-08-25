import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { MyComponent } from "./MyComponent";
import { action } from "@storybook/addon-actions";

export default {
  title: "MyNamespace/Something",
  component: MyComponent,
  argTypes: {
    bgColor: {
      control: "color",
    },
    onClick: {
      action: "clicked",
    },
  },
} as Meta;

const Template = (args) => (
  <MyComponent {...args}  />
);

export const Red = Template.bind({});

Red.args = {
  bgColor: "red",
};

export const Green = Template.bind({});

Green.args = {
  bgColor: "green",
};

export const Something = () => <MyComponent />;

/*
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
*/
