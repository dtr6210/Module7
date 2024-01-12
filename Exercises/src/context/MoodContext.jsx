import { useContext, createContext, useState } from "react";

const MoodContext = createContext();

export const MoodProvider = (props) => {
  const [mood, setMood] = useState("😊");

  const handleMoodChange = () => {
    let newMood = mood === "😎" ? "😱" : mood === "😱" ? "😷" : "😎";
    setMood(newMood);
  };

  return (
    <MoodContext.Provider value={{ mood, handleMoodChange }}>
      {props.children}
    </MoodContext.Provider>
  );
};

export const useMoodContext = () => {
  return useContext(MoodContext);
};
