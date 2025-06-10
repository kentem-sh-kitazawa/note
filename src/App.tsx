import { useState } from "react";

import Note from "./components/Note";
import NoteList from "./components/NoteList";
import "./style/App.css";
//stateの初期値
//日時順？
//編集機能

//スタイル
//↑スクロールバー

//マークダウン
function App() {
  //タイトルを保持するstate
  const [title, setTitle] = useState<string>("新しいノート");
  //本文を保持するstate
  const [mainText, setMainText] = useState<string>("");
  //現在時刻の取得
  const [dateTIme, setDateTime] = useState<string>("");

  const getDateTime = () => {
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let day = d.getDate();
    let hour = d.getHours().toString().padStart(2, "0");
    let minute = d.getMinutes().toString().padStart(2, "0");
    setDateTime(year + "/" + month + "/" + day + hour + ":" + minute);
  };

  return (
    <div className="home-page">
      <NoteList
        title={title}
        setTitle={setTitle}
        mainText={mainText}
        setMainText={setMainText}
        dateTime={dateTIme}
        getDateTime={getDateTime}
      />
      <Note
        title={title}
        setTitle={setTitle}
        mainText={mainText}
        setMainText={setMainText}
        dateTime={dateTIme}
        getDateTime={getDateTime}
      />
    </div>
  );
}

export default App;
