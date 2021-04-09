import React, { useContext, useEffect, useMemo, useState } from 'react'
import { InputsContext } from '../../Contexts/InputsContext'
import { LegendContext } from '../../Contexts/LegendContext'
// import { useLocation } from 'react-router-dom' 
import '../../Styles/Numbers.css'
import ControlVisualFocus from '../Controls/ControlVisualFocus'
import NumbersControl from '../Controls/NumbersControl'
import SentenceControl from '../Controls/SentenceControl'
import SpaceControl from '../Controls/SpaceControl'
import StoryControl from '../Controls/StoryControl'
import WordControl from '../Controls/WordControl'

const Numbers = (props) => {
    const [ numbers, setNumbers ] = useState('');
    //numbers convert to characters with booleans in between
    //to mark spaces in <SpaceControl>
    const [ subdivisions, setSubdivisions] = useState([]);
    //characters and spaces convert to words in <WordsControl>
    //and modified with vowels
    const [ words, setWords ] = useState([]);
    //words with vowels are stored seperately in a different state.
    // they are being used in the final step to complete the story.
    const [ wordsWithVowels, setWordsWithVowels ] = useState([]);
    //The story is the final result from mixing wordsWithVowels and 
    //the input values from their sides 
    const [ story, setStory ] = useState([]);

    const [ currentInput, setCurrentInput ] = useState('numbers');

    const { legend } = useContext(LegendContext);
    
    const providerValue = useMemo(()=> ({
        legend,
        numbers, 
        setNumbers, 
        subdivisions,
        setSubdivisions,
        words, 
        setWords,
        wordsWithVowels,
        setWordsWithVowels, 
        story,
        setStory,
        setCurrentInput,
    }), [legend, numbers, subdivisions, words, wordsWithVowels, story])

    //initiate a words with vowels array when words are being picked
    useEffect(() => {
        setWordsWithVowels(()=>Array(words.length).fill(''))
    },[words])
    
    //initiate a story array which is assembled out of every word with vowels
    //surrounded by two empty values in which the inputs changes will go.
    useEffect(() => {
        setStory(()=> wordsWithVowels.map( word => ['', word, '']))
    },[wordsWithVowels])

    //Make sure all changes accordingly when the legend is being modified
    useEffect(() => {
        setWords(()=> [numbers.replace(/([0-9])/g, (v)=> legend[v])]);
    },[legend])

    
    return (
        <section className="Inputs">
            <InputsContext.Provider value={providerValue}>
                {/* <h2></h2> */}
                <NumbersControl />
                <SpaceControl />
                <WordControl />
                <SentenceControl />
                <StoryControl />
            </InputsContext.Provider>

            <ControlVisualFocus currentInput={currentInput} />
        </section>
    )
}

export default Numbers
