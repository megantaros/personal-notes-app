import React, { useContext, useState } from 'react'
import Input from '../components/input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import { NoteListContext } from '../context/NoteListContext';

const FormNote = () => {

    const { noteList, setNoteList } = useContext(NoteListContext);

    const initialState = {
        id: '',
        title: '',
        body: '',
        createdAt: Date.now(),
        archived: false,
    };

    const [form, setForm] = useState(initialState);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })

        if (e.target.body !== '') {
            const charLimit = 50;
            const charCount = e.target.value.length;
            const charLeft = charLimit - charCount;
            document.querySelector('.note-input__title__char-limit').innerText = `Sisa karakter: ${charLeft}`;
        }

        if (e.target.body === '') {
            document.querySelector('.note-input__title__char-limit').innerText = `Sisa karakter: 50`;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setNoteList([...noteList, { ...form, id: +new Date() }]);
        alert('Berhasil menambahkan catatan!');
    };

    return (
        <>
            <form className='note-input' onSubmit={handleSubmit}>
                <h2 className='note-input__title'>Catatan baru</h2>
                <p className='note-input__title__char-limit'></p>
                <Input placeholder='Judul catatan' onChange={handleChange} name="title" />
                <TextArea placeholder='Isi catatan' onChange={handleChange} name="body" />
                <Button text='Buat' />
            </form>
        </>
    )
}

export default FormNote