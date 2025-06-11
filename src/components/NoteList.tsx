import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

import type { NoteType } from "../Type/NoteType";

import "../style/NoteList.css";

type Props = {
  notes: NoteType[];
  setNotes: Dispatch<SetStateAction<NoteType[]>>;
};

const NoteList = ({ notes, setNotes }: Props) => {
  return (
    <ul className="note-list">
      {notes.map((note, index) => (
        <li className="note-items" key={index}>
          <div className="note-heder">
            <h3>{note.title}</h3>
            <button
              onClick={() => {
                const newNotes = [...notes];
                newNotes.splice(index, 1);
                setNotes(newNotes);
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
