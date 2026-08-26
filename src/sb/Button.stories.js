import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../component/Core';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' },
        variant: {
            control: {
                type: 'select',
                options: ['default', 'primary', 'primaryR', 'footer'],
            },
            name: 'Button Variant',
        },
        disabled: {
            control: 'boolean',
            name: 'Is Disabled',
        },
    },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Click me',
    variant: 'default',
    disabled: false,
};

export const Footer = Template.bind({});
Footer.args = {
    children: 'Click me',
    variant: 'footer',
    disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Click me',
    variant: 'footer',
    disabled: true,
};
