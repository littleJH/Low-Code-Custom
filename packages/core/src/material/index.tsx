import { useNode, UserComponent, UserComponentConfig } from '@craftjs/core';
import React from 'react';

export type MaterialComponent<T = any> = UserComponent<T>;
export interface MaterialConfig<T = any> extends UserComponentConfig<T> {
  related: {
    icon?: React.ComponentType;
    settingRender?: React.ComponentType;
  };
  custom: {
    useCanvas?: boolean;
    useResize?: boolean;
  };
}

function withConnectNode(WrapComponent: React.ForwardRefExoticComponent<any>) {
  return function ({ children, ...props }) {
    const {
      connectors: { connect, drag },
      custom,
      name,
    } = useNode((node) => {
      return {
        custom: node.data.custom,
        name: node.data.name.replaceAll('__', ''),
      };
    });
    return (
      <WrapComponent
        ref={(el: HTMLElement) =>
          custom?.useResize ? connect(el) : connect(drag(el))
        }
        {...props}
      >
        {children}
        {/* {custom?.useCanvas ? <>empty</> : children} */}
      </WrapComponent>
    );
  };
}

/**
 *
 *
 * @export
 * @template P
 * @param {React.ForwardRefRenderFunction<React.ComponentType>} component
 * @param {Partial<MaterialConfig>} config
 * @return {*}  {MaterialComponent}
 */
export function createMaterial<P = any>(
  component: React.ForwardRefRenderFunction<React.ComponentType>,
  config: Partial<MaterialConfig>
): MaterialComponent {
  const matiral: MaterialComponent = withConnectNode(
    React.forwardRef<React.ComponentType, P>(component)
  );

  matiral.craft = config;
  return matiral;
}
