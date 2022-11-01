import React from 'react';
import './index.css'

function Header() {
  return (
      <header>
        <div className='main'>
            <div className='center'>
                <div className='logo'>
                    <h3>Ca<a>N</a>dido</h3>
                </div>
               <div className='menu'>
                    <ul>
                        <a href='#'><span>Home</span></a>
                        <a href='#'><span>Sobre</span></a>
                        <a href='#'><span>Contato</span></a>
                        <a href='#'><span>Cases</span></a>
                        <a href='#'><span>Skills</span></a>
                    </ul>
                </div>
            </div>
        </div>
        </header>
    )
}

export default Header;