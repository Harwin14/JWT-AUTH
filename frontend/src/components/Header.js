import React from 'react';

function Header({ judul, tombol }) {
    return (
        <div>
            <h1>{judul ? 'welcome to my App' : 'Title Changed'}</h1>
            <button onClick={() => tombol()}>Change title</button>
        </div>
    );
}

export default Header;
