import React, { useContext } from 'react'
import { InputsContext } from '../../Contexts/InputsContext';
import ControlWrapper from './ControlWrapper';

const StoryControl = (props) => {
 
    const {story} = useContext(InputsContext);
    const sentences = story.map( a => {
        const [ pre, word, post ] = a;
        if( pre === '' && post === '' ) {
            return '';
        }
        return (
            <p class="story">
                {pre + ' '}
                <span className="emphasisedWord">
                    {word}
                </span>
                {' ' + post}
            </p>
        );
    });

    return (
        <ControlWrapper controlName="story">
            <div id="storyControl">
                {sentences}
            </div>
            <h3>Visualize the story you created and remember it forever!</h3>
        </ControlWrapper>
    )
}

export default StoryControl
