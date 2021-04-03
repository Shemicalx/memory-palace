import React from 'react'

const NumbersControl = (props) => {

    function handleNumbersChange(e) {
        const change = e.target.value;
        
        function onlyNumbers( string ) {
            const regex = /^[0-9]*$/g;
            return regex.test( string );
        }
        if(onlyNumbers(change)) {
            props.setNumbers(()=>change);
            props.setSubdivisions(()=> {
                return change
                    .split('')
                    .join(' ')
                    .split('')
                    .map((v,i) => v === ' ' ? false : v)
            })
            props.setWords(()=>{
                return [change.replace(/([0-9])/g, (v)=> props.legend[v])]
            })
            // props.setWordsWithVowels(()=>{
            //     return [change.replace(/([0-9])/g, (v)=> props.legend[v])]
            // })
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
            value={props.numbers}
        />
    )
}

export default NumbersControl
