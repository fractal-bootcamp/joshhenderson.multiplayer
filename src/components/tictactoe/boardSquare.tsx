interface BoardSquareProps {
    buttonValue?: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function BoardSquare({ buttonValue, onClick }: BoardSquareProps) {
    return (
        <>
            <button style={{ color: "red", width: '4em', height: '4em', border: '1px white', backgroundColor: 'white' }} onClick={onClick} value={buttonValue}>{buttonValue}</button>
        </>
    )
}