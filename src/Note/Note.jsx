import React, {Component} from 'react'
import './Note.css'

class Note extends Component{
    constructor(){
        super();
    }

    render(){
        <div className="Note">
            <li>{this.noteId}</li>
        </div>
    }
}

export default Note;