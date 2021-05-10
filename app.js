// --------------------------------------- All Constants / Variables --------------------------------------- // 
const type_color_schemes = { 
    "Bug": "#C6D16E",
    "Dark": "#A29288",
    "Dragon": "#A27DFA",
    "Electric": "#FAE078",
    "Fairy": "#F4BDC9",
    "Fighting": "#D67873",
    "Flying": "#C6B7F5",
    "Fire": "#F5AC78",
    "Ghost": "#A292BC",
    "Grass": "#A7DB8D",
    "Ground": "#EBD69D",
    "Ice": "#BCE6E6",
    "Normal": "#C6C6A7",
    "Poison": "#C183C1",
    "Psychic": "#FA92B2",
    "Rock": "#D1C17D",
    "Steel": "#D1D1E0",
    "Water": "#9DB7F5"
}

const soundtracks = {
    "kanto": {
        0: {name: "Cerulean City", file_path: "soundtrack/kanto/Cerulean City.mp3"},
        1: {name: "Hiwada Town", file_path: "soundtrack/kanto/Hiwada Town.mp3"},
        2: {name: "Pokémon Gym", file_path: "soundtrack/kanto/Pokémon Gym.mp3"},
        3: {name: "Pokémon League", file_path: "soundtrack/kanto/Pokémon League.mp3"},
        4: {name: "Route 1", file_path: "soundtrack/kanto/Route 1.mp3"},
        5: {name: "Tanba City", file_path: "soundtrack/kanto/Tanba City.mp3"},
        6: {name: "Title (HeartGold & SoulSilver)", file_path: "soundtrack/kanto/Title.mp3"}
    },
    "johto": {
        0: {name: "Enju City", file_path: "soundtrack/johto/Enju City.mp3"},
        1: {name: "Friendly Shop", file_path: "soundtrack/johto/New Bark Town.mp3"},
        2: {name: "Hall Of Fame", file_path: "soundtrack/johto/Hall Of Fame.mp3"},
        3: {name: "Indigo Plateau", file_path: "soundtrack/johto/Indigo Plateau.mp3"},
        4: {name: "New Bark Town", file_path: "soundtrack/johto/New Bark Town.mp3"},
        5: {name: "Pokemon Center", file_path: "soundtrack/johto/Pokemon Center.mp3"},
        6: {name: "Rocket Hideout", file_path: "soundtrack/johto/Rocket Hideout.mp3"}
    },
    "hoenn": {
        0: {name: "Kanazumi City", file_path: "soundtrack/hoenn/Kanazumi City.mp3"},
        1: {name: "Minamo City", file_path: "soundtrack/hoenn/Minamo City.mp3"},
        2: {name: "Mt. Chimney", file_path: "soundtrack/hoenn/Mt. Chimney.mp3"},
        3: {name: "Route 101", file_path: "soundtrack/hoenn/Route 101.mp3"},
        4: {name: "Route 110", file_path: "soundtrack/hoenn/Route 110.mp3"},
        5: {name: "Shidake Town", file_path: "soundtrack/hoenn/Shidake Town.mp3"},
        6: {name: "Touka City", file_path: "soundtrack/hoenn/Touka City.mp3"}
    },
    "sinnoh": {
        0: {name: "Kotobuki City (Night)", file_path: "soundtrack/sinnoh/Kotobuki City (Night).mp3"},
        1: {name: "Kurogane City (Day)", file_path: "soundtrack/sinnoh/Kurogane City (Day).mp3"},
        2: {name: "Lake", file_path: "soundtrack/sinnoh/Lake.mp3"},
        3: {name: "Nagisa City (Night)", file_path: "soundtrack/sinnoh/Nagisa City (Night).mp3"},
        4: {name: "Route 201 (Day)", file_path: "soundtrack/sinnoh/Route 201 (Day).mp3"},
        5: {name: "Route 205 (Day)", file_path: "soundtrack/sinnoh/Route 205 (Day).mp3"},
        6: {name: "Route 206 (Night)", file_path: "soundtrack/sinnoh/Route 206 (Night).mp3"}
    },
    "unova": {
        0: {name: "Accumula Town", file_path: "soundtrack/unova/Accumula Town.mp3"},
        1: {name: "Castelia City", file_path: "soundtrack/unova/Castelia City.mp3"},
        2: {name: "Nimbasa City", file_path: "soundtrack/unova/Nimbasa City.mp3"},
        3: {name: "Route 19 (Spring/Summer)", file_path: "soundtrack/unova/Route 19 (Spring & Summer).mp3"},
        4: {name: "Skyarrow Bridge", file_path: "soundtrack/unova/Skyarrow Bridge.mp3"},
        5: {name: "Team Plasma Plots", file_path: "soundtrack/unova/Team Plasma Plots.mp3"},
        6: {name: "The Pokémon League", file_path: "soundtrack/unova/The Pokémon League.mp3"}
    },
    "kalos": {
        0: {name: "Aquacorde Town", file_path: "soundtrack/kalos/Aquacorde Town.mp3"},
        1: {name: "Cyllage City", file_path: "soundtrack/kalos/Cyllage City.mp3"},
        2: {name: "Kalos", file_path: "soundtrack/kalos/Kalos.mp3"},
        3: {name: "Parfum Palace", file_path: "soundtrack/kalos/Parfum Palace.mp3"},
        4: {name: "Route 1 - Vaniville Pathway", file_path: "soundtrack/kalos/Route 1 - Vaniville Pathway.mp3"},
        5: {name: "Santalune City", file_path: "soundtrack/kalos/Santalune City.mp3"},
        6: {name: "Victory Road", file_path: "soundtrack/kalos/Victory Road.mp3"}
    },
    "alola": {
        0: {name: "Festival Plaza (Day)", file_path: "soundtrack/alola/Festival Plaza (Day).mp3"},
        1: {name: "Hau'oli City (Night)", file_path: "soundtrack/alola/Hau'oli City (Night).mp3"},
        2: {name: "Heahea City (Day)", file_path: "soundtrack/alola/Heahea City (Day).mp3"},
        3: {name: "Malie City (Day)", file_path: "soundtrack/alola/Malie City (Day).mp3"},
        4: {name: "Paniola Town (Day)", file_path: "soundtrack/alola/Paniola Town (Day).mp3"},
        5: {name: "Route 2 on Melemele Island", file_path: "soundtrack/alola/Route 2 on Melemele Island.mp3"},
        6: {name: "The Pokémon League", file_path: "soundtrack/alola/The Pokémon League.mp3"}
    }
}

