'use strict'
import React, { useState, useEffect } from "react";
import "./App.css";
import TextForm from "./Components/TextForm";
import { v4 as uuidv4 } from "uuid";
import ToDoList from "./Components/ToDoList";
import Header from "./Components/Header";


function App() {
  //lazy initialization of state value
  const [list, setList] = useState(() => {
    const savedList = localStorage.getItem("todoList");
    return savedList ? JSON.parse(savedList) : [];
  });

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(list));
  }, [list]);

  const dataHandler = (input) => {
    setList([...list, { title: input, id: uuidv4() }]);
  };

  const deleteHandler = (input) => {
    setList(list.filter((item) => item.id !== input));
  };

  const modalSaveHandler = (inputID, inputTitle) => {
    //idx is index of li element on which edit button was clicked
    const idx = list.findIndex( item => item.id===inputID);

    //using splice method to reach upto that index(idx),delete that element and replace it with edited text
     list.splice(idx, 1, {title: inputTitle, id:inputID});
  };

  return (
    <div className="app">
      <div>
        <Header />
      </div>
      <TextForm query={dataHandler} />
      <div className="container">
        {/* passing the state as props  */}
        <ToDoList clickHandler={deleteHandler} data={list} modalSaveHandler={modalSaveHandler} />
      </div>
    </div>
  );
}

export default App;
