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
  prevNote: NoteType[];
  setPrevNote: Dispatch<SetStateAction<NoteType[]>>;
};

const NoteList = ({
  title,
  setTitle,
  mainText,
  setMainText,
  dateTime,
  getDateTime,
  prevNote,
  setPrevNote,
}: Props) => {
  //画面を表示したときにローカルストレージに保存したノートを描画する処理
  useEffect(() => {
    const prevNotes = localStorage.getItem("notes");
    const parseNotes = prevNotes ? JSON.parse(prevNotes) : [];
    setPrevNote(parseNotes);
  }, []);

  return (
    <ul className="note-list">
      <li className="note-items">
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
        <li className="note-items" key={index}>
          <div className="note-heder">
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
          </div>
          <p>{note.mainText}</p>
          <p className="update-date-time">{note.dateTime}</p>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
