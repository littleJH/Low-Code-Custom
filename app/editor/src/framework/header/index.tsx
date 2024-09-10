import { theme } from 'antd';
import React from 'react';
import { css } from '@emotion/css';

const Header: React.FC = () => {
  const { token } = theme.useToken();

  const classes = {
    header: css({
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      height: 45,
      border: `1px solid ${token.colorBorderSecondary}`,
      paddingInline: token.paddingXS,
    }),
    notice: css({
      textAlign: 'center',
    }),
  };

  return <div className={classes.header}>Header</div>;
};

export default Header;
