import React from 'react'

const SpaceControl = (props) => {

    const {subdivisions, setSubdivisions, legend} = props;
    const display = subdivisions.map((item, index) => {
        if(index % 2) {
            return (
                <button key={index}>
                    {subdivisions[index]}
                </button>
            )
        };
        return (
            <div className="display" key={index}>
                <span>{item}</span>
                <span className="arrow" />
                <span>{legend[item]}</span>
            </div>
        )
    });

    return (
        <div id="spaceControl">
            {display}
        </div>
    )
}

export default SpaceControl
