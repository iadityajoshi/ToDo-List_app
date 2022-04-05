import React, {useState} from 'react'
import logo from "./logo.svg";
import "./App.css";
import TextForm from "./Components/TextForm";
import {v4 as uuidv4} from 'uuid'
import ToDoList from './Components/ToDoList';
import Header from './Components/Header';


function App() {
  const [list, setList] = useState([]);
  const dataHandler = (input) => {
    // console.log(list);
    // console.log(input);
    setList([...list, {title: input, id: uuidv4()} ]);
  }

  return (
    <div className="app">
      <div><Header/></div>
      <TextForm query={dataHandler} />
      <div className='container'>
        <ToDoList data = {list} />
      </div>
    </div>
  );
}

export default App;