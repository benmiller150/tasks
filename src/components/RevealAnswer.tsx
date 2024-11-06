import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState(false);

    const changeVisibility = () => {
        setVisible(!visible);
    };



    return(
        <div>
            {/* button reveals answer */}
            <Button onClick={changeVisibility}>
                Reveal Answer
            </Button>
            {visible ? <p>42</p> : null}


        </div>
    );
}
