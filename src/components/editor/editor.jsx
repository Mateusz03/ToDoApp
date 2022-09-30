import { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ReactComponent as Close } from "../../assets/image/close.svg";
import { ReactComponent as Trash } from "../../assets/image/delete.svg";
import { ReactComponent as Save } from "../../assets/image/save.svg";
import "./editor.css";
const TextEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );

  return (
    <div className="bgShadow">
      <section className="editorContent">
        <div className="editorHeader">
          <div className="fileName">Task</div>
          <div className="editorButtons">
            <Trash className="trash editorButton" />
            <Save className="save editorButton" />
            <Close className="close editorButton" />
          </div>
        </div>
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
        />
      </section>
    </div>
  );
};

export default TextEditor;
