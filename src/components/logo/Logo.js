import React from 'react';
import Brain from './brain.png';
import './Logo.css'

const Logo=function(){
    return (
        <div className='ma4 mt0'>
            <div className='Tilt br2 shadow-2'>
                <div className='TiLt-inner'>
                    <img alt="brain" src={Brain}  /></div>
            </div>
        </div>
    )
}

export default Logo;





