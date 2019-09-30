window.request = {
    //llamando a todos los personajes desde el ap
    allCharacters: async() => {
        data = await fetch('https://rickandmortyapi.com/api/character/?name=rick&status=alive');
        return data.json();
    }
}