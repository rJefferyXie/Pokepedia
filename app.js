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

var current_view = "inspect"; // options: inspect, teambuilder, compare
var inspect_active = "intro"; // options: intro, stats, moves, chain
var inspect_container = "intro-container";
var teambuilder_active = "team"; // options: team, build
var teambuilder_container = "team-container";

const tabs = {
    "intro": ["chain", "stats"],
    "stats": ["intro", "moves"],
    "moves": ["stats", "chain"],
    "chain": ["moves", "intro"],
    "team": ["build", "build"],
    "build": ["team", "team"]
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
const changeVolume = () => {
    music.volume = volume_control.value / 100;
}

var delay = 500;
const delay_control = document.getElementById("delay-control");
const changeDelay = () => {
    delay = delay_control.value;
}

const first_intro_section = 1; // first intro page
const final_intro_section = 3; // last intro page
var current_intro_section = 1;

var interval_; // used for holding down the scroll up/down buttons for pokedex

const pokedex_page = document.getElementById("pokedex");
const pokedex_page_mobile = document.getElementById("pokedex-mobile");
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
    pokedex_page_mobile.className = "hide";
    hero.className = "show";
    document.getElementById("contact").className = "show";
    document.getElementById("loader-container").style.opacity = 1;
    clear_inspect();
    clear_team();
    scroll_to("hero");
    pause_song();
}

function region_page() {
    if (hero.classList.contains("hide")) {
        hero_page();
    }
    scroll_to('region-section');
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
    pokedex_page_mobile.className = "show";
    document.getElementById("contact").className = "hide";
    document.getElementById("top-right2").textContent = region;
    hero.className = "hide";
    region_soundtrack = region;
    track_number = Math.floor(Math.random() * 6);
    music.src = soundtracks[region_soundtrack][track_number]['file_path'];
    play_song();
}

function swap_view(inspect, teambuilder) {
    document.getElementById("inspect-view").className = inspect;
    document.getElementById("teambuilder-view").className = teambuilder;
}

function inspect_screen() {
    current_view = "inspect";
    swap_view("show", "hide");
}

function teambuilder_screen() {
    current_view = "teambuilder";
    swap_view("hide", "show");
}

function previous_screen() {
    if (current_view == "inspect") {
        change_inspect_screen(tabs[inspect_active][0], tabs[inspect_active][0] + "-container")
    }
    else if (current_view == "teambuilder") {
        change_teambuilder_screen(tabs[teambuilder_active][0], tabs[teambuilder_active][0] + "-container")
    }
}

function next_screen() {
    if (current_view == "inspect") {
        change_inspect_screen(tabs[inspect_active][1], tabs[inspect_active][1] + "-container")
    }
    else if (current_view == "teambuilder") {
        change_teambuilder_screen(tabs[teambuilder_active][1], tabs[teambuilder_active][1] + "-container")
    }
}

function change_inspect_screen(new_active, new_container) {
    document.getElementById(inspect_active).style.backgroundColor = "#9facb4";
    document.getElementById(new_active).style.backgroundColor = "#6b77e4";
    inspect_active = new_active;

    document.getElementById(inspect_container).className = "hide";
    document.getElementById(new_container).className = "show";
    inspect_container = new_container;
}

function change_teambuilder_screen(new_active, new_container) {
    document.getElementById(teambuilder_active).style.backgroundColor = "#9facb4";
    document.getElementById(new_active).style.backgroundColor = "#6b77e4";
    teambuilder_active = new_active;

    document.getElementById(teambuilder_container).className = "hide";
    document.getElementById(new_container).className = "show";
    teambuilder_container = new_container;
}

// --------------------------------------- Data Management Functions --------------------------------------- //
function find_slot(pokemon_container) {
    if (current_view == "inspect") {
        let slot = document.getElementById("pokemon0");
        clear_slot(slot);
        insert_slot(slot, 0, pokemon_container);
        return i;
    } 
    if (current_view == "teambuilder") {
        for (var i = 1; i <= 6; i++) {
            var slot = document.getElementById("pokemon" + i);
            if (slot.childElementCount == 0) {
                insert_slot(slot, i, pokemon_container);
                return i;
            }
        }
    }
}

function clear_inspect() {
    document.getElementById("moves-default").className = "show";
    document.getElementById("move-list").className = "hide";
    document.getElementById("move-list").innerHTML = "";

    document.getElementById("stats-default").className = "show";
    document.getElementById("stat-list").className = "hide";

    document.getElementById("evolution-default").className = "show";
    document.getElementById("evolution-chain").className = "hide";
    document.getElementById("evolution-chain").innerHTML = "";

    document.getElementById("description-container").className = "hide";
}

function insert_slot(slot, slot_number, pokemon_container) {
    let datacopy = pokemon_container.cloneNode(true);
    datacopy.id = pokemon_container.id + "-placed";
    datacopy.className = "pokemon-container-placed";
    datacopy.removeChild(datacopy.lastChild);
    datacopy.appendChild(create_clear_button(slot, slot_number));
    slot.appendChild(datacopy);

    if (slot_number == 0) {
        fetch_inspect(pokemon_container);
    }
    else {
        let types = pokemon_container.childNodes[3];
        for (var i = 0; i < types.childElementCount; i++) {
            pokemon_team["types"][slot_number].push(types.childNodes[i].textContent);
        }

        pokemon_team[slot_number] = pokemon_container.id;
        pokemon_team["slots_available"] -= 1;
        // eval();
    }
}