const first_song = 0; // start of playlist
const final_song = 6; // end of playlist

var current_soundtrack;
var current_track; 
const current_track_name = document.getElementsByClassName("title");
var music_playing = false;

const background__music = document.getElementById("background__music");
background__music.addEventListener("ended", next_song);
background__music.volume = 0.1;

var current_view = "inspect";

var team_strength = null
const pokedex__page = document.getElementById("pokedex__page");
const region__page = document.getElementById("hero");
const pokedex = document.getElementById("pokemon__list");
const evolution_chain = document.getElementById('evolution__chain');

// --------------------------------------- Drag and Drop Section --------------------------------------- // 
function onDragStart(event) {
    // Make background dark to highlight where to drag pokemon
    pokedex__page.style.backgroundColor = "#363b3b";

    // Highlight each cell that does not contain a pokemon
    for (var i = 0; i <= 6; i++) {
        var pokemon_cell = document.getElementById("pokemon" + i);
        if (pokemon_cell.childElementCount == 0) {
            pokemon_cell.style.border = "4px solid #54ff82";
        }
    }
    event.dataTransfer.setData("Text", event.target.id);
}

function onDragOver(event) {
    event.preventDefault();
}

function onDrop(event) {
    event.preventDefault();

    // If target cell is empty
    if (event.target.childElementCount == 0) {
        var data = event.dataTransfer.getData("Text");

        // Dragging a pokemon from one slot to another
        if (document.getElementById(data).id.includes("placed")) {
            event.target.appendChild(document.getElementById(data));
        }

        // Dragging from pokedex to an empty slot
        else {
            insert_slot(event.target, data);
        }
    }
}

