import { Element, Frame, Canvas as EditorCanvas } from '@craftjs/core';
import React, { useEffect } from 'react';
import FrameComponent, {
  FrameContextConsumer,
  useFrame,
} from 'react-frame-component';
import Container from '../components/container';
import { css } from '@emotion/react';
import styles from '@mantine/core/styles.css?raw';
import styleLayer from '@mantine/core/styles.layer.css?raw';
import { theme, Typography } from 'antd';
import { BaseMaterials } from '@lcc/material';
import { canvasIframeRootId } from '@lcc/core';

const styleStr = `
            .editor-component-active {
              position: relative;
            }
            
            .editor-component-active::after {
              content: '';
              pointer-events: none;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              display: block;
              border: 1px solid #1677ff;
            }
            
            .editor-component-hover {
              position: relative;
            }
            
            .editor-component-hover::after {
              content: '';
              pointer-events: none;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              display: block;
              border: 1px dashed #1677ff;
              background: rgba(0, 0, 0, 0.1);
            }

            #ROOT {
              width: 100%;
              height: 100%;
            }
            
            `;

const Canvas: React.FC = () => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const iframeRef = React.useRef<HTMLIFrameElement | null>(null);
  const token = theme.getDesignToken();
  const { document: iframeDocument, window: iframeWindow } = useFrame();

  useEffect(() => {
    const canvasEl = document.getElementById(canvasIframeRootId);
  }, [iframeDocument]);

  return (
    <div
      ref={ref}
      css={css({
        borderLeft: `1px solid ${token.colorBorderSecondary}`,
        borderRight: `1px solid ${token.colorBorderSecondary}`,
        background: '#f9fafb',
        height: '100%',
        padding: token.paddingSM,
        position: 'relative',
      })}
    >
      <FrameComponent
        id={canvasIframeRootId}
        ref={iframeRef}
        css={css({
          border: 'none',
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
        })}
        head={
          <>
            <link
              type="text/css"
              href="https://cdn.skypack.dev/sanitize.css"
              rel="stylesheet"
            />
            <style
              dangerouslySetInnerHTML={{
                __html: styles,
              }}
            />
            <style
              dangerouslySetInnerHTML={{
                __html: styleLayer,
              }}
            />
            <style>{styleStr}</style>
          </>
        }
      >
        <div
          style={{
            height: '100vh',
            width: '100vw',
          }}
        >
          <Frame>
            <EditorCanvas
              is={Container}
              background="#fff"
              height="100%"
              width="100%"
            ></EditorCanvas>
          </Frame>
        </div>
      </FrameComponent>
    </div>
  );
};

export default Canvas;
