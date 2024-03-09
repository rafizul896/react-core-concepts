import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Counter from './Counter'
import Player from './Player'
import Users from './Users'
import Friends from './Friends'

function App() {
  function handelClick(){
    alert('Button One was Clicked!')
  }

  const handelClick2 = () => {
    alert('Button two was clicked!');
  }

  const handelClick4 = (num) => {
    alert(num + 10)
  }

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Player></Player>
      <h2>React Core consepts</h2>
      <Counter></Counter>
      <button onClick={handelClick}>Click 1</button>
      <button onClick={handelClick2}>Click 2</button>
      <button onClick={()=>{alert('Button third was clicked!')}}>Click 3</button>
      <button onClick={()=>handelClick4(9)}>Click 4</button>
      <Users></Users>
      <Friends></Friends>
    </>
  )
}

export default App
