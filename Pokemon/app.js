const pokemonname = document.querySelector('.pokemon_name');
const pokemonnumber = document.querySelector('.pokemon_number');
const pokemonimage = document.querySelector('.pokemon_image');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');
const buttonprev = document.querySelector('.btn-prev');
const buttonnext = document.querySelector('.btn-next');

let searhpokemon = 1;

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if(APIResponse.status == 200) {
        const data = await APIResponse.json();
        return data;
    }
}

const renderpokemon = async (pokemon) => {
    
    pokemonname.innerHTML = 'Loading....';
    pokemonnumber.innerHTML = '';

    const data = await fetchPokemon(pokemon)

    if(data){
        pokemonimage.style.display = 'block';
        pokemonname.innerHTML = data.name;
        pokemonnumber.innerHTML = data.id;
        pokemonimage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

        input.value = ''; 
        searhpokemon = data.id; 
    } else {
        pokemonimage.style.display = 'none';
        pokemonname.innerHTML = 'Not Found :C';
        pokemonnumber.innerHTML = '';
    }
    
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderpokemon(input.value.toLowerCase());
})

buttonprev.addEventListener('click', () => {
    if(searhpokemon > 1){
        searhpokemon -= 1;
        renderpokemon(searhpokemon);
    }
})

buttonnext.addEventListener('click', () => {
    searhpokemon += 1;
    renderpokemon(searhpokemon);
})

renderpokemon(searhpokemon);