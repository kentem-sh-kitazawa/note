import { useState } from "react";

const Note = () => {
  //タイトルを保持するstate
  const [title, setTitle] = useState<string>("");
  //本文を保持するstate
  const [mainText, setMainText] = useState<string>("");
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
