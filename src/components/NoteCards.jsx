import { useContext } from "react";
import NoteCard from "./NoteCard";
import { NoteContext } from "../Context/NoteContext";
import Controls from "./Controls";
const NoteCards = () => {
  const { notes } = useContext(NoteContext);
  return (
    <div>
     <Controls />
      {notes.map((note) => (
        <NoteCard note={note} key={note.$id} />
      ))}
       
    </div>
  );
};

export default NoteCards;