function onDragEnd() {
    // Reset background to white after drop
    pokedex__page.style.backgroundColor = "white";

    // Reset each cell that does not contain a pokemon
    for (var i = 0; i <= 6; i++) {
        var pokemon_cell = document.getElementById("pokemon" + i);
        pokemon_cell.style.border = "1px solid #000000";
    }
}


// --------------------------------------- Retrieve Pokemon Data Section --------------------------------------- //
function region_page() {
    pokedex__page.className = "hide";
    region__page.className = "none";
    
    clear_inspect();

    for (var i = 0; i <= 6; i++) {
        let slot = document.getElementById("pokemon" + i);
        clear_slot(slot);
    }
    pause_song();
}

function initialize_pokedex_page(region) {
    pokedex.innerHTML = "";
    pokedex__page.className = "none";
    region__page.className = "hide";
    current_soundtrack = region;
    current_track = Math.floor(Math.random() * 6);
    background__music.src = soundtracks[current_soundtrack][current_track]['file_path'];
    // play_song();
}

function retrieve_data(gen, region) {
    initialize_pokedex_page(region);
    fetch("https://pokeapi.co/api/v2/pokedex/" + gen + "/")
    .then(response => response.json())
    .then(data => generate_pokedex(data))
}

async function generate_pokedex(data) {
    const promiseArray = await get_promise_array(data);
    for (var i = 0; i < promiseArray.length; i++) {
        get_pokemon_data(promiseArray[i], i + 1);
    }
}

function get_promise_array(data) {
    var pokedex = data["pokemon_entries"];
    let promiseArray = [];

    for (var i = 0; i < pokedex.length; i++) {
        let pokemon_number = pokedex[i]["pokemon_species"]["url"].replace("https://pokeapi.co/api/v2/pokemon-species/", "").replace("/", "");
        promiseArray.push(fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon_number + "/").then(response => response.json()));
    }
    return Promise.all(promiseArray);
}

function get_pokemon_data(data, entry_number) {
    let pokemon__container = create_pokemon_container();
    pokemon__container.appendChild(get_image(data));
    pokemon__container.appendChild(get_entry_number(entry_number));
    pokemon__container.appendChild(get_name(data, pokemon__container));
    pokemon__container.appendChild(get_types(data));
    pokemon__container.appendChild(create_insert_button(pokemon__container.id));
    pokedex.appendChild(pokemon__container);
}

function create_pokemon_container() {
    let pokemon__container = document.createElement("li");
    pokemon__container.className = "pokemon__container";
    pokemon__container.draggable="true";
    pokemon__container.addEventListener("dragstart", onDragStart);
    pokemon__container.addEventListener("dragend", onDragEnd);
    return pokemon__container;
}

function create_insert_button(pokemon_container) {
    let insert_button = document.createElement("button");
    insert_button.className = "hide insert__button";
    insert_button.onclick = function() {find_slot(pokemon_container);};
    insert_button.textContent = "+";
    return insert_button;
}

function create_clear_button(pokemon_slot) {
    let clear_button = document.createElement("button");
    clear_button.className = "hide clear__button";
    clear_button.onclick = function() {clear_slot(pokemon_slot);};
    clear_button.textContent = "x";
    return clear_button;
}

function get_image(data) {
    let image = document.createElement("img");
    image.className = "pokemon__image";
    image.src = data["sprites"]["front_default"];
    image.draggable="false";
    return image;
}

function get_entry_number(entry_number) {
    let number = document.createElement("div");
    number.className = "pokemon__number";
    number.textContent = "#" + entry_number;
    return number;
}

function get_name(data, pokemon__container) {
    let name = document.createElement("a");
    name.className = "pokemon__name";
    name.innerHTML = data["name"].charAt(0).toUpperCase() + data["name"].slice(1);
    pokemon__container.id = data["name"];
    return name;
}

