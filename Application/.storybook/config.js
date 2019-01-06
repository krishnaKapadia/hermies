import { configure } from '@storybook/react';

const stories = require.context('../src', true, /\.stories\.(js|ts)x?$/);

function loadStories() {
  stories.keys().forEach((story) => stories(story));
}

configure(loadStories, module);
