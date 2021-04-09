import React from 'react'

const Saved = () => {
    return (
        <section>
            <h2>Here are your saved mnemonics!</h2>
            <p>
                Here will be stored all of the saved mnemonics. Maybe instead of viewing the stories connected to locations in the memory palace section it could all be visible here.<br/>
                This will be based on one of two systems -
                <ul>
                    <li>Category/search system. e.g - I finish formatting a phone number and I keep it under 'Phone Numbers'. Then here, all categories will be displayed.</li>
                    <li>Location system. e.g - I finish formatting a phone number and tie it to a location in my memory palace. In addition, there will be an uncatagorized box, with all the stories not connected to any location yet.</li>
                    <li>A mixture of the two. For now I believe this to be the best solution.</li>
                </ul>
            </p>
        </section>
    )
}

export default Saved
