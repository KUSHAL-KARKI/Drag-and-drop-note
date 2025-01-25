import React from "react";
import NoteCards from "./components/NoteCards";
import NoteProvider from "./Context/NoteContext";

const App = () => {
  return (
    <div id="app">
      <NoteProvider>
      <NoteCards />
      </NoteProvider>

      
    </div>
  );
};

export default App;
