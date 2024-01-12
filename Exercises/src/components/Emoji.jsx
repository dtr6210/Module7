import { useState } from "react";
import { useMoodContext } from "../context/MoodContext";


function Emoji() {
  // const [mood, setMood] = useState("😊");
  const{ mood, handleMoodChange} = useMoodContext();
  console.log(mood);

  // const handleMoodChange = () => {
  //   let newMood = "😎";
  //   if (mood === "😎") {
  //     newMood = "😱";
  //   } else if (mood === "😱") {
  //     newMood = "😷";
  //   }

  //   setMood(newMood);
  // };

  return (
    <div className="emoji-container">
        <div className="emoji">
      Current Mood: {mood}
      <button onClick={handleMoodChange}>Click and change me!</button>
      </div>
    </div>
  );
}

export default Emoji;
