import { createGlobalStyle } from 'styled-components';
import ShareSvg from './Svg/ShareSvg';
import HexagonSvg from './Svg/HexagonSvg';
import Butterfly from './Svg/Butterfly';
import { useState, useEffect } from 'react';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    background-color: #b6b6b6;
  }

  body {
    display: flex;
    height: 100dvh;
    flex-wrap: wrap;
    place-content: center;
    background-color: #000;
    background-image: url(${props => props.bgfoto});
    background-size: 300px;
    transition: background-image 0.5s ease-in-out;
    position: relative;

    @media (width <= 1000px) {
      background-size: 200px;
    }
  }



  @keyframes recorrer {
    0% {
      left: -20%;
    }
    100% {
      left: 120%;
    }
  }

  .container {
    width: 150px;
    height: 150px;
    background-color: transparent;
    border-radius: 50%;
    position: relative;
    
  }

  .share {
    width: 42px;
    height: 42px;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-wrap: wrap;
    place-content: center;
    outline: none;
    border: none;
    box-shadow: inset 0 0 12px 4px #42047e, inset 0 0 8px 0px #42047e;
    z-index: 3;

    &:hover {
      & + .links {
        transform: scale(1) rotate(0deg);
      }
    }

    svg {
      scale: .5;
      aspect-ratio: 1;
      display: flex;
      flex-wrap: wrap;
      place-content: center;
    }
  }


  .links {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom right,
      #affcaf,
      #12dff3
    );
    border-radius: inherit;
    position: relative;
    transition: transform .4s ease;
    transform: scale(0) rotate(-180deg);
    box-shadow: 0 0 8px #0008;

    &:hover {
      transform: scale(1) rotate(0deg);
    }

    .link {
      position: absolute;
      top: 28px;
      background-color: transparent;
      border: none;
      outline: none;
      left: 45px;
      transform: rotate(-30deg);
      transition: scale .3s ease;


      &:nth-child(2) {
        left: 87px;
        top: 28px;
        rotate: 60deg;
      }

      &:nth-child(3) {
        left: 107px;
        top: 65px;
        rotate: 120deg;
      }

      &:nth-child(4) {
        left: 87px;
        top: 100px;
        rotate: 180deg;
      }

      &:nth-child(5) {
        left: 45px;
        top: 100px;
        rotate: 240deg;
      }

      &:nth-child(6) {
        left: 25px;
        top: 64px;
        rotate: 300deg;
      }
    }
  }
`;

const App = () => {
  const [foto, setFoto] = useState('public/n1.avif');

  const handleClick = e => {
    let newFoto = e.target.closest('button').dataset.foto;
    setFoto(`public/n${newFoto}.avif`);
  };

  useEffect(() => {
    const images = [
      'public/n1.avif',
      'public/n2.avif',
      'public/n3.avif',
      'public/n4.avif',
      'public/n5.avif',
      'public/n6.avif'
    ];
    images.forEach(image => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  return (
    <>
      <GlobalStyle bgfoto={foto} />

      <main className='container'>
        <button className='share'>
          <ShareSvg width={35} />
        </button>
        <nav className='links'>
          <HexagonSvg />
          {[1, 2, 3, 4, 5, 6].map((num, ind) => {
            return (
              <button
                key={ind}
                className='link'
                onClick={e => handleClick(e)}
                data-foto={num}
              >
                <Butterfly />
              </button>
            );
          })}
        </nav>
      </main>
    </>
  );
};

export default App;
