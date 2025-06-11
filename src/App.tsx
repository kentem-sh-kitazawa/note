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
  //ノートの管理
  const [notes, setNotes] = useState<NoteType[]>([]);
  //選択されているノートのインデックス
  const selectIndex = useRef(0);

  const getDateTime = () => {
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate();
    const hour = d.getHours().toString().padStart(2, "0");
    const minute = d.getMinutes().toString().padStart(2, "0");
    return year + "/" + month + "/" + day + hour + ":" + minute;
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
      <div className="side-bar">
        <ListMenu addNote={addNote} />
        <NoteList notes={notes} setNotes={setNotes} />
      </div>
      <div className="note-editor">
        <Note notes={notes} setNotes={setNotes} />
        {/* <NotePreview title={title} mainText={mainText} />  */}
      </div>
    </div>
  );
}

export default App;
