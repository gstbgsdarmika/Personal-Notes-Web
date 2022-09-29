import React from "react";

function NoteHeaderSearch({search, onSearch}){
    return(
        <div className="note-search">
            <input type="text" placeholder="Cari catatan..." value={search} onChange={onSearch} />
        </div>
    );
}

export default NoteHeaderSearch;