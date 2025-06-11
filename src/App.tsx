import { useState } from "react";

import Note from "./components/Note";
import NoteList from "./components/NoteList";
import NotePreview from "./components/NotePreview";
import ListMenu from "./components/ListMenu";
import "./style/App.css";
import type { NoteType } from "./Type/NoteType";
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
  const [dateTime, setDateTime] = useState<string>("");
  //ノートの管理
  const [prevNote, setPrevNote] = useState<NoteType[]>(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  const getDateTime = () => {
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let day = d.getDate();
    let hour = d.getHours().toString().padStart(2, "0");
    let minute = d.getMinutes().toString().padStart(2, "0");
    setDateTime(year + "/" + month + "/" + day + hour + ":" + minute);
  };

  //ノートを追加する関数
  const addNote = () => {
    getDateTime();
    const note: NoteType = {
      title: title,
      mainText: mainText,
      dateTime: dateTime,
    };
    const prevNotes = localStorage.getItem("notes");
    const parseNotes = prevNotes ? JSON.parse(prevNotes) : [];
    const updateNotes = [...parseNotes, note];
    localStorage.setItem("notes", JSON.stringify(updateNotes));
    setPrevNote(updateNotes);
    setTitle("新しいノート");
    setMainText("");
  };

  return (
    <div className="home-page">
      <ListMenu addNote={addNote} />
      <NoteList
        title={title}
        setTitle={setTitle}
        mainText={mainText}
        setMainText={setMainText}
        dateTime={dateTime}
        getDateTime={getDateTime}
        prevNote={prevNote}
        setPrevNote={setPrevNote}
      />
      <Note
        title={title}
        setTitle={setTitle}
        mainText={mainText}
        setMainText={setMainText}
        dateTime={dateTime}
        getDateTime={getDateTime}
      />
      <NotePreview title={title} mainText={mainText} />
    </div>
  );
}

export default App;
