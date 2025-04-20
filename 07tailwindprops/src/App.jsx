import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";
//prop is everything used while calling a component

function App() {
  let myObj1 = {
    name: "hello",
    date: 2025,
  };

  let myObj2 = {
    name: "world",
    date: 2026,
  };

  let myObj3 = {
    name: "myWorld",
    date: 2027,
  };

  return (
    <>
      <h1 className="bg-green-500 text-black p-30 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card channel="chaiaurcode" object={myObj1}></Card>
      <Card channel="codewithharry" object={myObj2}></Card>
      <Card channel="brocode" object={myObj3}></Card>
    </>
  );
}

export default App;
