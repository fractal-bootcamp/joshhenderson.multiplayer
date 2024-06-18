import { FC, ReactElement, useState, useEffect } from "react";
import boardSquareHandler from "./boardSqareHandler";
import StartGame from "./StartGame";

// type TicTacToeProps = {
//     StartGame: React.FC
//     //gameName: string

// }
// { StartGame }: TicTacToeProps

export default function Tictactoe() {
    // const [board, setBoard] = useState([])
    const [player, setPlayer] = useState({ player1: "player 1", player2: "player 2" })
    //const [conditionals, SetConditionals] = useState({ gameMenu: false, enterName: false })
    // const [coordinates, setCoordinates] = useState({ xAxis: 3, yAxis: 3 })
    //const [gameName, setGameName] = useState("")

    // useEffect(() => {
    //     async function Get() {
    //         const response = await fetch(`{filepath}`);
    //         const test = await response.json();
    //         console.log("test")
    //     }
    //     Get()
    // },
    //     //[gameName]);



    return <>
        <StartGame setPlayer={setPlayer} />
    </>

}
//{player && <div>{player1} v {player2}</div>}