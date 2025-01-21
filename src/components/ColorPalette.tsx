import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Colors from '../constants/colors';

const ColorPalette = () => {
  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Color Palette</h2>
      <div className="row justify-content-center">
        {Object.entries(Colors).map(([name, hex]) => (
          <div key={name} className="col-4 col-md-2 text-center mb-4">
            <div
              className="rounded-circle mx-auto"
              style={{
                width: '70px',
                height: '70px',
                backgroundColor: hex,
                border: '2px solid #ddd',
              }}
            />
            <small style={{color: 'red'}}>{name}</small>
            <div style={{color: 'red'}}>{hex}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
