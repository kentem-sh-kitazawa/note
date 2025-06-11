import { useEffect, type Dispatch, type SetStateAction } from "react";

import type { NoteType } from "../Type/NoteType";
import "../style/Note.css";

type Props = {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  mainText: string;
  setMainText: Dispatch<SetStateAction<string>>;
  dateTime: string;
  getDateTime: () => void;
};

const Note = ({
  title,
  setTitle,
  mainText,
  setMainText,
  dateTime,
  getDateTime,
}: Props) => {
  const note: NoteType = {
    title: title,
    mainText: mainText,
    dateTime: dateTime,
  };

  useEffect(() => {
    if (localStorage.getItem("note")) {
      const prevNote = localStorage.getItem("note");
      const parseNote = prevNote ? JSON.parse(prevNote) : [];
      console.log(parseNote);
    }
  }, []);

  useEffect(() => {
    getDateTime();
    localStorage.setItem("note", JSON.stringify(note));
  }, [title]);

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
