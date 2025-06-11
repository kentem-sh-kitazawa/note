type Props = {
  addNote: () => void;
};

const ListMenu = ({ addNote }: Props) => {
  return (
    <div>
      <h2>ノート</h2>
      <button onClick={() => addNote()}>追加</button>
    </div>
  );
};
export default ListMenu;
