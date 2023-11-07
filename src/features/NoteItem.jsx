import React, { useContext, useState } from 'react'
import { showFormattedDate } from '../utils'
import { NoteListContext } from '../context/NoteListContext';
import Button from '../components/Button';

const NoteItem = ({ id, title, createdAt, body }) => {
    const date = showFormattedDate(createdAt);
    const { noteList, setNoteList } = useContext(NoteListContext);

    const handleDelete = (id) => {
        confirm(`Apakah Anda yakin ingin menghapus catatan ${title} ?`) && setNoteList(noteList.filter((item) => item.id !== id));
    };

    const handleArchive = (id) => {
        setNoteList(noteList.map((item) => item.id === id ? { ...item, archived: true } : item))
    };

    return (
        <>
            <div className='note-item'>
                <div className="note-item__content">
                    <div className='note-item__title'>
                        <h3>{title}</h3>
                    </div>
                    <div className='note-item__date'>
                        <p>{date}</p>
                    </div>
                    <div className='note-item__body'>
                        <p>{body}</p>
                    </div>
                </div>
                <div className='note-item__action'>
                    <Button className='note-item__delete-button' onClick={() => handleDelete(id)} text="Hapus" />
                    <Button className='note-item__archive-button' onClick={() => handleArchive(id)} text="Arsipkan" />
                </div>
            </div>
        </>
    )
}

export default NoteItem