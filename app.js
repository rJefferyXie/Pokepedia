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

const stat_dictionary = {
    0: "health",
    1: "attack",
    2: "defense",
    3: "special-attack",
    4: "special-defense",
    5: "speed"
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

const first_intro_section = 1; // first intro page
const final_intro_section = 3; // last intro page

var current_intro_section = 1;

var current_soundtrack;
var current_track; 
const current_track_name = document.getElementById("song-title");
var music_container = document.getElementById("music-container");
var music_playing = false;

const background_music = document.getElementById("background-music");
background_music.addEventListener("ended", next_song);
background_music.volume = 0.1;

var current_view = "inspect";

var inspect_active = "intro";
var inspect_container = "intro-container";

var teambuilder_active = "team";
var teambuilder_container = "team-container";

const pokedex_page = document.getElementById("pokedex");
const hero = document.getElementById("hero");
const pokedex = document.getElementById("pokemon-list");
const evolution_chain = document.getElementById('evolution-chain');

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');
const navLogo = document.querySelector('#navbar-logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// --------------------------------------- Website State Functions --------------------------------------- //
function region_page() {
    pokedex_page.className = "hide";
    hero.className = "none";
    clear_inspect();

    scroll_to("hero");

    for (var i = 0; i <= 6; i++) {
        let slot = document.getElementById("pokemon" + i);
        clear_slot(slot);
    }
    pause_song();
}

function previous_intro_section() {
    hide_old_section();
    if (current_intro_section == first_intro_section) {
        current_intro_section = final_intro_section;
    }
    else {
        current_intro_section -= 1;
    }
    show_new_section();
}

function change_intro_section(new_section) {
    hide_old_section();
    current_intro_section = new_section;
    show_new_section();
}

function next_intro_section() {
    hide_old_section();
    if (current_intro_section == final_intro_section) {
        current_intro_section = first_intro_section;
    }
    else {
        current_intro_section += 1;
    }
    show_new_section();
}

function hide_old_section() {
    document.getElementById("about" + current_intro_section).className = "hide";
    document.getElementById("circle-" + current_intro_section).className = "fas fa-circle";
}

function show_new_section() {
    document.getElementById("about" + current_intro_section).className = "";
    document.getElementById("circle-" + current_intro_section).className = "fas fa-circle active";
}

function initialize_pokedex_page(region) {
    pokedex.innerHTML = "";
    pokedex_page.className = "none";
    hero.className = "hide";
    current_soundtrack = region;
    current_track = Math.floor(Math.random() * 6);
    background_music.src = soundtracks[current_soundtrack][current_track]['file_path'];
    play_song();
}

function swap_view(inspect, teambuilder) {
    document.getElementById("inspect-view").className = inspect;
    document.getElementById("teambuilder-view").className = teambuilder;
}

function inspect_screen() {
    current_view = "inspect";
    swap_view("none", "hide");
}

function teambuilder_screen() {
    current_view = "teambuilder";
    swap_view("hide", "none");
}

function change_inspect_screen(new_active, new_container) {
    document.getElementById(inspect_active).style.backgroundColor = "#9facb4";
    document.getElementById(new_active).style.backgroundColor = "#6b77e4";
    inspect_active = new_active;

    document.getElementById(inspect_container).className = "hide";
    document.getElementById(new_container).className = "none";
    inspect_container = new_container;
}

function change_teambuilder_screen(new_active, new_container) {
    document.getElementById(teambuilder_active).style.backgroundColor = "#9facb4";
    document.getElementById(new_active).style.backgroundColor = "#6b77e4";
    teambuilder_active = new_active;

    document.getElementById(teambuilder_container).className = "hide";
    document.getElementById(new_container).className = "none";
    teambuilder_container = new_container;
}

// --------------------------------------- Data Management Functions --------------------------------------- //
function find_slot(pokemon_container) {
    if (current_view == "inspect") {
        let slot = document.getElementById("pokemon0");
        clear_slot(slot);
        insert_slot(slot, pokemon_container);
        return;
    } 
    if (current_view == "teambuilder") {
        for (var i = 1; i <= 6; i++) {
            var slot = document.getElementById("pokemon" + i);
            if (slot.childElementCount == 0) {
                insert_slot(slot, pokemon_container);
                return;
            }
        }
    }
}

function clear_inspect() {
    document.getElementById("moves-default").className = "none";
    document.getElementById("move-list").className = "hide";
    document.getElementById("move-list").innerHTML = "";

    document.getElementById("stats-default").className = "none";
    document.getElementById("stat-list").className = "hide";

    document.getElementById("evolution-default").className = "none";
    document.getElementById("evolution-chain").className = "hide";
    document.getElementById("evolution-chain").innerHTML = "";

    document.getElementById("description-container").className = "hide";
}

function insert_slot(slot, pokemon_container) {
    let original_container = document.getElementById(pokemon_container);
    let datacopy = original_container.cloneNode(true);
    datacopy.id = original_container.id + "placed";
    datacopy.className = original_container.className + "-placed";
    datacopy.draggable="true";
    datacopy.removeChild(datacopy.lastChild);
    datacopy.appendChild(create_clear_button(slot));
    // datacopy.addEventListener("dragstart", onDragStart);
    // datacopy.addEventListener("dragend", onDragEnd);
    slot.appendChild(datacopy);

    if (slot.id == "pokemon0") {
        fetch_inspect(document.getElementById(pokemon_container));
    }
    // else {
    //     eval();
    // }
}

function clear_slot(pokemon_slot) {
    if (current_view == "inspect") {
        clear_inspect();
    }
    pokemon_slot.innerHTML = "";
}

// --------------------------------------- Data Retrieval Functions --------------------------------------- //
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
    let pokemon_container = create_pokemon_container();
    pokemon_container.appendChild(get_image(data));
    pokemon_container.appendChild(get_entry_number(entry_number));
    pokemon_container.appendChild(get_name(data, pokemon_container));
    pokemon_container.appendChild(get_types(data));
    pokemon_container.appendChild(create_insert_button(pokemon_container.id));
    pokedex.appendChild(pokemon_container);
}

function create_pokemon_container() {
    let pokemon_container = document.createElement("li");
    pokemon_container.className = "pokemon-container";
    pokemon_container.draggable="true";
    // pokemon_container.addEventListener("dragstart", onDragStart);
    // pokemon_container.addEventListener("dragend", onDragEnd);
    return pokemon_container;
}

function create_insert_button(pokemon_container) {
    let insert_button = document.createElement("button");
    insert_button.className = "hide insert-button";
    insert_button.onclick = function() {find_slot(pokemon_container);};
    insert_button.textContent = "+";
    return insert_button;
}

function create_clear_button(pokemon_slot) {
    let clear_button = document.createElement("button");
    clear_button.className = "hide clear-button";
    clear_button.onclick = function() {clear_slot(pokemon_slot);};
    clear_button.textContent = "x";
    return clear_button;
}

function get_image(data) {
    let image = document.createElement("img");
    image.className = "pokemon-image";
    image.src = data["sprites"]["front_default"];
    image.draggable="false";
    return image;
}

function get_entry_number(entry_number) {
    let number = document.createElement("div");
    number.className = "pokemon-number";
    number.textContent = "#" + entry_number;
    return number;
}

function get_name(data, pokemon_container) {
    let name = document.createElement("a");
    name.className = "pokemon-name";
    name.innerHTML = data["name"].charAt(0).toUpperCase() + data["name"].slice(1);
    pokemon_container.id = data["name"];
    return name;
}

function get_types(data) {
    let types = document.createElement("div");
    types.className = "type-container";

    for (var i = 0; i < data["types"].length; i++) {
        var type_str = data["types"][i]["type"]["name"];
        type_str = type_str.charAt(0).toUpperCase() + type_str.slice(1);
        type_color = type_color_schemes[type_str];

        var type = document.createElement("div");
        type.style.backgroundColor = type_color;
        type.className = "pokemon-type";
        type.textContent = type_str;
        types.appendChild(type);
    }
    return types;
}

// --------------------------------------- Utility Functions --------------------------------------- // 
function search_pokemon() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('pokemon-search');
    filter = input.value.toUpperCase();
    ul = pokedex;
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } 
      else {
        li[i].style.display = "none";
        }
    }
}

