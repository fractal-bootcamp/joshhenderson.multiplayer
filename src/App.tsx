import { useState, useEffect } from 'react'
import Tictactoe from './components/tictactoe/tictactoe'
import Options from './components/conditional'
import Conditional from './components/conditional'
const filePath = "http://localhost:3000"


function App() {

  const [playerName, setPlayerName] = useState({ player1: "", player2: "" })
  const [gameType, setGame] = useState("")
  const [show, setShow] = useState(false)


  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? 'Close Game' : 'Play Game'}
      </button>
      {show && <Conditional />}
    </>
  )
}

export default App

