const allAreEqualAndValid = (position: string[]) => {
    // are the values in here and are they all equal to each other
    const validSqare = ["X", "O"]
    return validSqare.includes(position[0]) && position[0] === position[1] && position[1] === position[2]
}

type winStatus = (board: string[]) => string
function winStatus(board: string[]) { //if any of these conditions are met then there is a winner
    //0
    if (allAreEqualAndValid([board[0], board[1], board[2]])) {
        return <>
            <div>"winner is " + {board[0]}</div>
            <button onClick={() => window.location.reload()}>Play Again</button>
        </>
    }//3
    if (allAreEqualAndValid([board[3], board[4], board[5]])) {
        return <>
            <div>"winner is {board[3]}"</div>
            <button onClick={() => window.location.reload()}>Play Again</button>
        </>
    }
    if (allAreEqualAndValid([board[6], board[7], board[8]])) {
        return <>
            <div>"winner ism {board[6]}"</div>
            <button onClick={() => window.location.reload()}>Play Again</button>
        </>
    }
    if (allAreEqualAndValid([board[0], board[3], board[6]])) {
        return <>
            <div>"winner is {board[0]}"</div>
            <button onClick={() => window.location.reload()}>Play Again</button>
        </>
    }
    if (allAreEqualAndValid([board[1], board[4], board[7]])) {
        return <>
            <div>"winner is {board[1]}"</div>
            <button onClick={() => window.location.reload()}>Play Again</button>
        </>
    }
    if (allAreEqualAndValid([board[2], board[5], board[8]])) {
        return <>
            <div>"winner is {board[2]}"</div>
            <button onClick={() => window.location.reload()}>Play Again</button>
        </>
    }
    if (allAreEqualAndValid([board[0], board[4], board[8]])) {
        return <>
            <div>"winner is {board[0]}"</div>
            <button onClick={() => window.location.reload()}>Play Again</button>
        </>
    }
    if (allAreEqualAndValid([board[2], board[4], board[6]])) {
        return (
            <>
                <div>"winner is {board[2]}"</div>
                <button onClick={() => window.location.reload()}>Play Again</button>
            </>

        )
    }
    else {
        return "No one has won yet!"
    }
};