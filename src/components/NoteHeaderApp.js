import React from "react";
import NoteHeaderSearch from "./NoteHeaderSearch";

function NoteHeaderApp ({ search, onSearch }){
    return(
        <div className="note-app__header">
            <h1>Notes</h1>
            <NoteHeaderSearch search={search} onSearch={onSearch}/>
        </div>
    );
}

export default NoteHeaderApp;