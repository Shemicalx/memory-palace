import React, { useContext } from 'react'
import { InputsContext } from '../../Contexts/InputsContext';
import ControlWrapper from './ControlWrapper';

const SpaceControl = (props) => {

    const {subdivisions, setSubdivisions, setWords, legend} = useContext(InputsContext);
    const display = subdivisions.map((item, index) => {
        if(index % 2) {
            return (
                <button 
                    key={index} 
                    className={subdivisions[index] ? 'clicked' : ''}
                    onClick={()=>{
                        setSubdivisions(()=>{
                            let update = [...subdivisions];
                            update[index] = !subdivisions[index];
                            setWords(()=>{
                                let newWords = update.map(v=> {
                                    if( typeof v === "string") {
                                        return legend[v];
                                    }
                                    return v ? ' ' : '';
                                }).join('').split(' ');
                                return newWords;
                            })
                            return update;
                        });
                    }} 
                />
            )
        };
        return (
            <div className="display" key={index}>
                {/* <span>{item}</span>
                <span className="arrow" /> */}
                <span>{legend[item]}</span>
            </div>
        )
    });

    return (
        <ControlWrapper controlName="space">
            <div id="spaceControl">
                {display}
            </div>
            <h3>Click the colored buttons to group sets of characters</h3>
        </ControlWrapper>
    )
}

export default SpaceControl
