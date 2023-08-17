import React from "react";
import { Route, Routes } from "react-router-dom";
import { Message } from "./components/Message";

function App() {
  return (
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Message />} />
      </Routes>
    </React.StrictMode>
  );
}

export default App;