async function clear_team() {
    for (var i = 0; i <= 6; i++) {
        clear_slot(document.getElementById("pokemon" + i), i);
    }

    // Display visual that team was cleared
    document.getElementById("help-text").classList.toggle("hide");
    await new Promise(resolve => setTimeout(resolve, 750));
    document.getElementById("help-text").classList.toggle("hide");
}

function clear_slot(pokemon_slot, slot_number) {
    if (current_view == "inspect") {
        clear_inspect();
    }

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
    for (var i = 0; i < data.length; i++) {
        promiseArray.push(fetch(data[i]["pokemon_species"]["url"]).then(response => response.json()))
    }
    return Promise.all(promiseArray);
}

function get_promise_array_pokemon(data) {
    let promiseArray = [];
    for (var i = 0; i < data.length; i++) {
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
    document.getElementById("loader-container").style.opacity = 0;
}

function get_pokemon_data(species_data, pokemon_data, entry_number) {
    let pokemon_container = create_pokemon_container(species_data);
    pokemon_container.appendChild(get_image(pokemon_data));
    pokemon_container.appendChild(get_entry_number(entry_number));
    pokemon_container.appendChild(get_name(pokemon_data, pokemon_container));
    pokemon_container.appendChild(get_types(pokemon_data));
    pokemon_container.appendChild(create_insert_button(pokemon_container.id));
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

function create_insert_button(pokemon_container) {
    let insert_button = document.createElement("button");
    insert_button.className = "hide insert-button";
    insert_button.onclick = function() {find_slot(document.getElementById(pokemon_container));};
    insert_button.textContent = "+";
    return insert_button;
}

function create_clear_button(pokemon_slot, slot_number) {
    let clear_button = document.createElement("button");
    clear_button.className = "hide clear-button";
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

function get_types(data) {
    let types = document.createElement("div");
    types.className = "type-container";

    for (var i = 0; i < data["types"].length; i++) {
        var type = document.createElement("div");
        type.style.backgroundColor = type_color_schemes[data["types"][i]["type"]["name"]];
        type.className = "pokemon-type";
        type.textContent = data["types"][i]["type"]["name"];
        types.appendChild(type);
    }
    return types;
}

// --------------------------------------- Utility Functions --------------------------------------- // 
function search_pokemon() {
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
    let destination = document.getElementById(section).offsetTop - 80;
    window.scroll({
      top: destination, 
      behavior: "smooth"
    });
}

document.getElementById("top-cross").onmousedown = function() {
    scrollUp();
    interval_ = setInterval(scrollUp, 200);
}

function scrollUp() {
    if (pokedex.scrollTop % 183 == 0) {
        pokedex.scroll({
            top: pokedex.scrollTop -= 183,
            behavior: "smooth"
        });
    }
    else {
        pokedex.scroll({
            top: pokedex.scrollTop = pokedex.scrollTop - pokedex.scrollTop % 183,
            behavior: "smooth"
        });
    }
}

document.getElementById("bot-cross").onmousedown = function() {
    scrollDown();
    interval_ = setInterval(scrollDown, 200);
}

function scrollDown() {
    pokedex.scroll({
        top: pokedex.scrollTop = pokedex.scrollTop + (183 - pokedex.scrollTop % 183),
        behavior: "smooth"
    });
}

// --------------------------------------- Utility Data Retrieval Functions --------------------------------------- //
function fetch_inspect(data) {
    var pokedex_entry = data.id.replace("pokemon-container", "");
    pokedex_entry = pokedex_entry.replace("placed", "");

    document.getElementById("description-container").className = "show";
    document.getElementById("moves-default").className = "hide";
    document.getElementById("stats-default").className = "hide";
    document.getElementById("evolution-default").className = "hide";
    document.getElementById("move-list").className = "show";
    document.getElementById("stat-list").className = "show";
    document.getElementById("evolution-chain").className = "show";

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
        document.getElementById(stat_dictionary[i]).style.width = stat * 1.2 + "px";
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
    let type = document.createElement("div");
    type.className = "move-type";
    if (move_array[move_number]['type']) {
        type.textContent = move_array[move_number]['type']['name'];
    }
    type.style.backgroundColor = type_color_schemes[move_array[move_number]['type']['name']];
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
    evolution_container.className = "pokemon-container-evolution";
    evolution_container.id = evolution_container.id + "_chain";
    evolution_container.style.display = "block";
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
    change_teambuilder_screen('team', 'team-container');

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
        await new Promise(resolve => setTimeout(resolve, delay));

        // remove pokemon if rules are not met
        if (pokemon_container.classList.contains("is_legendary")) {
            if (!settings["legendaries_on"]) {
                clear_slot(pokemon_slot, slot_number);
            }    
        }

        if (pokemon_container.classList.contains("is_mythical")) {
            if (!settings["mythicals_on"]) {
                clear_slot(pokemon_slot, slot_number);
            }
        }

        if (!settings["duplicates_on"]) {
            let types = pokemon_container.childNodes[3];
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

        // remove highlight once slot contains a valid pokemon
        pokemon_slot.style.border = "1px solid black";
    }
}

async function initialize_generation_graphics() {
    document.getElementById("overlay").classList.toggle("overlay");
}

async function remove_generation_graphics() {
    document.getElementById("overlay").classList.toggle("overlay");
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