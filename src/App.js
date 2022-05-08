import React, { useState } from "react";
import "./App.css";
import TextForm from "./Components/TextForm";
import { v4 as uuidv4 } from "uuid";
import ToDoList from "./Components/ToDoList";
import Header from "./Components/Header";


function App() {
  const [list, setList] = useState([]);
  const dataHandler = (input) => {
    // console.log(list);
    // console.log(input);
    setList([...list, { title: input, id: uuidv4() }]);
  };
  const deleteHandler = (input) => {
    setList(list.filter((item) => item.id !== input));
  };

  const modalSaveHandler = (inputID, inputTitle) => {
    const idx = list.findIndex( item => item.id===inputID);
    return list.splice(idx, 1, {title: inputTitle, id:inputID});
  };

  return (
    <div className="app">
      <div>
        <Header />
      </div>
      <TextForm query={dataHandler} />
      <div className="container">
        {/* passing the state as props  */}
        <ToDoList clickHandler={deleteHandler} data={list} modalSavehandler={modalSaveHandler} />
      </div>
    </div>
  );
}

export default App;