function get_types(data) {
    let types = document.createElement("div");
    types.id = "pokemon__types";

    for (var i = 0; i < data["types"].length; i++) {
        var type_str = data["types"][i]["type"]["name"];
        type_str = type_str.charAt(0).toUpperCase() + type_str.slice(1);
        type_color = type_color_schemes[type_str];

        var type = document.createElement("div");
        type.style.backgroundColor = type_color;
        type.className = "pokemon__type";
        type.textContent = type_str;
        types.appendChild(type);
    }
    return types;
}

function inspect_screen() {
    current_view = "inspect";
    document.getElementById("inspect__view").className = "none";
    document.getElementById("teambuilder__view").className = "hide";
}

function teambuilder_screen() {
    current_view = "teambuilder";
    document.getElementById("teambuilder__view").className = "none";
    document.getElementById("inspect__view").className = "hide";
}

function search_pokemon() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('pokemon__search');
    filter = input.value.toUpperCase();
    ul = pokedex;
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

function find_slot(pokemon__container) {
    if (current_view == "inspect") {
        let slot = document.getElementById("pokemon0");
        if (slot.childElementCount > 0) {
            clear_slot(slot);
        }
        insert_slot(slot, pokemon__container);
        return;
    } 
    if (current_view == "teambuilder") {
        for (var i = 1; i <= 6; i++) {
            var slot = document.getElementById("pokemon" + i);
            if (slot.childElementCount == 0) {
                insert_slot(slot, pokemon__container);
                return;
            }
        }
    }
}

function clear_inspect() {
    document.getElementById("stat__list-active").className = "hide";
    document.getElementById("stat__list-default").className = "none";
    document.getElementById("move__list").innerHTML = "";
    document.getElementById("pokemon__description").textContent = "";
    evolution_chain.innerHTML = "";
    evolution_chain.className = "hide";
}

function insert_slot(slot, pokemon__container) {
    let original_container = document.getElementById(pokemon__container);
    let datacopy = original_container.cloneNode(true);
    datacopy.id = original_container.id + "placed";
    datacopy.className = original_container.className + "-placed";
    datacopy.draggable="true";
    datacopy.removeChild(datacopy.lastChild);
    datacopy.appendChild(create_clear_button(slot));
    datacopy.addEventListener("dragstart", onDragStart);
    datacopy.addEventListener("dragend", onDragEnd);
    slot.appendChild(datacopy);

    if (slot.id == "pokemon0") {
        fetch_inspect(document.getElementById(pokemon__container));
    }
}

function clear_slot(pokemon_slot) {
    if (current_view == "inspect") {
        clear_inspect();
    }
    pokemon_slot.innerHTML = "";
}

function fetch_inspect(data) {
    var pokedex_entry = data.id.replace("pokemon__container", "");
    pokedex_entry = pokedex_entry.replace("placed", "");

    document.getElementById("stat__list-default").className = "hide"
    document.getElementById("stat__list-active").className = "none";

    fetch("https://pokeapi.co/api/v2/pokemon/" + pokedex_entry + "/")
    .then(response => response.json())
    .then(data => get_inspect_info(data))
}

async function get_inspect_info(data) {
    get_pokemon_stats(data);
    get_pokemon_moves(data);
    let species_info = await get_species_info(data);
    await get_flavor_text(species_info);
    get_evolution_info(species_info);
}

async function get_species_info(data) {
    return fetch(data['species']['url'])
    .then(response => response.json());
}

async function get_pokemon_stats(data) {
    var stats = data["stats"];
    for (var i = 0; i <= stats.length; i++) {
        var stat = stats[i]['base_stat'];
        document.getElementById("stat" + i + "-active").style.width = stat * 2.3 + "px";
        document.getElementById("stat" + i + "-active").textContent = stat;
    }
}

