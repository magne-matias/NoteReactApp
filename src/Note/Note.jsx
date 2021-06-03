import React, {Component} from 'react'
import './Note.css'

class Note extends Component{
    constructor(props){
        super(props);
        this.noteId=props.noteId;
        this.noteContent=props.noteContent;
    }

    handleRemove(id){
        
        const response= window.confirm ('estas seguro que quieres eliminarlo?')
        if(response){
            this.props.removeNote(id);
        }
        return;
    }

    render(){
        return(
        <div className="Note">
            <span onClick={()=> this.handleRemove(this.noteId)} >{/*evento para cerrar la nota*/}
            &times;</span>{/*lo separamos de esta manera para qu tenga estilo propio*/}
            
            <p>{this.noteContent}</p>
            
        </div>
        )
    }
}

export default Note;