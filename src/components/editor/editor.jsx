import "./editor.css";
import { ReactComponent as Close } from "../../assets/image/close.svg";
import { ReactComponent as Trash } from "../../assets/image/delete.svg";
import { ReactComponent as Save } from "../../assets/image/save.svg";
// import RichTextExample from "../others/richtextEditor";

const Editor = () => {
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
        {/* <RichTextExample /> */}
      </section>
    </div>
  );
};

export default Editor;
