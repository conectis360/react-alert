import React from "react";
import "./App.css";
import { Alert } from "./Alert.tsx";

function App() {
  return (
    <div className="App">
      <Alert heading="Success">Everything is really good!</Alert>
    </div>
  );
}

export default App;
