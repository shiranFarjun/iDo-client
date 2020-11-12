import React from 'react';

const DisplayItem = ({ data, onClick, children }) => {
    console.log('data', data);

    const style = {
        border: '1px solid black',
        borderRadius: '10px',
        padding: '5px 10px',
        background: '#e5e5e5'
    }
    const youClick = () => {
        console.log('you click in me to get info');
    }

    return (
        <div
            className='DeckItem item' style={style}
            onClick={youClick}
        >
            <div className="content">
                <div className="header">{data.nameCompany} {data.namePerson} {data.phone}</div>
                <img src={data.avatar}></img>
                {children}
            </div>
        </div>
    )
}
export default DisplayItem;