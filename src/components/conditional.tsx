import { useState } from "react"
import Tictactoe from "./tictactoe/tictactoe"

type OptionsProps = {
    condition: number
}

function Options({ condition }: OptionsProps) { // Props need to be an object and a type such as number string boolean. React.FC is not needed 
    //components can simply be imported and used
    if (condition === 1) {
        return <><Tictactoe /></>
    }
    if (condition === 2) {
        return <div>two</div>
    }
    else if (condition === 3) {
        return <div>three</div>
    }
    else return <div>switch options</div>
};

export default function Conditional() {
    const [condition, setCondition] = useState<number>(1)

    return ( //JSX needs to be on the same line as the return statement or inside of parenthesis !!!!!!
        //onClick takes a function!!!!
        <>
            <Options condition={condition} />
            <button onClick={() => setCondition(1)}>one</button>
            <button onClick={() => setCondition(2)}>two</button>
            <button onClick={() => setCondition(3)}>three</button>
        </>
    )
};