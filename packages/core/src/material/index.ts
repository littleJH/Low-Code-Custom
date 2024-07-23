import { UserComponent } from '@craftjs/core';

export type MaterialComponent = UserComponent;

/**
 *
 *
 * @template T
 * @param {React.FunctionComponent<T>} wrapComponent
 */
export const withMaterialNode = <T>(
  wrapComponent: React.FunctionComponent<T>
) => {};

/**
 *
 *
 * @param {MaterialComponent} component
 */
export const createMaterial = (component: MaterialComponent) => {};