async function get_pokemon_moves(data) {
    var moves = data["moves"];

    for (var i = 0; i <= moves.length; i++) {
        var move = document.createElement("li");
        move.id = "move" + i;
        move.className = "pokemon__move";
        move.textContent = moves[i]['move']['name'] + "\n";
        document.getElementById("move__list").appendChild(move);
    }
}

        // fetch(moves[i]['move']['url'])
        // .then(response => response.json())
        // .then(data => move_data = data)

function get_flavor_text(data) {
    var pokemon__description = document.getElementById("pokemon__description");
    var flavor_text = data['flavor_text_entries'][0]['flavor_text'];
    flavor_text = flavor_text.replace("\f", " ");
    pokemon__description.textContent = flavor_text;
}

async function get_evolution_info(data) {
    fetch(data['evolution_chain']['url'])
    .then(response => response.json())
    .then(data => get_evolution_chain(data))
}

function get_evolution_chain(data) {
    if (data['chain']['evolves_to'].length > 0) {
        evolution_chain.className = "none";
    }

    create_evolution_container(data['chain']['species']['name']);
    for (var i = 0; i < data['chain']['evolves_to'].length; i++) {
        let trigger = document.createElement('div');
        trigger.className = "evolution__trigger";
        trigger.textContent = data['chain']['evolves_to'][i]['evolution_details'][0]['trigger']['name'];
        if (data['chain']['evolves_to'][i]['evolution_details'][0]['trigger']['name'] == "level-up") {
            trigger.textContent += ": " + data['chain']['evolves_to'][i]['evolution_details'][0]['min_level'];
        }
        evolution_chain.appendChild(trigger);
        create_evolution_container(data['chain']['evolves_to'][i]['species']['name']);
    }

    data = data['chain']['evolves_to'][0];
    if (data['evolves_to'].length > 0) {
        for (var i = 0; i < data['evolves_to'].length; i++) {
            let trigger = document.createElement('div');
            trigger.className = "evolution__trigger";
            trigger.textContent = data['evolves_to'][i]['evolution_details'][0]['trigger']['name'];
            if (data['evolves_to'][i]['evolution_details'][0]['trigger']['name'] == "level-up") {
                trigger.textContent += ": " + data['evolves_to'][i]['evolution_details'][0]['min_level'];
            }
            evolution_chain.appendChild(trigger);
            create_evolution_container(data['evolves_to'][i]['species']['name']);
        }
    }
}

function create_evolution_container(pokemon_container) {
    let evolution_container = document.getElementById(pokemon_container).cloneNode(true);
    evolution_container.className = "pokemon__container-placed";
    evolution_container.id = evolution_container.id + "_chain";
    evolution_container.style.display = "block";
    evolution_container.removeChild(evolution_container.lastChild);
    evolution_chain.appendChild(evolution_container);
}


/* ----- Music Section ----- */
function play_song() {
    change_song_title();
    background__music.play();
    music_playing = true;
    toggle_play_pause("music__button", "music__button", "hide", "hide");
}

function pause_song() {
    background__music.pause();
    music_playing = false;
    toggle_play_pause("hide", "hide", "music__button", "music__button");
}

function toggle_play_pause(pause1, pause2, play1, play2) {
    document.getElementById("pause__1").className = pause1;
    document.getElementById("pause__2").className = pause2;
    document.getElementById("play__1").className = play1;
    document.getElementById("play__2").className = play2;
}

function previous_song() {
    if (current_track == first_song) {
        current_track = final_song;
    }
    else {
        current_track -= 1;
    }
    background__music.src = soundtracks[current_soundtrack][current_track]['file_path'];
    play_song();
}

function next_song() {
    if (current_track == final_song) {
        current_track = first_song;
    } 
    else {
        current_track += 1;
    }
    background__music.src = soundtracks[current_soundtrack][current_track]['file_path'];
    play_song();
}

function change_song_title() {
    for (var i = 0; i < current_track_name.length; i++) {
        current_track_name[i].innerHTML = 
        '<i class="fas fa-music"></i> ' + 
        "Currently Playing: " + soundtracks[current_soundtrack][current_track]['name'] + 
        ' <i class="fas fa-music"></i>';
    }
}



const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);