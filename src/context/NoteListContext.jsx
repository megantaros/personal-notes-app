import React, { createContext, useState } from "react";
import { getInitialData } from "../utils";

const NoteListContext = createContext();

const NoteListProvider = ({ children }) => {
    const [noteList, setNoteList] = useState(getInitialData());

    return (
        <NoteListContext.Provider value={{ noteList, setNoteList }}>
            {children}
        </NoteListContext.Provider>
    );
};

export { NoteListContext, NoteListProvider };