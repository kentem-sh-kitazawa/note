import { useEffect, type Dispatch, type SetStateAction } from "react";

import type { NoteType } from "../Type/NoteType";

import "../style/Note.css";

type Props = {
  notes: NoteType[];
  setNotes: Dispatch<SetStateAction<NoteType[]>>;
};

const Note = ({ notes, setNotes }: Props) => {
  // useEffect(() => {
  //   getDateTime();
  //   localStorage.setItem("note", JSON.stringify(note));
  // }, [title]);

  useEffect(() => {
    getDateTime();
    localStorage.setItem("note", JSON.stringify(note));
  }, [mainText]);

  return (
    <div className="note">
      <input
        value={title}
        onChange={(titleText) => setTitle(titleText.target.value)}
      />
      <textarea
        value={mainText}
        onChange={(mainText) => setMainText(mainText.target.value)}
      ></textarea>
    </div>
  );
};
export default Note;
