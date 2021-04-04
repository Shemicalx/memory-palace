import React, { useContext } from 'react'
import { InputsContext } from '../../Contexts/InputsContext';

const WordControl = (props) => {
    
    const {words, wordsWithVowels, setWordsWithVowels} = useContext(InputsContext);
    const vowels = /[aeiou]/ig;

    function handleChange(e, i){
        const newValue = e.target.value;
        console.log(newValue);
        const allowedCharacters = words[i].split('');
        const vowels = '[aeiouy]*';
        //Horrifying RegExp for -
        //empty string |
        //vowels at start | 
        //original characters in order with possible vowels in between
        const condition = new RegExp('^$|^' + vowels + '$|^(' + vowels + allowedCharacters.join(vowels + '(') + vowels + ')?'.repeat(allowedCharacters.length) + '$', 'gi');
        if(condition.test(newValue)){
            let newWords = [...wordsWithVowels];
            newWords[i] =  newValue;
            setWordsWithVowels(newWords);
            return;
        }
        console.log('Not a valid charachter');
    }

    return (
        <div id="wordControl">
            {words.map(((word, index)=> {
                return (
                    <div className="display" key={index}>
                        <span>{word}</span>
                        <span className="arrow"></span>
                        <input 
                            type="text" 
                            value={wordsWithVowels[index]}
                            onChange={(e)=>handleChange(e,index)} 
                        />
                    </div>
                )
            }))}
        </div>
    )
}

export default WordControl
