import { Decorator } from '@storybook/react';
import 'app/styles/index.scss';

export const withStyleDecorator: Decorator = (Story) => (
    <Story />
);
