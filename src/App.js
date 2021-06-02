import React, {Component} from 'react';
import './App.css';

import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';

class App extends Component{

//para guardar notas en el estado vamos a iniciar el constructor
  constructor() {
    super();//metodo super: heredamos todas las propiedades que nos da esta clase de component
    this.state={ //se va a encargar de almacenar los datos de nuestra app
      notes:[//array de objetos ya que cad nota sera un objeto
        {noteId: 1, noteContent: 'note 1'},
        {noteId: 2, noteContent: 'note 2'}
      ]
    }
      this.addNote=this.addNote.blind(this);//para el scope
  }

  removeNote(){//

  }
  //APP.js s encarga de almacenarlo y eliminarlo ya que posee los datos(note:[{noteID,etc}])

  addNote(note){// se encarga de almacenar los datos en el constructor
    let {notes} = this.state;
    note.push({//me permite insertar datos
      noteId: notes.legth +1,//ya que es un arreglo usamos legth y el +1 es para crear de cierta manera un nuevp id
      noteContent: note
    });
    this.setState({notes});
  }

  render() {
    return (
      <div className="notescontainer">

        <div className="notesheader">
          <h1>React NOTE APP</h1>
        </div>

        <ul>
          <div className="notesbody">
            {//las llaves son para interpretar js
              this.state.notes.map(note => {//desde el estado de la app quiero las notas y recorrerlas atraves del map
                return(
                  <Note 
                  noteContent={note.noteContent}
                  noteId={note.noteId}
                  key={note.noteId}
                  />
                  )
              }) 
            }
          </div>
        </ul>

        <div className="notesFooter">
            <NoteForm addNote={this.addNote} />
        </div>
      </div>
    );
  }
}

export default App;
