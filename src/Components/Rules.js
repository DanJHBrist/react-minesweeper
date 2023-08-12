import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import styled from 'styled-components';

// this pop up modal found at geekforgeeks: https://www.geeksforgeeks.org/how-to-create-popup-box-in-reactjs/
export default function Rules() {

    const Button = styled.button`
        background-color: black;
        color: blue;
        font-size: 16px;
        cursor: pointer;
        &:disabled {
            color: grey;
            opacity: 0.7;
            cursor: default;
        }
    `;

    return (
        <div>
            <Popup trigger=
                {<Button > Click to read rules</Button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                Welcome to Minesweeper. Try to uncover the all the tiles without stepping on any mines.
                                Click on a button, and it will show how many mines surround it.
                                If there are none, a blank area will be revealed. If you click on a mine, you lose!
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                        Click to close
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </div>
    )
};