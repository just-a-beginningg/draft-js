import { FC, useState, useRef, useEffect } from "react";
import { convertFromRaw, convertToRaw, Editor, EditorState } from "draft-js";
import { compositeDecorator } from "./Composite-decorator.config";

const LOCAL_STORAGE_KEY = "draft-js-content";

export const RichTextEditor: FC = () => {
  const editorRef = useRef<Editor>(null);

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(compositeDecorator)
  );

  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    editorRef.current?.editor?.focus();
    setContent(localStorage.getItem(LOCAL_STORAGE_KEY));

    if (content) {
      const rawData = localStorage.getItem(LOCAL_STORAGE_KEY);
      const contentState = convertFromRaw(JSON.parse(rawData ? rawData : ""));
      const newEditorState = EditorState.createWithContent(
        contentState,
        compositeDecorator
      );
      setEditorState(newEditorState);
    }
  }, [content]);

  function saveHandler() {
    const currentContent = editorState.getCurrentContent();
    const rawContent = convertToRaw(currentContent);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(rawContent));
  }

  function clearHandler() {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setContent(null);
    setEditorState(EditorState.createEmpty(compositeDecorator));
  }

  return (
    <div className="flex flex-col h-full">
      <main className="flex w-full justify-between my-2">
        <div className="flex w-full justify-center font-semibold">
          Demo editor by Arun
        </div>
        <button
          onClick={clearHandler}
          className="border-stone-900 border-2 px-4 py-1 text-sm font-medium hover:bg-stone-900 hover:text-stone-100 mr-2 "
        >
          Clear
        </button>
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
