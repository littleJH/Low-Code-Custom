import React from 'react';
import { createMaterial } from '@lcc/core';
import { Button, ButtonProps } from 'antd';
import { buttonIcon } from '@/assets/icon';

export const MatirialButton = createMaterial<ButtonProps>(
  (props: ButtonProps, ref: any) => <Button ref={ref}>{props.children}</Button>,
  {
    displayName: '按钮',
    related: {
      settingRender: () => <div>按钮设置</div>,
      icon: () => <img alt="" height="100%" width="100%" src={buttonIcon} />,
    },
  }
);
