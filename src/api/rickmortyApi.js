 export const rickmortyApi =  async() => {

    const api =  await fetch('https://rickandmortyapi.com/api/character')
    const {results} =  await api.json();
    
    return results;

}