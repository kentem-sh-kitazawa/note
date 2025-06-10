import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

type Props = {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  mainText: string;
  setMainText: Dispatch<SetStateAction<string>>;
};

type NoteType = {
  title: string;
  mainText: string;
};

const NoteList = ({ title, setTitle, mainText, setMainText }: Props) => {
  //年月日と時間の表示

  //ローカルストレージに保存したノートを保持するステート
  const [prevNote, setPrevNote] = useState<NoteType[]>([]);

  //画面を表示したときにローカルストレージに保存したノートを描画する処理
  useEffect(() => {
    const prevNotes = localStorage.getItem("notes");
    const parseNotes = prevNotes ? JSON.parse(prevNotes) : [];
    setPrevNote(parseNotes);
  }, []);

  const addNote = () => {
    const note: NoteType = {
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
          <p>日時</p>
        </li>
      ))}
    </div>
  );
};

export default NoteList;
