import type { Preview } from '@storybook/react';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { withThemeDecorator }
    from '../../src/shared/config/storybook/withThemeDecorator/withThemeDecorator';
import { withStyleDecorator }
    from '../../src/shared/config/storybook/withStyleDecorator/withStyleDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [withStyleDecorator, withThemeDecorator(Theme.NORMAL)],
};

export default { preview };
