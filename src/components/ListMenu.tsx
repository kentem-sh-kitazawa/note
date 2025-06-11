import "../style/ListMenu.css";

type Props = {
  addNote: () => void;
};

const ListMenu = ({ addNote }: Props) => {
  return (
    <div className="list-menu">
      <h1>ノート</h1>
      <button onClick={addNote}>追加</button>
    </div>
  );
};
export default ListMenu;
