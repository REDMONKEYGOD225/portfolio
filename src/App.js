import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/about';
import Work from './components/Work';

import backgroundImage from './components/images/matrix.gif';

function App() {
  const [activeContent, setActiveContent] = useState('home');

  const handleNavItemClick = (content) => {
    setActiveContent(content.toLowerCase());
  };

  const appStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    // Ajoute d'autres styles de positionnement et de dimensionnement selon tes besoins
  };

  return (
    <div className="App" style={appStyle}>
      <Navbar onItemClick={handleNavItemClick} />
      {activeContent === 'home' ? <Home /> : null}
      {activeContent === 'about' ? <About /> : null}
      {activeContent === 'work' ? <Work /> : null}
    </div>
  );
}

export default App;
