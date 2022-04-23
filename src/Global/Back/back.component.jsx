import React from "react";

const Back = () => {
    return (
        <div onClick={() => window.location.assign('/')} className='volver'>Volver</div>
    );
}

export default Back;