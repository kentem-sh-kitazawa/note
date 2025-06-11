type Props = {
  title: string;
  mainText: string;
};

const NotePreview = ({ title, mainText }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{mainText}</p>
    </div>
  );
};

export default NotePreview;
