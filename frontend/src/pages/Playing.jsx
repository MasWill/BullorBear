import './styles/index.css';
import './styles/playing.css';
import React from 'react'

const Playing = () => {
    return (
        <div className='playing-content'>
            <div className='playing-center'> mayybe </div>
            <div className='row'>
                <div className='playing-bg'>
                    <p className="text-light" style={{fontSize:"32px"}}>has</p>
                    <p className="text-light" style={{fontSize:"32px"}}></p>
                </div>
                <div className='playing-bg-2'>
                    <p className="text-light" style={{fontSize:"32px"}}>is</p>
                </div>
            </div>
            
        </div>
        

    )
}

export default Playing