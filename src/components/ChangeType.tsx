import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";



export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question")

    const toggleType = () =>{
        if (type === "short_answer_question"){
        setType("multiple_choice_question")
        }
        else{
            setType("short_answer_question");
        }
    };


    return (
        <div>
        <Button onClick = {toggleType}>Change Type</Button>

        {type === "short_answer_question" ? (
            <p>Current Type: Short Answer</p>
        ):(
            <p>Current Type: Multiple Choice</p>

        )}
        </div>
    )}
