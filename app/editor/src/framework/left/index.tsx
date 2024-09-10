import React, { useState } from 'react';
import { css } from '@emotion/css';
import { Button, Flex, theme, Tooltip, Typography } from 'antd';
import { map } from 'lodash';
import { PlusCircleOutlined, DoubleLeftOutlined } from '@ant-design/icons';
import { LeftMenuTab as MenuTab } from '@/constants';
import MaterialList from './materials';

export type MenuObjectType = Record<
  MenuTab,
  {
    icon: React.ReactNode;
    label: string;
    component: React.ReactNode;
  }
>;

const classes = {
  main: css({
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '45px 1fr',
  }),
  content: css({
    minWidth: 255,
    display: 'grid',
    gridTemplateRows: '36px 1fr',
  }),
};

const menuItems: MenuObjectType = {
  [MenuTab.MATERIALS]: {
    icon: <PlusCircleOutlined />,
    label: '组件列表',
    component: <MaterialList />,
  },
  [MenuTab.TREE]: {
    icon: <PlusCircleOutlined />,
    label: '面包树',
    component: <></>,
  },
  [MenuTab.HISTORY]: {
    icon: <PlusCircleOutlined />,
    label: '历史记录',
    component: <></>,
  },
  [MenuTab.QUERIES]: {
    icon: <PlusCircleOutlined />,
    label: '状态管理',
    component: <></>,
  },
};

const Left: React.FC = () => {
  const { token } = theme.useToken();
  const [activeKey, setActiveKey] = useState<MenuTab | undefined>(
    MenuTab.MATERIALS
  );

  return (
    <div className={classes.main}>
      <Flex
        vertical
        gap={8}
        align="center"
        className={css({
          paddingBlock: 8,
          borderRight: activeKey
            ? `1px solid ${token.colorBorderSecondary}`
            : undefined,
        })}
      >
        {map<MenuObjectType>(
          menuItems,
          (item: (typeof menuItems)[MenuTab.MATERIALS], key: MenuTab) => (
            <Tooltip
              key={key}
              color="blue"
              placement="rightTop"
              title={item.label}
            >
              <Button
                key={key}
                type={key === activeKey ? 'primary' : 'text'}
                icon={item.icon}
                onClick={() => setActiveKey(key)}
              />
            </Tooltip>
          )
        )}
      </Flex>
      {activeKey ? (
        <div className={classes.content}>
          <Flex
            justify="space-between"
            className={css({
              paddingInline: 12,
              borderBottom: `1px solid ${token.colorBorderSecondary}`,
            })}
            align="center"
          >
            <Typography.Text>{menuItems?.[activeKey]?.label}</Typography.Text>
            <Button
              size="small"
              type="text"
              icon={<DoubleLeftOutlined />}
              onClick={() => setActiveKey(undefined)}
            />
          </Flex>
          <div
            style={{
              overflow: 'auto',
              height: '100%',
            }}
          >
            {menuItems?.[activeKey]?.component}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Left;
