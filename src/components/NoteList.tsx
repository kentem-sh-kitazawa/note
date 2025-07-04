import { type Dispatch, type SetStateAction } from "react";

import type { NoteType } from "../Type/NoteType";

import "../style/NoteList.css";

type Props = {
  notes: NoteType[];
  setNotes: Dispatch<SetStateAction<NoteType[]>>;
  setSelectedId: Dispatch<SetStateAction<string>>;
};

const NoteList = ({ notes, setNotes, setSelectedId }: Props) => {
  const tmp = (note: NoteType) => {
    const newNotes = notes.filter((newNote) => {
      return note.id !== newNote.id;
    });
    setNotes(newNotes);
  };
  return (
    <ul className="note-list">
      {notes.map((note) => (
        <li
          className="note-items"
          key={note.id}
          onClick={() => {
            setSelectedId(note.id);
          }}
        >
          <div className="note-heder">
            <h3>{note.title}</h3>
            <button onClick={() => tmp(note)}>削除</button>
          </div>
          <p>{note.mainText}</p>
          <p className="update-date-time">{note.dateTime}</p>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
