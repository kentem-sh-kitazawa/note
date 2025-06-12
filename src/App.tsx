import { useEffect, useState } from "react";

import Note from "./components/Note";
import NoteList from "./components/NoteList";
import NoteListMenu from "./components/NoteListMenu";
import NotePreview from "./components/NotePreview";
import type { NoteType } from "./Type/NoteType";

import "./style/App.css";
function App() {
  //ノートの管理
  const [notes, setNotes] = useState<NoteType[]>(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedId, setSelectedId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [mainText, setMainText] = useState<string>("");

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
    const newNote: NoteType = {
      id: new Date().toISOString(),
      title: "新しいノート",
      mainText: "",
      dateTime: getDateTime(),
    };
    setNotes((prev) => [newNote, ...prev]);
    setSelectedId(newNote.id);
  };

  useEffect(() => {
    const selectedNote = notes.find((note) => {
      return note.id === selectedId;
    });
    setTitle(selectedNote?.title ?? "");
    setMainText(selectedNote?.mainText ?? "");
  }, [notes, selectedId]);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    const hasTargetId = notes
      .map((note) => note.id)
      .find((id) => selectedId !== "" && id === selectedId);
    if (!hasTargetId) {
      setSelectedId("");
    }
  }, [notes, selectedId]);

  return (
    <div className="home-page">
      <div className="side-bar">
        <NoteListMenu addNote={addNote} />
        <NoteList
          notes={notes}
          selectedId={selectedId}
          setNotes={setNotes}
          setSelectedId={setSelectedId}
        />
      </div>
      <div className="note-editor">
        <Note
          notes={notes}
          setNotes={setNotes}
          title={title}
          setTitle={setTitle}
          mainText={mainText}
          setMainText={setMainText}
          selectedId={selectedId}
        />
        <NotePreview title={title} mainText={mainText} />
      </div>
    </div>
  );
}

export default App;
