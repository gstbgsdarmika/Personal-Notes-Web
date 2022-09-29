import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemButton from "./NoteItemButton";

function NoteItem({title, createdAt, body, id, onDelete, onArchive, isArchive}){
    return (
        <div className="note-item">
            <NoteItemContent title={title} date={createdAt} body={body} />
            <NoteItemButton id={id} onDelete={onDelete} onArchive={onArchive} isArchive={isArchive} />
        </div>
    );
}

export default NoteItem;