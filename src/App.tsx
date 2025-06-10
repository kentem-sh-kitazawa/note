import { useState } from "react";

import Note from "./components/Note";
import NoteList from "./components/NoteList";
import "./style/App.css";

function App() {
  //タイトルを保持するstate
  const [title, setTitle] = useState<string>("新しいノート");
  //本文を保持するstate
  const [mainText, setMainText] = useState<string>("");
  //現在時刻の取得
  const [date, setDate] = useState<string>();
  const [time, setTime] = useState<string>();

  const getDateTime = () => {
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let day = d.getDate();
    setDate(year + "/" + month + "/" + day);
    let hour = d.getHours().toString().padStart(2, "0");
    let minute = d.getMinutes().toString().padStart(2, "0");
    setTime(hour + ":" + minute);
  };

  return (
    <div className="home-page">
      <NoteList
        title={title}
        setTitle={setTitle}
        mainText={mainText}
        setMainText={setMainText}
      />
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
