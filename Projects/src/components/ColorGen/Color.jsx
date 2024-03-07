

import './styles.css';
import { useState, useEffect } from 'react';

function Color() {
  const [color, setColor] = useState('#000');
  const [typeOfColor, setTypeOfColor] = useState('rgb');

  function utility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateHex() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
      hexColor += hex[utility(hex.length)];
    }

    return hexColor;
  }

  function handleCreateRgb() {
    const r = utility(256);
    const g = utility(256);
    const b = utility(256);

    return `rgb(${r},${g}, ${b})`;
  }

  useEffect(() => {
    if (typeOfColor === 'rgb') {
      setColor(handleCreateRgb());
    } else {
      setColor(handleCreateHex());
    }
  }, [typeOfColor]);

  return (
    <div className="box" style={{ background: color }}>
      <div className='buttons'>
        <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
        <button onClick={() => setTypeOfColor("random")}>Generate Random Color</button>
      </div>
      <div className='color'>
        <h5>{color}</h5>
      </div>
    </div>
  );
}

export default Color;
