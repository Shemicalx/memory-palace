import React, { useContext } from 'react'
import { LegendContext } from '../../Contexts/LegendContext';

const LegendControl = (props) => {
    
    const { legend, setLegend } = useContext(LegendContext);

    function handleChange(e){
        const update = {...legend};
        const valueToUpdate = e.target.value;
        const numberToUpdate = e.target.id; 
        //make sure the value isnt a number
        if(/^$|[^0-9]/.test(valueToUpdate)){
            update[numberToUpdate] = valueToUpdate;
            setLegend(update);
            return;
        }
    }

    return (
        <div id="legendControl">
            {
                Object.entries(legend).map(([key, value], index) => {
                    return (
                        <label key={index}>
                            {key + ' -'}
                            <input 
                                type="text" 
                                name={key} 
                                id={key} 
                                value={value}
                                onChange={handleChange}
                            />
                        </label>
                    )
                })
            }
        </div>
    )
}

export default LegendControl
