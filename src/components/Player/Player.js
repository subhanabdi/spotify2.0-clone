import React from 'react';

import Sidebar from '../Sidebar/Sidebar';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

import './Player.css';

function Player({ spotify }) {
    return (
        <div>
            <div className='player'>
                <div className='player__body'>

                    {/* Sidebar */}
                    <Sidebar />

                    {/* Body */}
                    <Body spotify={spotify} />

                </div>

                {/* Footer */}
                <Footer />

            </div>
        </div>
    )
}

export default Player;