import React, { useContext } from 'react';

const themes={
    light:{
        fg: 'red',
        bg: 'yellow'
    },
    dark:{
        fg:'blue',
        bg:'red'
    }
}
const Mycontex = React.createContext(themes.light);

function  Usecontex(props) {
    const mytheme = useContext(Mycontex)
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        <button style={{background:mytheme.bg,color:mytheme.fg}}>I am styled by theme</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default  Usecontex;