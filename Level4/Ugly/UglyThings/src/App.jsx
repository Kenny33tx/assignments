import { useState } from "react";


import "./App.css";
import UglyForm from "./components/UglyForm";
import Uglylist from "./components/Uglylist";

function App() {
  return (
    <>
      <UglyForm />
      <Uglylist />
    </>
  );
}

export default App;
