import { useState } from "react";

import Note from "./components/Note";
import NoteList from "./components/NoteList";
import "./style/App.css";

function App() {
  //タイトルを保持するstate
  const [title, setTitle] = useState<string>("新しいノート");
  //本文を保持するstate
  const [mainText, setMainText] = useState<string>("");
  return (
    <div className="home-page">
      <NoteList title={title} mainText={mainText} />
      <Note
        title={title}
        setTitle={setTitle}
        mainText={mainText}
        setMainText={setMainText}
      />
    </div>
  );
}

export default App;
