import React from 'react';
import { css } from '@emotion/react';
import Header from './header';
import Left from './left';
import Canvas from './canvas';
import Right from './right';
import EditorRoot from './root';

const style = {
  layout: css({
    display: 'grid',
    gridTemplateRows: '45px 1fr',
    overflow: 'hidden',
    height: '100%',
  }),
  main: css({
    display: 'grid',
    gridTemplateColumns: 'auto 1fr 300px',
    height: '100%',
    position: 'relative',
    overflow: 'auto',
  }),
};

const FrameWork: React.FC = () => {
  return (
    <EditorRoot>
      <div css={style.layout}>
        <Header></Header>
        <div id="EditorContent" css={style.main}>
          <Left></Left>
          <Canvas></Canvas>
          <Right></Right>
        </div>
      </div>
    </EditorRoot>
  );
};

export default FrameWork;
