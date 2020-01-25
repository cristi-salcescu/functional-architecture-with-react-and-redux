import React, { useState } from 'react';

const initialState = false;

function toggleShowMore(showMore){
    return !showMore;
}

function ShowMore({ title, children }){
    const [showMore, setShowMore] = useState(initialState);

    function onToggleShowMore(){
        setShowMore(toggleShowMore);
    }

    return (
        <div>
            <h2>{ title }</h2>
            <div><button onClick={onToggleShowMore} type="button">ShowMore</button></div>
            <div>
                { showMore ? children : "" }
            </div>
        </div>
    )
}

export default ShowMore;