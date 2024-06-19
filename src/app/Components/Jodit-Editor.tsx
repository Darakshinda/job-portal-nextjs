import React, { useRef, useEffect } from 'react';
import JoditEditor from 'jodit-react';

interface JoditEditorComponentProps {
  value: string;
  onChange: (value: string) => void;
}

const JoditEditorComponent: React.FC<JoditEditorComponentProps> = ({ value, onChange }) => {
  const editorRef = useRef<JoditEditor | null>(null);

  return (
    <JoditEditor
      ref={editorRef}
      value={value}
      config={{
        readonly: false, // all options from https://xdsoft.net/jodit/doc/
      }}
      tabIndex={1} // tabIndex of textarea
      onBlur={newContent => onChange(newContent)} // preferred to use only this option to update the content for performance reasons
      onChange={newContent => {}}
    />
  );
};

export default JoditEditorComponent;
