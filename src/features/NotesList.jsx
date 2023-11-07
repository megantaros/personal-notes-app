import React from 'react'
import NoteItem from './NoteItem';

const NotesList = ({ data }) => {
    return (
        <>
            <article>
                <h2>Catatan Aktif</h2>
                <div className='notes-list'>
                    {data.filter((item) => !item.archived).map((item) => {
                        return (
                            <NoteItem key={item.id} {...item} />
                        )
                    })}
                </div>
                {data.filter((item) => !item.archived).length === 0 && (
                    <p className='notes-list__empty-message'>
                        Belum ada catatan
                    </p>
                )}
            </article>
            <article>
                <h2>Catatan Arsip</h2>
                <div className='notes-list'>
                    {data.filter((item) => item.archived).map((item) => {
                        return (
                            <NoteItem key={item.id} {...item} />
                        )
                    })}
                </div>
                {data.filter((item) => item.archived).length === 0 && (
                    <p className='notes-list__empty-message'>
                        Belum ada catatan
                    </p>
                )}
            </article>
        </>
    )
}

export default NotesList