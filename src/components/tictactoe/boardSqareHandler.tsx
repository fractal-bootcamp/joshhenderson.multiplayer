

type boardSquareHandlerProps = {
    index: number
    board: string[]
    player: string
    setBoard: React.Dispatch<React.SetStateAction<string[]>>
    setPlayer: React.Dispatch<React.SetStateAction<string>>
}

export default function boardSquareHandler({ index, board, player, setBoard, setPlayer }: boardSquareHandlerProps) {
    const togglePlayer = () => {
        setPlayer(player === "X" ? "O" : "X")
    }

    const nextBoard: string[] = board.map((b: string, i) => {
        if (b) { return b }

        if (i === index && board[i] === "") {
            togglePlayer()
            return player // whoever's turn it is
        }
        else return ""
    });
    // function handlePlay 
    setBoard(nextBoard);
}