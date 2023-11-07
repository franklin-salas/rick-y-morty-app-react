import { useState } from 'react';
import inicioImg from './img/rick-morty.png';
import './App.css';
import { rickmortyApi } from './api/rickmortyApi';
import { Characters } from './components/Characters';

function App() {

  const [characters, setCharacters] = useState([]);


  const reqApi = async () => {
    const data = await rickmortyApi();
    setCharacters(data);

  }

  const clear = () => {
    setCharacters([]);

  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {
          characters.length != 0? ( <Characters characters={characters} clearApi= {clear}/>

          ) :(
            <>
              <img src={inicioImg} className="img-home" alt="logo rick & morty" />
              <button onClick={reqApi} className='btn-search'>
                Buscar Personajes
              </button>
            </>
          )
        }

      </header>
    </div>
  );
}

export default App;
