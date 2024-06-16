import { FC } from "react";
import "./App.css";
import { RichTextEditor } from "./components/Rich-text-editor/Rich-Text-Editor.component";

const App: FC = () => {
  return (
    <section className="w-full h-full">
      <RichTextEditor />
    </section>
  );
};

export default App;