function scroll_to(section) {
    var destination = document.getElementById(section).offsetTop - 80;
    window.scroll({
      top: destination, 
      behavior: "smooth"
    });
  }

// --------------------------------------- Utility Data Retrieval Functions --------------------------------------- //
function fetch_inspect(data) {
    var pokedex_entry = data.id.replace("pokemon-container", "");
    pokedex_entry = pokedex_entry.replace("placed", "");

    document.getElementById("description-container").className = "none";

    document.getElementById("moves-default").className = "hide";
    document.getElementById("stats-default").className = "hide";
    document.getElementById("evolution-default").className = "hide";

    document.getElementById("move-list").className = "none";
    document.getElementById("stat-list").className = "none";
    document.getElementById("evolution-chain").className = "none";

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
        document.getElementById(stat_dictionary[i]).style.width = stat * 1.2 + "px";
        document.getElementById(stat_dictionary[i]).textContent = stat;
    }
}

async function get_pokemon_moves(data) {
    var moves = data["moves"];

    for (var i = 0; i <= moves.length; i++) {
        var move = document.createElement("li");
        move.id = "move" + i;
        move.className = "pokemon-move";
        move.textContent = moves[i]['move']['name'] + "\n";
        document.getElementById("move-list").appendChild(move);
    }
}

        // fetch(moves[i]['move']['url'])
        // .then(response => response.json())
        // .then(data => move_data = data)

function get_flavor_text(data) {
    var description = document.getElementById("description");
    var flavor_text = data['flavor_text_entries'][0]['flavor_text'];
    flavor_text = flavor_text.replace("\f", " ");
    description.textContent = flavor_text;
}

async function get_evolution_info(data) {
    fetch(data['evolution_chain']['url'])
    .then(response => response.json())
    .then(data => get_evolution_chain(data))
}

