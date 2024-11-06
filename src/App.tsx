import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>Hello World</h1>
            <img src="https://th.bing.com/th/id/OIP.CBFZpMOFqyCjyHOJxouwVAHaE8?rs=1&pid=ImgDetMain"alt="pic of some random cat" />
            <ul>
                <li>i am thing one</li>
                <li>i am thing two</li>
                <li>i am thing three</li>
            </ul>

            <Button onClick={ () => { console.log("Hello World!") } }>Log Hello World</Button>
            <Container>
            <Row>
                <Col>rgb(200, 44, 44)</Col>
                <Col>rgb(200, 44, 44)

                </Col>
            </Row>
        </Container>



            <p>
                Edit <code>src/App.tsx</code> and save. ben miller  hello world This page will
                automatically reload.
            </p>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
        </div>
    );
}


export default App;

