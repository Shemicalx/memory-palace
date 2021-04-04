import React, { useContext } from 'react'
import { InputsContext } from '../../Contexts/InputsContext';

const StoryControl = (props) => {
 
    const {story} = useContext(InputsContext);
    const sentences = story.map( a => a.join(' '));

    return (
        <div id="storyControl">
            {sentences.join(' ')}
        </div>
    )
}

export default StoryControl
