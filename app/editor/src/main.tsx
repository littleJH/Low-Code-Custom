import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { App, ConfigProvider } from 'antd';
import { RecoilRoot } from 'recoil';

const token = {
  wireframe: true,
  borderRadius: 8,
  colorLink: '#006fee',
  colorWarning: '#f5a524',
  colorError: '#f31260',
  colorTextBase: '#333333',
  colorBorder: '#ebebeb',
  colorBorderSecondary: '#f4f4f5',
};

const components = {
  Button: {
    controlHeightLG: 50,
  },
  Input: {
    controlHeightLG: 50,
  },
  Table: {
    headerBg: 'rgb(255, 255, 255)',
    borderColor: 'rgb(255, 255, 255)',
    headerSplitColor: 'rgb(255, 255, 255)',
    rowHoverBg: 'rgb(245, 245, 245)',
  },
  Segmented: {
    itemHoverBg: 'rgb(245, 245, 245)',
    itemActiveBg: 'rgb(245, 245, 245)',
    boxShadowTertiary:
      '      0 1px 1px 0 rgba(0, 0, 0, 0.03),      0 1px 3px -1px rgba(0, 0, 0, 0.02),      0 1px 2px 0 rgba(0, 0, 0, 0.02)    ',
  },
  Collapse: {
    colorBorder: 'rgb(255, 255, 255)',
    lineType: 'none',
    borderRadiusLG: 12,
    headerBg: 'rgba(0, 0, 0, 0.02)',
    contentPadding: '0 16px',
    fontSizeIcon: 14,
  },
  Typography: {
    fontWeightStrong: 400,
  },
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token,
        components,
      }}
    >
      <App>
        <RecoilRoot>
          <RouterProvider router={router}></RouterProvider>
        </RecoilRoot>
      </App>
    </ConfigProvider>
  </React.StrictMode>
);
