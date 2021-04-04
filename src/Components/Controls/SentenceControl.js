import React, { useContext } from 'react'
import { InputsContext } from '../../Contexts/InputsContext';

const SentenceControl = (props) => {

    const {wordsWithVowels, setStory, story} = useContext(InputsContext);

    function changeHandler(e, sentenceIndex, wordIndex){
        const text = e.target.value;
        const newStory = [...story];
        newStory[wordIndex][sentenceIndex] = text; 
        setStory(newStory);
    }

    return (
        <div id="sentenceControl">
            {
                wordsWithVowels.map( (word, index) => {
                    return (
                        <div className="display" key={index}>
                            <input onChange={(e)=>changeHandler(e, 0, index)} type="text"/>
                            <span>{word}</span>
                            <input onChange={(e)=>changeHandler(e, 2, index)} type="text"/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SentenceControl
