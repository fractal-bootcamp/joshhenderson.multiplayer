/*
- This component apears on screen when a user clicks on "tic tac toe" it gives the player two button options: "start game" and "join game"
- If a user clicks on start game the setStartLogin function is called and updates the 'startlogin state object key `start` to `true` which renders the name entry component.
-If the user clicks on "join game" they are presented a list of available games to click on and once they click they are presented an input for their name.
-Once they submit their name, the useEffect function in the tic tac toe component is called which sends a post req to the server and creates 
*/
import EnterName from "./StartGame"
import { useState } from "react"


export default function StartLogin(EnterName: Function) {
    const [conditional, setConditional] = useState(0)


    if (conditional === 1) {
        return
        <>
            <div onClick={() => setConditional(1)}>Start game</div>
        </>
    }

}