import { createMaterial } from '@lcc/core';
import View from './view';

const Container = createMaterial(View, {
  displayName: 'Container',
  custom: {
    useCanvas: true,
    useResize: false,
  },
  related: {},
});

export default Container;
