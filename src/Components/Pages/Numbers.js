import React, { useEffect, useState } from 'react'
import '../../Styles/Pages.css'
import NumbersControl from '../Controls/NumbersControl'
import SpaceControl from '../Controls/SpaceControl'
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
    const [ wordsWithVowels, setWordsWithVowels ] = useState([]); 
    const [ legend, setLegend ] = useState({
        0: 's',
        1: 'l',
        2: 'b',
        3: 'g',
        4: 'd',
        5: 'c',
        6: 'n',
        7: 'r',
        8: 'm',
        9: 'p',
    });
    
    useEffect(() => {
        console.log('Words have changed!');
        setWordsWithVowels(()=>Array(words.length).fill(''))
    },[words])
    
    return (
        <section>
            <div className="Inputs">
                <NumbersControl 
                    numbers={numbers} 
                    legend={legend}
                    setNumbers={setNumbers}
                    setSubdivisions={setSubdivisions}
                    setWordsWithVowels={setWordsWithVowels}
                    setWords={setWords}
                />
                <SpaceControl 
                    subdivisions={subdivisions} 
                    setSubdivisions={setSubdivisions} 
                    setWords={setWords}
                    legend={legend} 
                    />
                <WordControl 
                    legend={legend} 
                    words={words}
                    setWords={setWords}
                    wordsWithVowels={wordsWithVowels}
                    setWordsWithVowels={setWordsWithVowels}
                />
                <WordControl 
                    legend={legend} 
                    words={words}
                    setWords={setWords}
                    wordsWithVowels={wordsWithVowels}
                    setWordsWithVowels={setWordsWithVowels}
                />
            </div>
        </section>
    )
}

export default Numbers
