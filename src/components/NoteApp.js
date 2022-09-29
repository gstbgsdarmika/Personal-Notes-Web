import React from "react";
import NoteContent from "./NoteContent";

class NoteApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(event){
        this.setState(() => {
            return {
                search: event.target.value,
            }
        })
    }

    render(){
        return( <NoteContent/>);
    }
}

export default NoteApp;