import { useEditor, Canvas } from '@craftjs/core';
import { css } from '@emotion/react';
import { Flex, Tag, Tooltip, Typography } from 'antd';
import { map } from 'lodash';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import MaterialRecord from './record';
import { MaterialComponent } from '@lcc/core';

export interface MaterialGroupProps {
  groupName: string;
  groupList: Record<string, MaterialComponent>;
  description?: string;
}

const classes = {
  group: css({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '12px',
    overflow: 'hidden',
    height: '100%',
  }),
};

const MaterialGroup: React.FC<MaterialGroupProps> = (props) => {
  const { groupName, groupList, description } = props;
  const { connectors, actions } = useEditor();
  return (
    <Flex vertical gap={12}>
      <Flex flex={'flex-start'} gap={6}>
        <Typography.Text type="secondary">{groupName || '--'}</Typography.Text>
        <Tag color="blue" bordered={false}>
          {Object.keys(groupList).length}
        </Tag>
      </Flex>
      <div css={classes.group}>
        <ErrorBoundary
          fallbackRender={({ error }) => (
            <Tooltip title={String(error)}>
              <div>Something went wrong ...</div>
            </Tooltip>
          )}
        >
          {map(groupList, (value, key) => {
            console.log('🚀 ~ {map ~ value:', value);

            const craft = value?.craft;
            const displayName = craft?.displayName ?? '--';
            const Icon = craft?.related?.icon;
            const useCanvas = craft?.custom?.useCanvas || false;

            return (
              <MaterialRecord
                key={key}
                name={displayName}
                icon={Icon ? <Icon /> : '--'}
                ref={(dom: HTMLElement) => {
                  if (dom) {
                    connectors.create(
                      dom,
                      useCanvas ? (
                        <Canvas canvas is={value}></Canvas>
                      ) : (
                        React.createElement(value)
                      ),
                      {
                        onCreate: (nodeTree) => {
                          console.log(
                            '🚀 ~ connectors.create ~ nodeTree:',
                            nodeTree
                          );
                          actions.selectNode(nodeTree.rootNodeId);
                        },
                      }
                    );
                  }
                }}
              ></MaterialRecord>
            );
          })}
        </ErrorBoundary>
      </div>
    </Flex>
  );
};

export default MaterialGroup;
