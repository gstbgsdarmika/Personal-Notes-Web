import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import NoteHeaderApp from "./NoteHeaderApp";
import {getInitialData, showFormattedDate} from "../utils/index";

class NoteContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes: getInitialData(),
            search: '',
        }
        this.onSearch = this.onSearch.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchivedHandler = this.onArchivedHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onDeleteHandler(id){
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes});
    }

    onArchivedHandler(id){
        const notes = this.state.notes.map((note) =>note.id === id ? {...note, archived: !note.archived} :note) 
        this.setState({notes});
    }

    onAddNoteHandler({title, body}){
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        createdAt: showFormattedDate(new Date()),
                        body,
                        archived: false,
                    }
                ]
            }
        });
    }

    onSearch(event) {
        this.setState(() => {
            return {
                search: event.target.value,
            }
        })
    }

    render(){
        const notes = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.search.toLowerCase()));
        const notArchived = notes.filter((note) => {
            return note.archived === false
        });
        const archived = notes.filter((note) => {
            return note.archived === true
        });
        
        return( 
        <>
            <NoteHeaderApp search={this.state.search} onSearch={this.onSearch}/>
            <div className="note-app__body">
                <NoteInput addNote={this.onAddNoteHandler} />
                <h2>Catatan Aktif</h2>
                {notArchived.length > 0 ? <NoteList keyword={this.state.keyword} notes={notArchived} onDelete={this.onDeleteHandler} onArchive={this.onArchivedHandler}/>
                    : <p className="notes-list__empty-message">Tidak Ada catatan</p>}
                <h2>Arsip</h2>
                {archived.length > 0 ? <NoteList keyword={this.state.keyword} notes={archived} onDelete={this.onDeleteHandler} onArchive={this.onArchivedHandler}/>
                    : <p className="notes-list__empty-message">Tidak Ada catatan</p>}
            </div>
        </>
        );
    }
}

export default NoteContent;