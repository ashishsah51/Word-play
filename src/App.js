import React from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";


function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" />
      <div className="container my-3">
         <TextForm heading="Enter the text to analyze below"></TextForm>
      </div>
    </>
  );
}

export default App;
