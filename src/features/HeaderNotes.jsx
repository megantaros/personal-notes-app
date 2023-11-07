import React from 'react'
import Input from '../components/input'

const HeaderNote = ({ onSearch }) => {
    return (
        <>
            <header className='note-app__header'>
                <h1>Notes App</h1>
                <Input placeholder="Cari catatan..." onChange={onSearch} />
            </header>
        </>
    )
}

export default HeaderNote