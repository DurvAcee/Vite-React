export default function Slots({val1, val2, val3}) {
    const isWinner = val1 === val2 && val2 === val3;

    return (
        <>
            <h2>{val1} {val2} {val3}</h2>
            {isWinner && <h2>Congrats!</h2>}
            <h3 style = {{color : isWinner ? 'green' : 'red'}}> {isWinner ? 'You Win!' :  'You Lose!'}</h3>
        </>
    );
}