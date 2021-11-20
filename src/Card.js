import React from 'react';

const Card = ({name, email}) => {
    return (
        <div className='tc bg-light-green dib br3 ma2 grow bw2 shadow-5'>
            <img alt='Robert' src={'https://robohash.org/test?200x200'}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;            