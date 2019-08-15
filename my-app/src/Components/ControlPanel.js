import React from 'react'
function ControlPanel(props) {
    return (
        <div className='control'>
            <button onClick={props.prevIndex} disabled={!props.index}>Previous</button>
            <button onClick={props.nextIndex} disabled={props.index >= 24}>Next</button>
        </div>
    )
}
export default ControlPanel;