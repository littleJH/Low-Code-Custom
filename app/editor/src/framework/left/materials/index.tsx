import React from 'react';
import { BaseMaterials } from '@lcc/material';
import { App, Card, Flex, Typography } from 'antd';
import { map } from 'lodash';
import { css } from '@emotion/react';
import MaterialGroup from './component/group';

const materials: Record<string, any> = {
  基础组件: BaseMaterials,
};

const classes = {
  list: css({}),
};

const MaterialList: React.FC = () => {
  const { message } = App.useApp();
  return (
    <Flex vertical gap={12} css={classes.list}>
      {map(materials, (value, key) => {
        return (
          <MaterialGroup
            key={key}
            groupList={value}
            groupName={key}
          ></MaterialGroup>
        );
      })}
      <div style={{ paddingBottom: 12 }}>
        <Card size="small">
          <Flex justify="center">
            <Typography.Text type="secondary">
              暂无更多, 请
              <Typography.Link onClick={() => message.success('尽情期待')}>
                添加
              </Typography.Link>
            </Typography.Text>
          </Flex>
        </Card>
      </div>
    </Flex>
  );
};

export default MaterialList;
