// --------------------------------------- All Constants / Variables --------------------------------------- // 
const type_color_schemes = { 
    "bug": "#C6D16E",
    "dark": "#A29288",
    "dragon": "#A27DFA",
    "electric": "#FAE078",
    "fairy": "#F4BDC9",
    "fighting": "#D67873",
    "flying": "#C6B7F5",
    "fire": "#F5AC78",
    "ghost": "#A292BC",
    "grass": "#A7DB8D",
    "ground": "#EBD69D",
    "ice": "#BCE6E6",
    "normal": "#C6C6A7",
    "poison": "#C183C1",
    "psychic": "#FA92B2",
    "rock": "#D1C17D",
    "steel": "#D1D1E0",
    "water": "#9DB7F5"
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
const last_song = 6; // end of playlist
const music = document.getElementById("background-music"); // audio source for music
const track_name = document.getElementById("song-title");  
var region_soundtrack; // soundtrack for selected region
var track_number; // track number (from soundtracks dictionary) of current song being played
var music_playing = false;
music.addEventListener("ended", next_song); // play next song after each song ends
music.volume = 0.10;

const volume_control = document.getElementById("volume-control");
const change_volume = () => {
    music.volume = volume_control.value / 100;
}

const first_intro_section = 1; // first intro page
const final_intro_section = 3; // last intro page
var current_intro_section = 1;

const pokedex_page = document.getElementById("pokedex");
const hero = document.getElementById("hero");
const pokedex = document.getElementById("pokemon-list");
const evolution_chain = document.getElementById('evolution-chain');

var pokemon_team = {
    1: null, 2: null, 3: null,
    4: null, 5: null, 6: null,
    "types": { 
        1: [], 2: [], 3: [],
        4: [], 5: [], 6: []},
    "slots_available": 6
}

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');
const navLogo = document.querySelector('#navbar-logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);
menuLinks.addEventListener('click', mobileMenu);

// --------------------------------------- Website State Functions --------------------------------------- //
function hero_page() {
    pokedex_page.className = "hide";
    hero.className = "show";
    pause_song();

    document.getElementById("show-team").className = "hide";
    document.getElementById("music-container").className = "hide";
    document.getElementById("search-container").className = "hide";
    document.getElementById("top-page").className = "hide";

    document.getElementById("teambuilder-view").className = "hide";
    document.getElementById("show-music").className = "hide";

    document.getElementById("inspect-view").className = "hide";
    document.getElementById("contact").className = "show";
    document.getElementById("loader-container").className = "show";
    clear_inspect();
    clear_team();
    scroll_to("hero");
}

function region_page() {
    if (hero.classList.contains("hide")) {
        hero_page();
    }
    scroll_to("region-section");
}

function previous_intro_section() {
    toggle_section();
    if (current_intro_section == first_intro_section) {
        current_intro_section = final_intro_section;
    }
    else {
        current_intro_section -= 1;
    }
    toggle_section();
}

function change_intro_section(new_section) {
    toggle_section();
    current_intro_section = new_section;
    toggle_section();
}

function next_intro_section() {
    toggle_section();
    if (current_intro_section == final_intro_section) {
        current_intro_section = first_intro_section;
    }
    else {
        current_intro_section += 1;
    }
    toggle_section();
}

function toggle_section() {
    document.getElementById("about" + current_intro_section).classList.toggle("hide");
    document.getElementById("circle-" + current_intro_section).classList.toggle("active");
}

function initialize_pokedex_page(region) {
    pokedex.innerHTML = "";
    pokedex_page.className = "show";
    document.getElementById("contact").className = "hide";
    hero.className = "hide";
    region_soundtrack = region;
    track_number = Math.floor(Math.random() * 6);
    music.src = soundtracks[region_soundtrack][track_number]['file_path'];
    play_song();
}


// --------------------------------------- Data Management Functions --------------------------------------- //
function find_slot(pokemon_container) {
    for (var i = 1; i <= 6; i++) {
        var slot = document.getElementById("pokemon" + i);
        if (slot.childElementCount == 0) {
            insert_slot(slot, i, pokemon_container);
            return i;
        }
    }
}

function clear_inspect() {
    document.getElementById("move-list").innerHTML = "";
    document.getElementById("evolution-chain").innerHTML = "";
    clear_slot(document.getElementById("pokemon0"));
}

function insert_slot(slot, slot_number, pokemon_container) {
    let datacopy = pokemon_container.cloneNode(true);
    datacopy.id = pokemon_container.id + "-placed";
    datacopy.lastChild.removeChild(datacopy.lastChild.lastChild);
    datacopy.lastChild.lastChild.onclick = function() {inspect(document.getElementById(pokemon_container.id));};
    datacopy.lastChild.appendChild(create_clear_button(slot, slot_number));
    slot.appendChild(datacopy);

    let types = pokemon_container.childNodes[0];
    for (var i = 0; i < types.childElementCount; i++) {
        pokemon_team["types"][slot_number].push(types.childNodes[i].textContent);
    }

    pokemon_team[slot_number] = pokemon_container.id;
    pokemon_team["slots_available"] -= 1;
    // eval();
}

async function clear_team() {
    for (var i = 1; i <= 6; i++) {
        clear_slot(document.getElementById("pokemon" + i), i);
    }

    // Display visual that team was cleared
    document.getElementById("help-text").style.display = "flex";
    await new Promise(resolve => setTimeout(resolve, 750));
    document.getElementById("help-text").style.display = "none";
}

function clear_slot(pokemon_slot, slot_number) {
    if (slot_number > 0) {
        pokemon_team[slot_number] = null;
        pokemon_team["slots_available"] += 1;
        pokemon_team["types"][slot_number].length = 0;
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

function get_promise_array_species(data) {
    let promiseArray = [];
    let load_percentage = document.getElementById("load-percentage");
    for (var i = 0; i < data.length; i++) {
        load_percentage.textContent = i + "/" + data.length * 2 + " files downloaded.";
        promiseArray.push(fetch(data[i]["pokemon_species"]["url"]).then(response => response.json()))
    }
    return Promise.all(promiseArray);
}

function get_promise_array_pokemon(data) {
    let promiseArray = [];
    let load_percentage = document.getElementById("load-percentage");
    for (var i = 0; i < data.length; i++) {
        load_percentage.textContent = i + data.length + "/" + data.length * 2 + " files downloaded.";
        promiseArray.push(fetch(data[i]['varieties'][0]['pokemon']['url']).then(response => response.json()))
    }
    return Promise.all(promiseArray);
}

async function generate_pokedex(data) {
    const species_data = await get_promise_array_species(data['pokemon_entries']);
    const pokemon_data = await get_promise_array_pokemon(species_data);
    for (var i = 0; i < species_data.length; i++) {
        get_pokemon_data(species_data[i], pokemon_data[i], i + 1);
    }
    document.getElementById("loader-container").className = "hide";
    document.getElementById("show-team").className = "show";
    document.getElementById("music-container").className = "show";
    document.getElementById("search-container").className = "show";
    document.getElementById("top-page").className = "show";
}

function get_pokemon_data(species_data, pokemon_data, entry_number) {
    let pokemon_container = create_pokemon_container(species_data);
    pokemon_container.appendChild(get_types(pokemon_data, pokemon_container));
    pokemon_container.appendChild(get_name(pokemon_data, pokemon_container));
    pokemon_container.appendChild(get_entry_number(entry_number));
    pokemon_container.appendChild(get_image(pokemon_data));
    pokemon_container.appendChild(create_buttons(pokemon_container.id));
    pokedex.appendChild(pokemon_container);
}

function create_pokemon_container(data) {
    let pokemon_container = document.createElement("li");
    pokemon_container.className = "pokemon-container";

    if (data['is_legendary']) {
        pokemon_container.classList.add("is_legendary");
    }

    if (data['is_mythical']) {
        pokemon_container.classList.add("is_mythical");
    }

    if (data['evolves_from_species']) {
        pokemon_container.classList.add(data['evolves_from_species']['name']);
    }

    return pokemon_container;
}

function create_buttons(pokemon_container) {
    let button_container = document.createElement("div");
    button_container.className = "pokemon-button-container";
    create_inspect_button(pokemon_container, button_container);
    create_insert_button(pokemon_container, button_container);
    return button_container;
}

function create_insert_button(pokemon_container, button_container) {
    let insert_button = document.createElement("button");
    insert_button.className = "insert-button";
    insert_button.onclick = function() {find_slot(document.getElementById(pokemon_container));};
    insert_button.textContent = "+";
    button_container.appendChild(insert_button);
}

function create_inspect_button(pokemon_container, button_container) {
    let inspect_button = document.createElement("button");
    inspect_button.className = "inspect-button";
    inspect_button.onclick = function() {inspect(document.getElementById(pokemon_container));};
    inspect_button.innerHTML = '<i class="fas fa-search"></i>';
    button_container.appendChild(inspect_button);
}

function inspect(pokemon_container) {
    clear_inspect();
    let datacopy = pokemon_container.cloneNode(true);
    datacopy.id = pokemon_container.id + "-placed";
    document.getElementById("pokemon0").appendChild(datacopy);
    document.getElementById("inspect-view").className = "show";
    fetch_inspect(pokemon_container);
}

function create_clear_button(pokemon_slot, slot_number) {
    let clear_button = document.createElement("button");
    clear_button.className = "clear-button";
    clear_button.onclick = function() {clear_slot(pokemon_slot, slot_number);};
    clear_button.textContent = "x";
    return clear_button;
}

function get_image(data) {
    let image = document.createElement("img");
    image.className = "pokemon-image";
    image.src = data["sprites"]["front_default"];
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
    name.innerHTML = data["name"];
    pokemon_container.id = data["name"];
    return name;
}

function get_types(data, pokemon_container) {
    let types = document.createElement("div");
    types.className = "type-container";

    for (var i = 0; i < data["types"].length; i++) {
        var type = document.createElement("img");
        type.className = "pokemon-type";
        type.src = "images/types/" + data["types"][i]["type"]["name"] + ".png";
        type.textContent = data["types"][i]["type"]["name"];
        types.appendChild(type);
        if (i == 0) {
            pokemon_container.style.backgroundColor = type_color_schemes[data["types"][i]["type"]["name"]];
        }
    }
    return types;
}

// --------------------------------------- Utility Functions --------------------------------------- // 
function search_pokemon() {
    let input = document.getElementById('pokemon-search');
    let list_items = pokedex.getElementsByTagName('li');
    var search = input.value.toLowerCase();

    // Loop through all list items, and hide those who don't match the search query
    for (var i = 0; i < list_items.length; i++) {
        var name_container = list_items[i].getElementsByTagName("a")[0];
        var pokemon_name = name_container.textContent;
        var pokemon_types = list_items[i].firstChild;
        for (var j = 0; j < pokemon_types.childElementCount; j++) {
            if (pokemon_name.indexOf(search) > -1 || pokemon_types.childNodes[j].textContent.indexOf(search) > -1) {
                list_items[i].style.display = "";
                break;
            } 
            else {
                list_items[i].style.display = "none";
            }
        }
    }
}

function scroll_to(section) {
    let destination = document.getElementById(section).offsetTop - 80;
    window.scroll({
      top: destination, 
      behavior: "smooth"
    });
}

// --------------------------------------- Utility Data Retrieval Functions --------------------------------------- //
function fetch_inspect(data) {
    var pokedex_entry = data.id.replace("pokemon-container", "");
    pokedex_entry = pokedex_entry.replace("placed", "");

    fetch("https://pokeapi.co/api/v2/pokemon/" + pokedex_entry + "/")
    .then(response => response.json())
    .then(data => get_inspect_info(data))
}

async function get_inspect_info(data) {
    get_pokemon_stats(data);
    get_move_stats(data);

    let species_info = await get_species_info(data);
    get_flavor_text(species_info);
    get_evolution_info(species_info);
}

async function get_pokemon_stats(data) {
    var stats = data["stats"];
    for (var i = 0; i < stats.length; i++) {
        var stat = stats[i]['base_stat'];
        document.getElementById(stat_dictionary[i]).style.width = stat * 0.8 + "%";
        document.getElementById(stat_dictionary[i]).textContent = stat;
    }
}

async function get_move_info(moveName) {
    var move = document.createElement("li");
    move.id = "_" + moveName;
    move.className = "pokemon-move";
    move.textContent = moveName;
    document.getElementById("move-list").appendChild(move);
}

async function get_move_array(data) {
    var moves = data["moves"];
    let promiseArray = [];
    for (var i = 0; i < moves.length; i++) {
        await get_move_info(moves[i]['move']['name']);
        promiseArray.push(fetch(moves[i]['move']['url']).then(response => response.json()));
    }
    return Promise.all(promiseArray);
}

async function get_move_stats(data) {
    let move_array = await get_move_array(data);
    for (var i = 0; i < move_array.length; i++) {
        get_move_accuracy(move_array, i);
        get_move_power(move_array, i);
        get_move_type(move_array, i);
    }
}

async function get_move_accuracy(move_array, move_number) {
    let accuracy = document.createElement("div");
    accuracy.className = "move-accuracy";
    accuracy.textContent = "Accuracy: N/A";
    if (move_array[move_number]['accuracy']) {
        accuracy.textContent = "Accuracy: " + move_array[move_number]['accuracy'];
    }
    document.getElementById("_" + move_array[move_number]['name']).appendChild(accuracy);
}

async function get_move_power(move_array, move_number) {
    let power = document.createElement("div");
    power.className = "move-power";
    power.textContent = "Power: N/A";
    if (move_array[move_number]['power']) {
        power.textContent = "Power: " + move_array[move_number]['power'];
    }
    document.getElementById("_" + move_array[move_number]['name']).appendChild(power);
}

async function get_move_type(move_array, move_number) {
    let type = document.createElement("img");
    type.className = "move-type";
    type.src = "images/types/" + move_array[move_number]['type']['name'] + ".png";
    document.getElementById("_" + move_array[move_number]['name']).appendChild(type);
}

async function get_species_info(data) {
    return fetch(data['species']['url'])
    .then(response => response.json());
}

async function get_flavor_text(data) {
    var description = document.getElementById("description");
    var flavor_text_list = data['flavor_text_entries'];

    // find the first english flavor text entry
    for (var i = 0; i < flavor_text_list.length; i++) {
        if (flavor_text_list[i]['language']['name'] == "en") {
            var flavor_text = flavor_text_list[i]['flavor_text'];
            break;
        }
    }

    // get rid of weird characters in flavor text
    flavor_text = flavor_text.replace("\f", " ");
    description.textContent = flavor_text;
}

async function get_evolution_info(data) {
    fetch(data['evolution_chain']['url'])
    .then(response => response.json())
    .then(data => get_evolution_chain(data))
}

async function get_evolution_chain(data) {
    create_evolution_container(data['chain']['species']['name']);
    fill_evolution_container(data['chain']['evolves_to']);

    if (data['chain']['evolves_to'].length > 0) {
        fill_evolution_container(data['chain']['evolves_to'][0]['evolves_to']);
    }
} 

async function create_evolution_container(pokemon_container) {
    if (document.getElementById(pokemon_container) === null) {
        return;
    }
    let evolution_container = document.getElementById(pokemon_container).cloneNode(true);
    evolution_container.id = evolution_container.id + "_chain";
    evolution_container.style.display = "flex";
    evolution_container.onclick = function() {inspect(document.getElementById(pokemon_container));};
    evolution_container.removeChild(evolution_container.lastChild);
    evolution_chain.appendChild(evolution_container);
}

async function fill_evolution_container(data) {
    for (var i = 0; i < data.length; i++) {
        if (document.getElementById(data[i]['species']['name']) === null) {
            continue;
        }

        let trigger = document.createElement('div');
        trigger.className = "evolution-trigger";
        trigger.textContent = data[i]['evolution_details'][0]['trigger']['name'];
        if (data[i]['evolution_details'][0]['trigger']['name'] == "level-up") {
            if (data[i]['evolution_details'][0]['min_level']) {
                trigger.textContent += ": " + data[i]['evolution_details'][0]['min_level'];
            }
            else if (data[i]['evolution_details'][0]['location']) {
                trigger.textContent += ": " + data[i]['evolution_details'][0]['location']['name'];
            }
            else if (data[i]['evolution_details'][0]['time_of_day']) {
                trigger.textContent += ": " + data[i]['evolution_details'][0]['time_of_day'];
            }
            else if (data[i]['evolution_details'][0]['min_affection']) {
                trigger.textContent += ": " + data[i]['evolution_details'][0]['min_affection'];
            }
        }

        if (data[i]['evolution_details'][0]['trigger']['name'] == "use-item") {
            get_item_image(data[i]['evolution_details'][0]['item']['url'], trigger);
            trigger.textContent += ": " + data[i]['evolution_details'][0]['item']['name'];
        }
        evolution_chain.appendChild(trigger);       
        create_evolution_container(data[i]['species']['name']);
    }
}

async function get_item_image(data_url, trigger) {
    fetch(data_url)
    .then(response => response.json())
    .then(function (data) {
        let item_image = document.createElement('img');
        item_image.className = "item-image";
        item_image.src = data['sprites']['default'];
        trigger.appendChild(item_image);
    });
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

async function generate_team() {
    let form = document.getElementById("build-form");
    var settings = {
        "legendaries_on": true,
        "mythicals_on": true,
        "duplicates_on": true,
    }

    for (var i = 0; i < form.length; i++) {
        if (form.elements[i].checked) {
            settings[form.elements[i].id] = false;
        }
    }

    await initialize_generation_graphics();
    await generate_team_helper(settings);
    remove_generation_graphics();
}

async function generate_team_helper(settings) {
    while (pokemon_team["slots_available"] > 0) {
        var pokemon_chosen = Math.floor(Math.random() * pokedex.childElementCount);
        var pokemon_container = document.getElementById(pokedex.childNodes[pokemon_chosen].id);
        
        // only get fully evolved forms of pokemon
        while (pokemon_chosen + 1 < pokedex.childElementCount && document.getElementById(pokedex.childNodes[pokemon_chosen + 1].id).classList.contains(pokemon_container.id)) {
            pokemon_chosen += 1;
            pokemon_container = document.getElementById(pokedex.childNodes[pokemon_chosen].id);
        }

        // skip duplicate pokemon
        if (Object.values(pokemon_team).indexOf(pokemon_container.id) > -1) { continue; }

        // place pokemon for now
        var slot_number = find_slot(pokemon_container);
        var pokemon_slot = document.getElementById("pokemon" + slot_number);

        // prevent errors from while loop condition
        if (slot_number === undefined) { break; }

        // highlight which slot is currently under consideration
        pokemon_slot.style.border = "2px solid #00FF6B";
        pokemon_slot.childNodes[0].style.display = "flex";

        // delay for better visual
        await new Promise(resolve => setTimeout(resolve, 500));

        // remove pokemon if rules are not met
        if (pokemon_container.classList.contains("is_legendary")) {
            if (!settings["legendaries_on"]) {
                clear_slot(pokemon_slot, slot_number);
            }    
        }

        else if (pokemon_container.classList.contains("is_mythical")) {
            if (!settings["mythicals_on"]) {
                clear_slot(pokemon_slot, slot_number);
            }
        }

        else if (!settings["duplicates_on"]) {
            let types = pokemon_container.childNodes[0];
            for (var i = 0; i < types.childElementCount; i++) {
                for (var j = 1; j <= 6; j++) {
                    if (j == slot_number) {
                        continue;
                    }
                    if (pokemon_team["types"][j].includes(types.childNodes[i].textContent)) {
                        clear_slot(pokemon_slot, slot_number);
                        break;
                    } 
                }
            }
        }

        // slot contains a valid pokemon, scroll down if necessary (mobile)
        else {
            document.getElementById("teambuilder-view").scrollTop = pokemon_slot.clientHeight;
        }

        // reset border for pokemon slot regardless of result
        pokemon_slot.style.border = "1px solid black";
    }
}

async function initialize_generation_graphics() {
    document.getElementById("teambuilder-view").scrollTop = 0;
    document.getElementById("overlay").classList.toggle("overlay");
    document.getElementById("search-container").style.filter = "brightness(25%)";
    document.getElementById("pokemon-list").style.filter = "brightness(25%)";
    document.getElementById("build-form").style.display = "none";
}

async function remove_generation_graphics() {
    document.getElementById("overlay").classList.toggle("overlay");
    document.getElementById("search-container").style.filter = "none";
    document.getElementById("pokemon-list").style.filter = "none";
    document.getElementById("build-form").style.display = "flex";
}

/* --------------------------------------- Music Functions --------------------------------------- */
function play_song() {
    change_song_title();
    music.play();
    music_playing = true;
    toggle_play_pause("music-button", "hide");
}

function pause_song() {
    music.pause();
    music_playing = false;
    toggle_play_pause("hide", "music-button");
}

function toggle_play_pause(pause, play) {
    document.getElementById("pause").className = pause;
    document.getElementById("play").className = play;
}

function previous_song() {
    if (track_number == first_song) {
        track_number = last_song;
    }
    else {
        track_number -= 1;
    }
    music.src = soundtracks[region_soundtrack][track_number]['file_path'];
    play_song();
}

function next_song() {
    if (track_number == last_song) {
        track_number = first_song;
    } 
    else {
        track_number += 1;
    }
    music.src = soundtracks[region_soundtrack][track_number]['file_path'];
    play_song();
}

function change_song_title() {
        track_name.innerHTML = '<i class="fas fa-music"></i> ' + 
        "Currently Playing: " + soundtracks[region_soundtrack][track_number]['name'] + 
        ' <i class="fas fa-music"></i>';
}

function show_hide_music() {
    document.getElementById("music-container").classList.toggle("hide");
    document.getElementById("show-music").classList.toggle("hide");
}

function show_hide_team() {
    document.getElementById("teambuilder-view").classList.toggle("hide");
    document.getElementById("show-team").classList.toggle("hide");
}

function hide_inspect() {
    document.getElementById("inspect-view").classList.toggle("hide");
}