import React, { useState } from 'react';

const MAX = 255;
let red =  Math.floor(Math.random() * MAX);
let green =  Math.floor(Math.random() * MAX);
let blue =  Math.floor(Math.random() * MAX);

let firstStateSquareStyle = {
    backgroundColor: 'black',
    width: '250px', 
    height: '250px'
};

let secondStateSquareStyle = {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    width: '250px', 
    height: '250px'
};

const FirstStateSquare = ({propStyle, action, doubleClickAction}) => {
    return(<div style={ propStyle } onMouseOver={ action } onDoubleClick= { doubleClickAction }></div>)
}

const SecondStateSquare = ({propStyle, action, doubleClickAction}) => {
    return(<div style={ propStyle } onMouseOver={ action } onDoubleClick= { doubleClickAction }></div>)
}

//return(<div style={ propStyle } onMouseOver={ action } onDoubleClick= { doubleClickAction }></div>)

const Square = () => {

    const [styleSquare, setSquare] = useState(true);

    let squarePainted;

    let onMouseHoverSquare = () => {
        setSquare(!styleSquare);
    };

    let doubleClickAction = () => {
        setSquare(styleSquare)
    }

    if(styleSquare) {
        squarePainted = <FirstStateSquare action={ onMouseHoverSquare } propStyle = { firstStateSquareStyle } doubleClickAction={ doubleClickAction}></FirstStateSquare> 
    }else {
        squarePainted = <SecondStateSquare action={ onMouseHoverSquare } propStyle = { secondStateSquareStyle } doubleClickAction={ doubleClickAction}></SecondStateSquare>
    }

    return (
        <div >
            { squarePainted }
        </div>
    );
}

export default Square;
