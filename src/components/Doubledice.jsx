export default function Doubledice() {

    const num1 = Math.floor(Math.random() * 6) + 1;
    const num2 = Math.floor(Math.random() * 6) + 1;

    const isWinner = num1 === num2;
    const styles = {color: isWinner? 'green' : 'red'};

    return (
        <>
            <h2 style = {styles}>Double Dice</h2>
            {isWinner && <h3> You Win! </h3>}
            <p>num1 : {num1}</p>
            <p>num1 : {num2}</p>
        </>
    );
}