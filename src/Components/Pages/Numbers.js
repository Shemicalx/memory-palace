import React, { useContext, useEffect, useMemo, useState } from 'react'
import { InputsContext } from '../../Contexts/InputsContext'
import { LegendContext } from '../../Contexts/LegendContext'
import '../../Styles/Pages.css'
import NumbersControl from '../Controls/NumbersControl'
import SentenceControl from '../Controls/SentenceControl'
import SpaceControl from '../Controls/SpaceControl'
import StoryControl from '../Controls/StoryControl'
import WordControl from '../Controls/WordControl'

const Numbers = (props) => {
    /*
    numbers -> letters -> words -> words with vowels -> sentences;
    > N is kept as a string. split to get characters
    [1,2,3,4,5]
    > Iterate character array and cross each with the Legend state Object
    [L,M,G,D,C]
    > 
    [LM,GD,C]
    >
    [LIME,GOD,CHAI]
    >
    [I eat a LIME, to summon GOD, so he can drink CHAI with me]

    */
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
    }), [legend, numbers, subdivisions, words, wordsWithVowels, story])

    //initiate a words with vowels array when words are being picked
    useEffect(() => {
        console.log('Words have changed!');
        setWordsWithVowels(()=>Array(words.length).fill(''))
    },[words])
    
    //initiate a story array which is assembled out of every word with vowels
    //surrounded by two empty values in which the inputs changes will go.
    useEffect(() => {
        console.log('WordsWithVowels have changed!');
        setStory(()=> wordsWithVowels.map( word => ['', word, '']))
    },[wordsWithVowels])
    
    return (
        <section>
            <div className="Inputs">
                <InputsContext.Provider value={providerValue}>
                    <NumbersControl />
                    <SpaceControl />
                    <WordControl />
                    <SentenceControl />
                    <StoryControl />
                </InputsContext.Provider>
            </div>
        </section>
    )
}

export default Numbers
