const API_1 = "https://pokeapi.co/api/v2/pokemon/id";
const select = document.querySelector("#selector");

async function generarTarjeta(pokemon) {
    let infoPokemon = await fetch(pokemon.url);
    infoPokemon = await infoPokemon.json();
    infoHabilidad = await fetch(infoPokemon.abilities[0].ability.url);
    infoHabilidad = await infoHabilidad.json();
    document.querySelector("#pesonajes").innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${infoPokemon.sprites.front_default}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${infoPokemon.name}</h5>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    `;
}


async function obtenerInfoApi(api) {
    const resultado = await fetch(api);
    const info = await resultado.json();
    info.results.forEach(generarTarjeta);
}

obtenerInfoApi(API_1);