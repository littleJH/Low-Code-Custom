import { AtomEffect } from 'recoil';

export type LoggerEffectType = <T>(key: string) => AtomEffect<T>;

export const loggerAtomEffect: LoggerEffectType =
  (key) =>
  ({ onSet }) => {
    onSet((newValue, oldValue) => {
      console.log(
        `🚀 ~ Atom ${key} onSet ~ newValue, oldValue:`,
        newValue,
        oldValue
      );
    });
  };
