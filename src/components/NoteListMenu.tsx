import "../style/NoteListMenu.css";

type Props = {
  addNote: () => void;
};

const NoteListMenu = ({ addNote }: Props) => {
  return (
    <div className="list-menu">
      <h1>ノート</h1>
      <button onClick={addNote}>追加</button>
    </div>
  );
};
export default NoteListMenu;
