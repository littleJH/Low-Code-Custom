import { ConfigProvider } from 'antd';

export interface ViewProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  ref?: any;
}

const View = (props: ViewProps, ref: any) => {
  const { children, style, ...rest } = props;
  console.log('🚀 ~ View ~ style:', style);
  return (
    <ConfigProvider
      getPopupContainer={(node: any) => {
        console.log(node, 'node');
        return document.body;
      }}
    >
      <div
        id="provider_view"
        ref={ref}
        style={{ ...rest, ...style, boxSizing: 'border-box' }}
      >
        {children}
      </div>
    </ConfigProvider>
  );
};

export default View;
