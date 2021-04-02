import React, { useEffect, useState } from 'react'
import '../../Styles/Pages.css'
import NumbersControl from '../Controls/NumbersControl'
import SpaceControl from '../Controls/SpaceControl'
import WordControl from '../Controls/WordControl'

const Numbers = (props) => {

    const [ numbers, setNumbers ] = useState('69');
    const [ subdivisions, setSubdivisions] = useState([]);
    const [ legend, setLegend ] = useState({
        0: 's',
        1: 'l',
        2: 'b',
        3: 'g',
        4: 'd',
        5: 'ch',
        6: 'sh',
        7: 'r',
        8: 'm',
        9: 'p',
    });
    
    useEffect(() => {
        console.log(subdivisions, numbers);
    },[numbers, subdivisions])
    
    return (
        <section>
            <div className="Inputs">
                <NumbersControl 
                    numbers={numbers} 
                    setNumbers={setNumbers}
                    setSubdivisions={setSubdivisions}
                />
                <SpaceControl 
                    subdivisions={subdivisions} 
                    setSubdivisions={setSubdivisions} 
                    legend={legend} 
                />
                <WordControl />
            </div>
        </section>
    )
}

export default Numbers
