import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

import type { NoteType } from "../Type/NoteType";
import "../style/NoteList.css";

type Props = {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  mainText: string;
  setMainText: Dispatch<SetStateAction<string>>;
  dateTime?: string;
  getDateTime: () => void;
};

const NoteList = ({
  title,
  setTitle,
  mainText,
  setMainText,
  dateTime,
  getDateTime,
}: Props) => {
  //画面を表示したときにローカルストレージに保存したノートを描画する処理
  useEffect(() => {
    const prevNotes = localStorage.getItem("notes");
    const parseNotes = prevNotes ? JSON.parse(prevNotes) : [];
    setPrevNote(parseNotes);
  }, []);

  return (
    <div className="note-list">
      <li>
        <h3>{title}</h3>
        <button
          onClick={() => {
            //保留
          }}
        >
          削除
        </button>
        <p>{mainText}</p>
        <p>{dateTime}</p>
      </li>
      {prevNote.map((note, index) => (
        <li key={index}>
          <h3>{note.title}</h3>
          <button
            onClick={() => {
              setPrevNote((prev) => {
                const prevNotes = [...prev];
                prevNotes.splice(index, 1);
                localStorage.setItem("notes", JSON.stringify(prevNotes));
                return prevNotes;
              });
            }}
          >
            削除
          </button>
          <p>{note.mainText}</p>
          <p>{note.dateTime}</p>
        </li>
      ))}
    </div>
  );
};

export default NoteList;
