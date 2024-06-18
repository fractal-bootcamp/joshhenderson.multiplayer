/* 
-This component allows a player to enter their name and click on a submit button which calls a setState function.
-The setState function updates the playerName state object for player 1 and triggers the useEffect function.
-the useEffect function in the "TicTacToe" component sends out a post request which, if valid, creates a player object on the back end.
- The server then sends back a fresh board and updates the board state client side and renders the board on screen. 
- The player can then make a move or wait for the next player to enter the game
*/
import { useState } from "react"

type StartGameProps = {
    setPlayer: React.Dispatch<React.SetStateAction<{
        player1: string;
        player2: string;
    }>>
    //setGameName: React.Dispatch<React.SetStateAction<string>>
}

export default function StartGame({ setPlayer }: StartGameProps) {
    const [_submit, setSubmit] = useState(false)
    const [input1, setInput1] = useState("")
    const [input2, setInput2] = useState("")

    function handleFirstInput(firstInputValue: string) { setInput1(firstInputValue) }

    function handleSecondInput(secondInputValue: string) { setInput2(secondInputValue) }

    function handleSubmit(input1: string, input2: string) {

        setPlayer(player => ({ ...player, player1: input1 }));
        setPlayer(player => ({ ...player, player2: input2 }));
        setSubmit(true);
    }

    return (
        <>
            <input type="text" onChange={(e) => handleFirstInput(e.target.value)} />
            <input type="text" onChange={(e) => handleSecondInput(e.target.value)} />
            <button onClick={() => handleSubmit(input1, input2)}>Submit</button>
        </>
    )
}
