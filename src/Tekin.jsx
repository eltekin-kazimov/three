import React from 'react';


function Tekin(props){
    return (
        <div>
            <button onClick={() => props.incrementAge()}> Artir </button>
        </div>
    );
}

export default Tekin;