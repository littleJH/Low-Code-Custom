import { css } from '@emotion/react';
import { Flex, theme, Typography } from 'antd';
import React from 'react';

export interface MaterialRecordProps {
  name: string;
  icon: React.ReactNode;
}

const MaterialRecord = React.forwardRef<HTMLElement, MaterialRecordProps>(
  (props, ref) => {
    const { name, icon } = props;

    const classes = {
      card: css({
        width: '100%',
        height: 67,
        cursor: 'grab',
        position: 'relative',
        transition: '.15s ease-in-out',
        transitionProperty: 'transform',
        willChange: 'transform',
        borderRadius: 8,
        background: '#f9f9f9',
        overflow: 'hidden',
        border: `1px solid ${theme.getDesignToken().colorBorderSecondary}`,
        '&:hover': {
          border: `1px solid ${theme.getDesignToken().colorPrimary}`,
          img: {
            transform: 'scale(1.2)',
            transition: 'all 0.5s',
          },
        },
        img: {
          height: '100%',
          width: '100%',
          objectFit: 'none',
        },
      }),
    };
    return (
      <Flex id="material_record" ref={ref}>
        <Flex justify="center" align="center" css={classes.card}>
          {icon}
        </Flex>
        <Typography.Paragraph
          ellipsis={{ rows: 2, tooltip: true }}
          type="secondary"
          style={{
            fontSize: '12px',
            maxWidth: '6rem',
          }}
        >
          {name}
        </Typography.Paragraph>
      </Flex>
    );
  }
);

export default MaterialRecord;
