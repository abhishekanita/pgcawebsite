import React from 'react'

const SpecificInitiative = (props) => {
    return (
        <div>
            {props.match.params.initiativeName}
        </div>
    )
}

export default SpecificInitiative
