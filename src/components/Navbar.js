import React from 'react';

class Navbar extends React.Component {
  handleClick = (content) => {
    this.props.onItemClick(content);
  };

  render() {
    return (
      <nav>
        <ul className="navbar" style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: 'black', color: 'white', textDecoration: 'none' }}>
          <li><a href="src/components/Home.js" onClick={() => this.handleClick('Home')} style={{ color: 'white', textDecoration: 'none' }}>HOME</a></li>
          <li><a href="src/components/about.js" onClick={() => this.handleClick('about')} style={{ color: 'white', textDecoration: 'none' }}>ABOUT ME</a></li>
          <li><a href="src/components/Work.js" onClick={() => this.handleClick('Works')} style={{ color: 'white', textDecoration: 'none' }}>WORKS</a></li>
          <li className="navbar-dropdown">
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>CONTACT</a>
            <ul className="dropdown-menu" style={{ color: 'white', textDecoration: 'none' }}>
              <li><a href="#">LINKEDIN</a></li>
              <li><a href="#">WHATSAPP</a></li>
              <li><a href="#">GMAIL</a></li>
            </ul>
          </li>
          <li className="navbar-right"><a href="documents/CV KOUASSI YAO JEAN PAUL DANICK.docx" download style={{ color: 'white', textDecoration: 'none' }}>CV</a></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
