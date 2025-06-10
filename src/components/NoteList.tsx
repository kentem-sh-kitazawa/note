type Props = {
  title: string;
  mainText: string;
};

const NoteList = ({ title, mainText }: Props) => {
  //stateが変更されたときにローカルストレージに保存する
  //ローカルストレージに配列として保存→その配列をmapで展開
  //stateが変更されるとリストの表示も変わる、年月日と時間の表示
  //追加を押したときに新しく作成、stateをリセット
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
