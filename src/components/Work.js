import React from 'react';

class Work extends React.Component {
  render() {
    return (
      <div style={{ backgroundImage: "url(images/matrix.gif)", display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', height: 'auto', width: '1000px' }}>
        <div style={{ flexBasis: 'calc(25% - 10px)', boxSizing: 'border-box', padding: '10px' }}>
          <h2 style={{ color: 'white' }}>CALCULATRICE REACT</h2>
          <img src="images/calculatrice.png" alt="" style={{ height: '200px', width: '200px' }} /> <br />
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>lien du dépot</a>
        </div>

        <div style={{ flexBasis: 'calc(25% - 10px)', boxSizing: 'border-box', padding: '10px' }}>
          <h2 style={{ color: 'white' }}>HTML-CSS NATIF</h2>
          <img src="images/comeup.webp" alt="" style={{ height: '200px', width: '275px' }} /> <br />
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>site officiel</a> <br />
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>lien du dépot</a>
        </div>

        <div style={{ flexBasis: 'calc(25% - 10px)', boxSizing: 'border-box', padding: '10px' }}>
          <h2 style={{ color: 'white' }}>INCREMENTATION - DECREMENTATION REACT</h2>
          <img src="images/Creating-Numeric-Increment-Decrement-Component-Using-Reactjs.jpg" alt="" style={{ height: '200px', width: '250px' }} /> <br />
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>lien du dépot</a>
        </div>

        <div style={{ flexBasis: 'calc(25% - 10px)', boxSizing: 'border-box', padding: '10px' }}>
          <h2 style={{ color: 'white' }}>HTML-CSS</h2>
          <img src="images/shelby limited company.jpg" alt="" style={{ height: '200px', width: '250px' }} /> <br />
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>lien du dépot</a>
        </div>

        <div style={{ flexBasis: 'calc(25% - 10px)', boxSizing: 'border-box', padding: '10px' }}>
          <h2 style={{ color: 'white' }}>POMODORO REACT</h2>
          <img src="images/pomodoro.png" alt="" style={{ height: '200px', width: '275px' }} /> <br />
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>lien du dépot</a>
        </div>

        <div style={{ flexBasis: 'calc(25% - 10px)', boxSizing: 'border-box', padding: '10px' }}>
          <h2 style={{ color: 'white' }}>BOOSTRAP</h2>
          <img src="images/strongly typed.png" alt="" style={{ height: '200px', width: '300px' }} /> <br />
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>site officiel</a> <br />
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>lien du dépot</a>
        </div>
      </div>
    );
  }
}

export default Work;