function get_evolution_chain(data) {
    create_evolution_container(data['chain']['species']['name']);
    for (var i = 0; i < data['chain']['evolves_to'].length; i++) {
        let trigger = document.createElement('div');
        trigger.className = "evolution-trigger";
        trigger.textContent = data['chain']['evolves_to'][i]['evolution_details'][0]['trigger']['name'];
        if (data['chain']['evolves_to'][i]['evolution_details'][0]['trigger']['name'] == "level-up") {
            if (data['chain']['evolves_to'][i]['evolution_details'][0]['min_level']) {
                trigger.textContent += ": " + data['chain']['evolves_to'][i]['evolution_details'][0]['min_level'];
            }
            else if (data['chain']['evolves_to'][i]['evolution_details'][0]['location']) {
                trigger.textContent += ": " + data['chain']['evolves_to'][i]['evolution_details'][0]['location']['name'];
            }
            else if (data['chain']['evolves_to'][i]['evolution_details'][0]['time_of_day']) {
                trigger.textContent += ": " + data['chain']['evolves_to'][i]['evolution_details'][0]['time_of_day'];
            }
            else if (data['chain']['evolves_to'][i]['evolution_details'][0]['min_affection']) {
                trigger.textContent += ": " + data['chain']['evolves_to'][i]['evolution_details'][0]['min_affection'];
            }

        }

        if (data['chain']['evolves_to'][i]['evolution_details'][0]['trigger']['name'] == "use-item") {
            trigger.textContent += ": " + data['chain']['evolves_to'][i]['evolution_details'][0]['item']['name'];
        }
        evolution_chain.appendChild(trigger);
        create_evolution_container(data['chain']['evolves_to'][i]['species']['name']);
    }

    data = data['chain']['evolves_to'][0];
    if (data['evolves_to'].length > 0) {
        for (var i = 0; i < data['evolves_to'].length; i++) {
            let trigger = document.createElement('div');
            trigger.className = "evolution-trigger";
            trigger.textContent = data['evolves_to'][i]['evolution_details'][0]['trigger']['name'];
            if (data['evolves_to'][i]['evolution_details'][0]['trigger']['name'] == "level-up") {
                trigger.textContent += ": " + data['evolves_to'][i]['evolution_details'][0]['min_level'];
            }
            evolution_chain.appendChild(trigger);
            create_evolution_container(data['evolves_to'][i]['species']['name']);
        }
    }
}

    // if data['chain']['evolves_to'][i]['evolution_details'][0]['trigger']['name'] == "use-item":
    //     print(data['chain']['evolves_to'][i]['evolution_details'][0]['item']['name'])
    //     print(data['chain']['evolves_to'][i]['evolution_details'][0]['item']['url'])

function create_evolution_container(pokemon_container) {
    let evolution_container = document.getElementById(pokemon_container).cloneNode(true);
    evolution_container.className = "pokemon-container-placed";
    evolution_container.id = evolution_container.id + "_chain";
    evolution_container.style.display = "block";
    evolution_container.removeChild(evolution_container.lastChild);
    evolution_chain.appendChild(evolution_container);
}
/* --------------------------------------- Team Power --------------------------------------- */
// function eval() {
//     for (var i = 1; i <= 6; i++) {
//         var pokemon_cell = document.getElementById("pokemon" + i);

//         if (pokemon_cell.childElementCount == 0) {
//             continue;
//         }

//         var pokemon_container = pokemon_cell.getElementsByClassName("pokemon-container-placed")[0];
//         var type_container = pokemon_container.getElementsByClassName("type-container")[0];
//         var type_list = type_container.getElementsByClassName("pokemon-type");

//         for (var j = 0; j < type_list.length; j++) {
//             document.getElementById("power-summary").textContent += type_list[j].textContent;
//         }
//     }
// }

// for every unique pokemon type that you have: +5 eval
// for every unique pokemon type that you do not have: -5 eval
// for every duplicate pokemon type: -10 eval, -20 eval, etc.
// for every pokemon type immunity (one pokemon for each type max): +20 eval


/* --------------------------------------- Music Functions --------------------------------------- */
function play_song() {
    change_song_title();
    background_music.play();
    music_playing = true;
    toggle_play_pause("music-button", "hide");
}

function pause_song() {
    background_music.pause();
    music_playing = false;
    toggle_play_pause("hide", "music-button");
}

function toggle_play_pause(pause, play) {
    document.getElementById("pause").className = pause;
    document.getElementById("play").className = play;
}

function previous_song() {
    if (current_track == first_song) {
        current_track = final_song;
    }
    else {
        current_track -= 1;
    }
    background_music.src = soundtracks[current_soundtrack][current_track]['file_path'];
    play_song();
}

function next_song() {
    if (current_track == final_song) {
        current_track = first_song;
    } 
    else {
        current_track += 1;
    }
    background_music.src = soundtracks[current_soundtrack][current_track]['file_path'];
    play_song();
}

function change_song_title() {
        current_track_name.innerHTML = '<i class="fas fa-music"></i> ' + 
        "Currently Playing: " + soundtracks[current_soundtrack][current_track]['name'] + 
        ' <i class="fas fa-music"></i>';
}