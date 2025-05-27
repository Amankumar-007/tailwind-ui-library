import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="title">
          <p className="heading">MONOCHROMIA</p>
          <p className="desc">palette reference</p>
        </div>
        <div className="wrapper">
          <div className="color black">
            black
            <span className="hex">#000000</span>
          </div>
          <div className="color eerie-black">
            eerie-black
            <span className="hex">#1b1b1b</span>
          </div>
          <div className="color chinese-black">
            chinese-black
            <span className="hex">#141414</span>
          </div>
          <div className="color night-rider">
            night rider
            <span className="hex">#2e2e2e</span>
          </div>
          <div className="color chinese-white">
            chinese-white
            <span className="hex">#e1e1e1</span>
          </div>
          <div className="color anti-flash-white">
            anti-flash-white
            <span className="hex">#f3f3f3</span>
          </div>
          <div className="color white">
            white
            <span className="hex">#ffffff</span>
          </div>
          <div className="border">common border radius <span>5px | 8px</span></div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 400px;
    height: 350px;
    --black: #000000;
    --ch-black: #141414;
    --eer-black: #1b1b1b;
    --night-rider: #2e2e2e;
    --white: #ffffff;
    --af-white: #f3f3f3;
    --ch-white: #e1e1e1;
    font-family: Helvetica, sans-serif;
  }

  .wrapper {
    margin: 2rem auto;
    width: 250px;
    font-size: small;
  }

  .title {
    text-align: center;
    color: #1b1b1b;
  }

  .heading {
    font-weight: bold;
    letter-spacing: 7px;
    font-size: 1.5rem;
    position: relative;
    margin-bottom: 6px;
  }

  .heading::before {
    content: '';
    position: absolute;
    inset: 0;
    background: #e8e8e8;
    z-index: -1;
    filter: blur(50px);
    height: 50px;
  }

  .color {
    padding: 10px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .hex {
    text-align: end;
    font-family: monospace;
    text-transform: uppercase;
  }

  .black {
    background: var(--black);
    color: var(--ch-white);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .eerie-black {
    background: var(--ch-black);
    color: var(--ch-white);
  }

  .chinese-black {
    background: var(--eer-black);
    color: var(--ch-white);
  }

  .night-rider {
    background: var(--night-rider);
    color: var(--ch-white);
  }

  .chinese-white {
    background: var(--ch-white);
    color: var(--night-rider);
  }

  .anti-flash-white {
    background: var(--af-white);
    color: var(--night-rider);
  }

  .white {
    background: var(--white);
    color: var(--night-rider);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .border {
    color: var(--night-rider);
    padding: 10px 10px;
    text-align: center;
  }

  .border span {
    border-radius: 5px;
    color: var(--ch-white);
    padding: 2px 4px;
    background-color: var(--night-rider);
  }`;

export default Card;
