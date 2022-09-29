import React from "react";

function NoteItemButton({id, onDelete, onArchive, isArchive}){
    return (
        <div className="note-item__action">
            <button className="note-item__delete-button" onClick={() =>onDelete(id)}>Delete</button>
            <button className="note-item__archive-button" onClick={()=> onArchive(id)}>{isArchive ? 'Pindahkan':'Arsipkan'}</button>
        </div>
    );
}

export default NoteItemButton;