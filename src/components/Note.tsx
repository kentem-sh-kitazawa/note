import { useState } from "react";

const Note = () => {
  //タイトルを保持するstate
  const [title, setTitle] = useState<string>("");
  //本文を保持するstate
  const [mainText, setMainText] = useState<string>("");
  return <div></div>;
};
