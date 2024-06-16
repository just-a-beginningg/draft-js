import { FC, useState, useRef, useEffect } from "react";
import { convertFromRaw, convertToRaw, Editor, EditorState } from "draft-js";
import { draftjsToMd, mdToDraftjs } from "draftjs-md-converter";
import { compositeDecorator } from "./Composite-decorator.config";

const LOCAL_STORAGE_KEY = "draft-js-content";

export const RichTextEditor: FC = () => {
  const editorRef = useRef<Editor>(null);

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(compositeDecorator)
  );

  useEffect(() => {
    editorRef.current?.editor?.focus();
    const content = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (content) {
      const rawData = mdToDraftjs(content);
      const contentState = convertFromRaw(rawData);
      const newEditorState = EditorState.createWithContent(
        contentState,
        compositeDecorator
      );
      setEditorState(newEditorState);
    }
  }, []);

  function saveHandler() {
    const currentContent = editorState.getCurrentContent();
    const rawContent = convertToRaw(currentContent);
    const markdown = draftjsToMd(rawContent);
    localStorage.setItem(LOCAL_STORAGE_KEY, markdown);
  }

  return (
    <div className="flex flex-col h-full">
      <main className="flex w-full justify-between my-2">
        <div className="flex w-full justify-center font-semibold">
          Demo editor by Arun
        </div>
        <button
          onClick={saveHandler}
          className="border-stone-900 border-2 px-4 py-1 text-sm font-medium hover:bg-stone-900 hover:text-stone-100 "
        >
          Save
        </button>
      </main>
      <section className="flex-1 border-2 border-stone-600">
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          ref={editorRef}
        />
      </section>
    </div>
  );
};
