import Plus from "../icons/Plus";
import { useContext, useRef } from "react";
import { db } from "../appwrite/databases";
import { NoteContext } from "../Context/NoteContext"; // Correct import
import colors from "../assets/colors.json";

const AddButton = () => {
  const { setNotes } = useContext(NoteContext); // Use the corrected context
  const startingPos = useRef(10);

  const addNote = async () => {
    const payload = {
      position: JSON.stringify({
        x: startingPos.current,
        y: startingPos.current,
      }),
      colors: JSON.stringify(colors[0]),
    };
    startingPos.current += 10;

    try {
      const response = await db.notes.create(payload);
      setNotes((prevState) => [response, ...prevState]); // Update notes state
    } catch (error) {
      console.error("Failed to add note:", error);
    }
  };

  return (
    <div id="add-btn" onClick={addNote}>
      <Plus />
    </div>
  );
};

export default AddButton;
