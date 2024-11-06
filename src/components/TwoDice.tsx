import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return  1+ Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState(d6());
    const [rightDie, setRightDie] = useState(d6());
    


    function rollLeft(){
        const newLeftDie = d6();
        setLeftDie(newLeftDie);;

    }

    function rollRight(){
        const newRightDie = d6();
        setRightDie(newRightDie);
    }

    let message = "";
    if (leftDie == rightDie) {
        if (leftDie ==1){
            message ="Lose";
        }else{
        message ="Win";
        }
    }


    return (
        <div>
            <h2>Two Dice Game</h2>
            <div>

            <span data-testid="left-die">{leftDie}</span>
            <Button onClick={rollLeft}>Roll Left</Button>
        </div>
        <div>

            <span data-testid="right-die">{rightDie}</span>
            <Button onClick={rollRight}>Roll Right</Button>
        </div>

        <div>{message}</div>
        </div>

    );
}
