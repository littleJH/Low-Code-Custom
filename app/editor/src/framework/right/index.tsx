import { css } from '@emotion/css';
import React from 'react';

const Right: React.FC = () => {
  const classes = {
    main: css({
      height: '100%',
      width: '100%',
      display: 'grid',
      gridTemplateRows: 'auto 1fr',
      overflow: 'hidden',
      boxSizing: 'border-box',
    }),
    content: css({
      height: '100%',
      overflow: 'auto',
      boxSizing: 'border-box',
    }),
    head: css({}),
  };
  return <div className={classes.main}>Right</div>;
};

export default Right;
