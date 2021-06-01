import React, {Component} from 'react';
import './App.css';

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
                  <li key={note.noteId}>{note.noteContent}</li>//key=para que cada item sea unico.  
                )
              }) 
            }
          </div>
        </ul>

        <div className="notesfooter">

        </div>
      </div>
    );
  }
}

export default App;
