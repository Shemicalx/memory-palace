import React, { useContext } from 'react'
import { InputsContext } from '../../Contexts/InputsContext';

const NumbersControl = (props) => {

    const {setNumbers, setSubdivisions, setWords, legend, numbers} = useContext(InputsContext);

    function handleNumbersChange(e) {
        const change = e.target.value;
        
        function onlyNumbers( string ) {
            const regex = /^[0-9]*$/g;
            return regex.test( string );
        }
        if(onlyNumbers(change)) {
            setNumbers(()=>change);
            setSubdivisions(()=> {
                return change
                    .split('')
                    .join(' ')
                    .split('')
                    .map((v,i) => v === ' ' ? false : v)
            })
            setWords(()=>{
                return [change.replace(/([0-9])/g, (v)=> legend[v])]
            })
            return;
        }
        console.log('Not all are numbers!');
    }

    return (
        <input 
            type="text" 
            name="numbers"
            onChange={handleNumbersChange}
            autoComplete="off"
            value={numbers}
        />
    )
}

export default NumbersControl
