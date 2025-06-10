import { useEffect, type Dispatch, type SetStateAction } from "react";

import type { NoteType } from "../Type/NoteType";

type Props = {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  mainText: string;
  setMainText: Dispatch<SetStateAction<string>>;
};

const Note = ({ title, setTitle, mainText, setMainText }: Props) => {
  return (
    <div>
      <input
        value={title}
        onChange={(titleText) => setTitle(titleText.target.value)}
      />
      <textarea
        value={mainText}
        onChange={(mainText) => setMainText(mainText.target.value)}
      ></textarea>
      <h2>{title}</h2>
      <p>{mainText}</p>
    </div>
  );
};
export default Note;
