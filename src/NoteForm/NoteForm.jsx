import React, { Component } from 'react'
import './NoteForm.css'

class NoteForm extends Component{
    constructor(){
        super();
        this.addNote=this.addNote.bind(this);//aumenta el scope
    }

    addNote(){//evento para el boton
    this.props.addNote(this.textInput.value)
    }


    render(){
        return(
        <div className="NoteForm">
            <input ref={input => {this.textInput=input;}} placeholder="escribe una nota" type="text"/>
            <button onClick={this.addNote}>
                Add Note
            </button>
        </div>
        )
        
    }
}

export default NoteForm;