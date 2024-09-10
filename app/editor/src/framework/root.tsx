import React, { useEffect } from 'react';
import { Options, Editor as RootEditor } from '@craftjs/core';
import { assign } from 'lodash';
import { BaseMaterials } from '@lcc/material';
import Container from './components/container';
import { useRecoilState } from 'recoil';
import { editorState } from '@/store/editorState';
import { CustomNodeRender } from './components/container/customNodeRender';

export interface ProviderProps extends Partial<Options> {
  children?: React.ReactNode;
}

// const renderNode = ({ element }) => {
//   return <div style={{ background: '#000', padding: '5px' }}>{element}</div>;
// };

const resolver = assign({}, BaseMaterials, { Container });
console.log('🚀 ~ resolver:', resolver);

const EditorRootWrapper: React.FC<ProviderProps> = (props) => {
  const { children } = props;
  const [editor, setEditor] = useRecoilState(editorState);

  const handleEditorChange: Options['onNodesChange'] = (query) => {
    const serNodes = query.getSerializedNodes();
    console.log('🚀 ~ serNodes:', serNodes);
    // todo setEditor(serNodes);
  };
  return (
    <RootEditor
      resolver={resolver}
      onNodesChange={handleEditorChange}
      onRender={CustomNodeRender}
      {...props}
    >
      {children}
    </RootEditor>
  );
};

export default EditorRootWrapper;
