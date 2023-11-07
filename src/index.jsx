import React from 'react';
import { createRoot } from 'react-dom/client';

// import style
import './styles/style.css';
import NoteApp from './features/NoteApp';
import { NoteListProvider } from './context/NoteListContext';

const root = createRoot(document.getElementById('root'));
root.render(
    <NoteListProvider>
        <NoteApp />
    </NoteListProvider>
);