import React, { useContext, useState } from 'react'
import HeaderNote from './HeaderNotes'
import NotesList from './NotesList'
import { NoteListContext } from '../context/NoteListContext'
import FormNote from './FormNote'

const NoteApp = () => {

    const { noteList } = useContext(NoteListContext);
    const [search, setSearch] = useState('');
    const [filteredNoteList, setFilteredNoteList] = useState([]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        setFilteredNoteList(noteList.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase())));
    };

    return (
        <>
            <HeaderNote onSearch={handleSearch} />
            <main className='note-app__body'>
                <FormNote />
                {search.length > 0 ? <NotesList data={filteredNoteList} /> : <NotesList data={noteList} />}
            </main>
        </>
    )
}

export default NoteApp