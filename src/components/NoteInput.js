import React from "react";

class NoteInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: '',
            charsLeft: 50,
            maxChar: 50
        }
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const charCount = event.target.value.length;
        const maxChar = this.state.maxChar;
        const charLength = maxChar - charCount;
        this.setState(() => {
            return {
                title: event.target.value,
                charsLeft: charLength
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render(){
        return (
            <div className="note-input">
                <h2>Buat catatan</h2>
                <form onSubmit={this.onSubmitEventHandler}>
                    <p className='note-input__title__char-limit'>Sisa Karakter: {this.state.charsLeft}</p>
                    <input className="note-input__title" type="text" placeholder="Ini adalah judul ..." maxLength={this.state.maxChar} required onChange={this.onTitleChangeEventHandler}/>
                    <textarea className="note-input__body" type="text" placeholder="Tuliskan catatanmu di sini ..." value={this.state.body} required onChange={this.onBodyChangeEventHandler} />
                    <button type="submit">Buat</button>
                </form>
            </div>
        );
    }
}

export default NoteInput;