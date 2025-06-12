import { type Dispatch, type SetStateAction } from "react";

import type { NoteType } from "../Type/NoteType";

import "../style/Note.css";

type Props = {
  notes: NoteType[];
  title: string;
  mainText: string;
  setNotes: Dispatch<SetStateAction<NoteType[]>>;
  setTitle: Dispatch<SetStateAction<string>>;
  setMainText: Dispatch<SetStateAction<string>>;
  selectedId: string;
};

const Note = ({
  notes,
  title,
  mainText,
  setNotes,
  setTitle,
  setMainText,
  selectedId,
}: Props) => {
  return (
    <>
      {selectedId ? (
        <div className="note">
          <input
            value={title}
            onChange={(titleText) => {
              setTitle(titleText.target.value);
              const newNotes = notes.map((note) => {
                return note.id === selectedId
                  ? { ...note, title: titleText.target.value }
                  : note;
              });
              setNotes(newNotes);
            }}
          />
          <textarea
            value={mainText}
            onChange={(mainText) => {
              setMainText(mainText.target.value);
              const newNotes = notes.map((note) => {
                return note.id === selectedId
                  ? { ...note, mainText: mainText.target.value }
                  : note;
              });
              setNotes(newNotes);
            }}
          ></textarea>
        </div>
      ) : (
        <p>ノートが選択されていません</p>
      )}
    </>
  );
};
export default Note;
