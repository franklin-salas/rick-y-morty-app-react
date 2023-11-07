
export const Characters = ( {characters,clearApi}) => {

  const salir = () => {
    clearApi();
  }
  return (
    <div className="characters">
      <h1>Personajes </h1>
      <span className="back-home" onClick={salir}> Volver al home </span>
      <div className="container-characters">
        {characters.map( (character, index) => (
          <div className="character-container" key={index}>
             <div>
              <img src={character.image} alt={character.image}/> 
            </div>

            <div>
              <h3>{character.name}</h3>
              <h6>
                {
                  character.status==='Alive'? (
                    <>
                    <span> <i className="alive"></i>Alive</span>
                    </>
                  ):
                  (
                    <>
                    
                    <span> <i className="dead"></i>Dead</span>
                    </>
                  )
                }
              </h6>
              <p>
                <span className="text-grey">Episodios: </span>
                <span>{character.episode.length}</span>
              </p>

              <p>
                <span className="text-grey">Especie: </span>
                <span>{character.species}</span>
              </p>

            </div>


             </div>
        ))}
      </div>
      <span className="back-home" onClick={salir}> Volver al home </span>
    </div>
  )
}
