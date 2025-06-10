import { type Dispatch, type SetStateAction } from "react";

type Props = {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  mainText: string;
  setMainText: Dispatch<SetStateAction<string>>;
};

const NoteList = ({ title, setTitle, mainText, setMainText }: Props) => {
  //stateが変更されるとリストの表示も変わる、年月日と時間の表示
  return (
    <div>
      <li>
        <h3>{title}</h3>
        <p>{mainText}</p>
        <p>日時</p>
      </li>
    </div>
  );
};

export default NoteList;
