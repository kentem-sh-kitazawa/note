import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

type Props = {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  mainText: string;
  setMainText: Dispatch<SetStateAction<string>>;
};

const NoteList = ({ title, setTitle, mainText, setMainText }: Props) => {
  //stateが変更されるとリストの表示も変わる、年月日と時間の表示

  const addNote = () => {
    const note = {
      title: title,
      mainText: mainText,
    };
    const prevNotes = localStorage.getItem("notes");
    const parseNotes = prevNotes ? JSON.parse(prevNotes) : [];
    const updateNotes = [...parseNotes, note];
    localStorage.setItem("notes", JSON.stringify(updateNotes));
    setTitle("新しいノート");
    setMainText("");
  };

  return (
    <div>
      <button onClick={() => addNote()}>追加</button>

      <li>
        <h3>{title}</h3>
        <p>{mainText}</p>
        <p>日時</p>
      </li>
    </div>
  );
};

export default NoteList;
