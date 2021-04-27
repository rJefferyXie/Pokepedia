// --------------------------------------- All Constants / Variables --------------------------------------- // 

const type_color_schemes = // Each pokemon type mapped to its respective hex color
{ 
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

var team_strength = null;
var pokedex__page = document.getElementById("pokedex__page");
var region__page = document.getElementById("region__page");
var pokedex = document.getElementById("pokemon__list");

// --------------------------------------- Drag and Drop Section --------------------------------------- // 
function onDragStart(event) {
    // Make background dark to highlight where to drag pokemon
    pokedex__page.style.backgroundColor = "#363b3b";

    // Highlight each cell that does not contain a pokemon
    for (var i = 1; i <= 6; i++) {
        var pokemon_cell = document.getElementById("pokemon" + i);
        if (pokemon_cell.childElementCount <= 1) {
            pokemon_cell.style.backgroundColor = "#D3D3D3";
            pokemon_cell.style.border = "4px solid lightcyan";
        }
    }
    event.dataTransfer.setData("Text", event.target.id);
}

function onDragOver(event) {
    event.preventDefault();
}

function onDrop(event) {
    event.preventDefault();

    // If target call does not already have a pokemon in it
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
        event.target.style.backgroundColor = "#E0FFFF";
    }
}

function onDragEnd() {
    // Reset background to white after drop
    pokedex__page.style.backgroundColor = "white";

    // Reset each cell that does not contain a pokemon
    for (var i = 1; i <= 6; i++) {
        var pokemon_cell = document.getElementById("pokemon" + i);
        if (pokemon_cell.childElementCount == 1) {
            pokemon_cell.style.backgroundColor = "white";
        }
        pokemon_cell.style.border = "2px solid black";
    }
}


// --------------------------------------- Retrieve Pokemon Data Section --------------------------------------- //

function region_page() {
    pokedex__page.style.display = "none";
    region__page.style.display = "block";
    
    for (var i = 1; i <= 6; i++) {
        clear_slot(i);
    }
}

function retrieve_data(gen) {
    pokedex__page.style.display = "flex";
    pokedex.innerHTML = "";
    region__page.style.display = "none";

    fetch("https://pokeapi.co/api/v2/pokedex/" + gen + "/")
    .then(response => response.json())
    .then(data => get_pokemon_numbers(data))
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
    image.id = "pokemon__image" + data["id"]; 
    image.src = data["sprites"]["front_default"];
    image.draggable="false";
    return image;
}

function get_entry_number(data) {
    var number = document.createElement("div");
    number.id = "pokemon__number";
    number.textContent = "#" + data["id"];
    return number;
}

function get_name(data) {
    var name = document.createElement("a");
    name.id = "pokemon__name";
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

// function inspect_pokemon(pokemon) {
//     pokedex.style.backgroundColor = "black";
// }

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
}

function scroll_to(section) {
    var destination = document.querySelector(section).offsetTop;
    window.scroll({
        top: destination, 
        behavior: "smooth"
    });
}