import React from 'react';

function Header() {
    return (
        <div className='ui secondary pointing menu header' style={{background: 'linear-gradient(90deg, #672280 1.18%, #A626D3 100%)'}}>
            <div className='left menu'>
                <img
                src='/images/meme-icon.png'
                alt='meme_icon' 
                style={{margin: '20px', height: '50%', width: '40px'}}               
                />
            </div>
            <div className='right menu'>
                <h1 className='item'>MEME Generator</h1>
              
            </div>
            
        </div>

    )
}

export default Header
