import { loggerAtomEffect } from '@/utils/logger';
import { SerializedNodes } from '@craftjs/core';
import { atom } from 'recoil';

export type EditorStateType = {
  nodes: SerializedNodes;
};

export const editorState = atom<EditorStateType>({
  key: 'editorState',
  default: {
    nodes: {},
  },
  effects: [loggerAtomEffect<EditorStateType>('editorState')],
});
