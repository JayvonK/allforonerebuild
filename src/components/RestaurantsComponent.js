import React from 'react';
import { useState } from 'react';
import { RestaurantPickerApi } from '../Services/DataServices.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function RestaurantsComponent() {
    let disappearDiv = document.getElementById("disappearDiv");
    let results = document.getElementById("results");
    let input1 = document.getElementById("input1");

    const [numOne, setNumOne] = useState('');
    const [result, setResult] = useState('');
    const [runBtn, setRunBtn] = useState('RUN');

    const runBtnClick = async () => {
        if (numOne !== '') {
            if (runBtn === "RUN") {
                setResult('');
                const ans = await RestaurantPickerApi(numOne);
                disappearDiv.classList.add("d-none");
                results.classList.remove("d-none");
                setResult(ans);
                setRunBtn('AGAIN');
            } else {
                input1.value = "";
                setNumOne('');
                disappearDiv.classList.remove("d-none");
                results.classList.add("d-none");
                setRunBtn('RUN');
            }
        } else {
            alert("Please Fill in the input fields");
        }
    }
    return (
        <div className='homeBg'>
            <Row className='g-0'>
                <Col xs={1}></Col>
                <Col xs={10}>
                    <div className='boxDiv'>
                        <div className='apiBox d-flex justify-content-center align-items-center'>
                            <div id='disappearDiv' className='d-flex w100 flow justify-content-center align-items-center'>
                                <h1 className='eightBallTxt jost'>CATEGORY</h1>
                                <input id='input1' onChange={(e) => setNumOne(e.target.value)} className='inputEightBall' placeholder='Seafood?'></input>
                            </div>
                            <h1 id='results' className='eightBallResult d-none'>{result}</h1>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <button id='runBtn' onClick={() => runBtnClick()} className='runBtn'>{runBtn}</button>
                    </div>
                    <p className='darkBlue apiRules'>*Instructions: Input two numbers above to get the sum</p>
                </Col>
                <Col xs={1}></Col>
            </Row>

        </div>
    )
}
