// --------------------------------------- All Constants / Variables --------------------------------------- // 

const type_color_schemes = { // source: https://bulbapedia.bulbagarden.net/wiki/Category:Type_color_templates
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
    "Water": "#9DB7F5"}

// source for all soundtracks: https://downloads.khinsider.com/search?search=pokemon
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
var current_track = Math.floor(Math.random() * 6);
var current_track_name = document.getElementsByClassName("song__title");
var music_playing = false;

var background__music = document.getElementById("background__music");
background__music.addEventListener("ended", next_song);
background__music.volume = 0.2;

var team_strength = null
var pokedex__page = document.getElementById("pokedex__page");
var region__page = document.getElementById("hero");
var pokedex = document.getElementById("pokemon__list");

// --------------------------------------- Drag and Drop Section --------------------------------------- // 
function onDragStart(event) {
    // Make background dark to highlight where to drag pokemon
    pokedex__page.style.backgroundColor = "#363b3b";

    // Highlight each cell that does not contain a pokemon
    for (var i = 0; i <= 6; i++) {
        var pokemon_cell = document.getElementById("pokemon" + i);
        if (pokemon_cell.childElementCount <= 1) {
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

    // If target cell does not already have a pokemon in it
    if (event.target.childElementCount == 1) {
        var data = event.dataTransfer.getData("Text");

        // Dragging a pokemon from one slot to another
        if (document.getElementById(data).id.includes("placed")) {
            event.target.appendChild(document.getElementById(data));
        }

        // Dragging from pokedex to an empty slot
        else {
            var datacopy = document.getElementById(data).cloneNode(true);
            datacopy.id = document.getElementById(data).id + "placed";
            datacopy.draggable="true";
            datacopy.addEventListener("dragstart", onDragStart);
            datacopy.addEventListener("dragend", onDragEnd);
            event.target.appendChild(datacopy);
        }
    }
    if (event.target.id == "pokemon0") {
        fetch_inspect(document.getElementById(data));
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
    pokedex__page.style.display = "none";
    region__page.style.display = "block";
    
    for (var i = 0; i <= 6; i++) {
        clear_slot(i);
    }
}

function retrieve_data(gen, region) {
    pokedex__page.style.display = "flex";
    pokedex.innerHTML = "";
    region__page.style.display = "none";
    current_soundtrack = region;

    fetch("https://pokeapi.co/api/v2/pokedex/" + gen + "/")
    .then(response => response.json())
    .then(data => get_pokemon_numbers(data))

    play_song();
}

function get_pokemon_numbers(data) {
    var pokedex = data["pokemon_entries"];
    for (var i = 0; i < pokedex.length; i++) {
        var pokemon_number = pokedex[i]["pokemon_species"]["url"].replace("https://pokeapi.co/api/v2/pokemon-species/", "").replace("/", "");
        fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon_number + "/")
        .then(response => response.json())
        .then(data => get_pokemon_data(data))
    }
}

function get_pokemon_data(data) {
    pokemon__container = create_pokemon_container(data);
    pokemon__container.appendChild(get_image(data));
    pokemon__container.appendChild(get_entry_number(data));
    pokemon__container.appendChild(get_name(data));
    pokemon__container.appendChild(get_types(data));
    pokedex.appendChild(pokemon__container);
}

function create_pokemon_container(data) {
    var pokemon__container = document.createElement("li");
    pokemon__container.className = "pokemon__container";
    pokemon__container.id = "pokemon__container" + data["id"];
    pokemon__container.draggable="true";
    pokemon__container.addEventListener("dragstart", onDragStart);
    pokemon__container.addEventListener("dragend", onDragEnd);
    return pokemon__container;
}

function get_image(data) {
    var image = document.createElement("img");
    image.className = "pokemon__image";
    image.src = data["sprites"]["front_default"];
    image.draggable="false";
    return image;
}

function get_entry_number(data) {
    var number = document.createElement("div");
    number.className = "pokemon__number";
    number.textContent = "#" + data["id"];
    return number;
}

function get_name(data) {
    var name = document.createElement("a");
    name.className = "pokemon__name";
    name.innerHTML = data["name"].charAt(0).toUpperCase() + data["name"].slice(1);
    return name;
}

function get_types(data) {
    var types = document.createElement("div");
    types.id = "pokemon__types";

    for (var i = 0; i < data["types"].length; i++) {
        var type_str = data["types"][i]["type"]["name"];
        type_str = type_str.charAt(0).toUpperCase() + type_str.slice(1);
        type_color = type_color_schemes[type_str];

        var type = document.createElement("div");
        type.style.backgroundColor = type_color;
        type.id = "pokemon__type";
        type.textContent = type_str;
        types.appendChild(type);
    }

    return types;
}

function inspect_screen() {
    document.getElementById("inspect__view").style.display = "flex";
    document.getElementById("teambuilder__view").style.display = "none";
}

function teambuilder_screen() {
    document.getElementById("teambuilder__view").style.display = "flex";
    document.getElementById("inspect__view").style.display = "none";
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

function clear_slot(slot) {
    var clear_button = document.getElementById("clear_slot" + slot);
    var pokemon_slot = document.getElementById("pokemon" + slot);
    pokemon_slot.innerHTML = "";
    pokemon_slot.appendChild(clear_button);
    pokemon_slot.style.backgroundColor = "white";
    document.getElementById("stat__list-active").style.display = "none";
    document.getElementById("stat__list-default").style.display = "flex";
    document.getElementById("move__list").innerHTML = "";
    document.getElementById("pokemon__description").textContent = "";
}

function fetch_inspect(data) {
    var pokedex_entry = data.id.replace("pokemon__container", "");
    pokedex_entry = pokedex_entry.replace("placed", "");

    document.getElementById("stat__list-default").style.display = "none";
    document.getElementById("stat__list-active").style.display = "flex";

    fetch("https://pokeapi.co/api/v2/pokemon/" + pokedex_entry + "/")
    .then(response => response.json())
    .then(data => get_inspect_info(data))
}

function get_inspect_info(data) {
    get_pokemon_stats(data)
    .then(get_pokemon_moves(data))
    .then(get_flavor_text(data['species']['url']))
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

        // fetch(moves[i]['move']['url'])
        // .then(response => response.json())
        // .then(data => move_data = data)
        document.getElementById("move__list").appendChild(move);
    }
}

async function get_flavor_text(data) {
    var pokemon__description = document.getElementById("pokemon__description");
    fetch(data)
    .then(response => response.json())
    .then(data => {
        var flavor_text = data['flavor_text_entries'][0]['flavor_text'];
        flavor_text = flavor_text.replace("\f", " ");
        pokemon__description.textContent = flavor_text;
    })
}

function play_song() {
    if (background__music.src = "none") {
        background__music.src = soundtracks[current_soundtrack][current_track]['file_path'];
        change_song_title();
    }

    background__music.play();
    music_playing = true;
    document.getElementById("pause__1").style.display = "block";
    document.getElementById("pause__2").style.display = "block";
    document.getElementById("play__1").style.display = "none";
    document.getElementById("play__2").style.display = "none";
}

function pause_song() {
    background__music.pause();
    music_playing = false;
    document.getElementById("pause__1").style.display = "none";
    document.getElementById("pause__2").style.display = "none";
    document.getElementById("play__1").style.display = "block";
    document.getElementById("play__2").style.display = "block";
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
    change_song_title();
}

function next_song() {
    if (current_track == final_song) {
        current_track = first_song;
    } else {
        current_track += 1;
    }
    background__music.src = soundtracks[current_soundtrack][current_track]['file_path'];
    play_song();
    change_song_title();
}

function change_song_title() {
    for (var i = 0; i < current_track_name.length; i++) {
        current_track_name[i].textContent = "Currently Playing: " + soundtracks[current_soundtrack][current_track]['name'];
    }
}