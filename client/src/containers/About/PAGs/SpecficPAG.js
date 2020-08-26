import React from 'react'

const SpecficPAG = (props) => {
    return (
        <div>
            {props.match.params.groupName}
        </div>
    )
}

export default SpecficPAG
