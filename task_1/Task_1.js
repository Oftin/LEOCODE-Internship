import React, { useState, useEffect, useRef} from 'react';
import styled from 'styled-components';

function Task_1() {
    const [count, setCount] = useState(0);

    const colorTable = ['white', 'red', 'blue', 'green', 'pink', 'yellow', 'orange'];

    const indexColorAfterClickButton = count % colorTable.length;

    const Button = styled.button`
        background: ${colorTable[indexColorAfterClickButton]};
    `

    const marginTopRunToBottom = count + 50;

    const PositionButton = styled.p`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: ${marginTopRunToBottom+'px'};
    `
    useEffect(() => {
      document.title = `Kliknięto ${count} razy`;
    });

    const catchRef = useRef(null);
    const catchRefFunction = () => {
        console.log(catchRef.current); // wyświetlenie w consoli: <button class="..."> Klikniej mnie </button>
    };

    return (
      <PositionButton onClick={catchRefFunction}>
        <p>Kliknięto {count} razy</p>
        <Button onClick={() => setCount(count + 1)} ref={catchRef}>
            Kliknij mnie
        </Button>
      </PositionButton>
    );
}

export default Task_1;