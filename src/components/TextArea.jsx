import React from 'react'

const TextArea = (props) => {
    return (
        <>
            <textarea className='note-input__body' {...props} />
        </>
    )
}

export default TextArea