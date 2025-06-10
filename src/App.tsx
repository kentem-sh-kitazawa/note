import { useState } from "react";

import Note from "./components/Note";

function App() {
  //タイトルを保持するstate
  const [title, setTitle] = useState<string>("新しいノート");
  //本文を保持するstate
  const [mainText, setMainText] = useState<string>("");
  return (
    <>
      <Note
        title={title}
        setTitle={setTitle}
        mainText={mainText}
        setMainText={setMainText}
      />
    </>
  );
}

export default App;
