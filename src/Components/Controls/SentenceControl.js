import React, { useContext } from 'react'
import { InputsContext } from '../../Contexts/InputsContext';
import ControlWrapper from './ControlWrapper';

const SentenceControl = (props) => {

    const {wordsWithVowels, setStory, story} = useContext(InputsContext);

    function changeHandler(e, sentenceIndex, wordIndex){
        const text = e.target.value;
        const newStory = [...story];
        newStory[wordIndex][sentenceIndex] = text; 
        setStory(newStory);
    }

    return (
        <ControlWrapper controlName="sentence">
            <div id="sentenceControl">
                {
                wordsWithVowels[0] ? wordsWithVowels.map( (word, index) => {
                        return (
                            <div className="display" key={index}>
                                <input 
                                    onChange={(e)=>changeHandler(e, 0, index)} 
                                    type="text" 
                                    value={story[index] ? story[index][0] : 'Oi' } 
                                    />
                                <span>{word}</span>
                                <input 
                                    onChange={(e)=>changeHandler(e, 2, index)} 
                                    type="text" 
                                    value={story[index] ? story[index][2] : 'Oi' } 
                                />
                            </div>
                        )
                    }) : ""
                }
            </div>
            <h3>Write before/after each word to create a connected story</h3>
        </ControlWrapper>
    )
}

export default SentenceControl
