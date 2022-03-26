import Button from "./Button";
import TodoList from "./TodoList";
import styled from "./App.module.css";
import {useState, useEffect} from "react";

function App() {
  const [isClick, onIsClick] = useState(false);
  useEffect(() => {
    console.log("Just only one!")
  }, [])
  useEffect(() => {
    console.log('button click')
  }, [isClick])
  return (
    <div>
      <h2 className={styled.title}>{isClick ? 'Hi! User!!' : 'Welcome back to React'}</h2>
      {isClick ? <TodoList /> : null}
      <Button text={'click'} onIsClick={onIsClick} isClick={isClick}/>
    </div>
  );
}

export default App;
