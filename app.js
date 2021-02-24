function retrieve_data(gen) {
    var poke_list = document.getElementById("pokemon__list");
    while (poke_list.firstChild) {
        poke_list.removeChild(poke_list.firstChild);
    }
    
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
    var pokemon__container = document.createElement("li");
    pokemon__container.id = "pokemon__container";

    var image = document.createElement("img");
    image.id = "pokemon__image";
    image.src = data["sprites"]["front_default"];
    pokemon__container.appendChild(image);

    var number = document.createElement("div");
    number.id = "pokemon__number";
    number.textContent = data["id"];
    pokemon__container.appendChild(number);

    var name = document.createElement("a");
    name.id = "pokemon__name";
    name.innerHTML = data["name"].charAt(0).toUpperCase() + data["name"].slice(1);
    pokemon__container.appendChild(name);

    var types = document.createElement("div");
    types.id = "pokemon__types";
    for (var i = 0; i < data["types"].length; i++) {
        var type_str = data["types"][i]["type"]["name"];
        type_str = type_str.charAt(0).toUpperCase() + type_str.slice(1);
        
        if (type_str === "Fire") {
            pokemon__container.style.backgroundColor="LightCoral";
        }

        else if (type_str === "Water") {
            pokemon__container.style.backgroundColor="lightblue";
        }

        else if (type_str === "Grass") {
            pokemon__container.style.backgroundColor="lightgreen";
        }

        else if (type_str === "Electric") {
            pokemon__container.style.backgroundColor="lightyellow";
        }

        else if (type_str === "Psychic") {
            pokemon__container.style.backgroundColor="lightpink";
        }

        else if (type_str === "Poison") {
            pokemon__container.style.backgroundColor="MediumPurple";
        }

        else if (type_str === "Fighting") {
            pokemon__container.style.backgroundColor="salmon";
        }

        else if (type_str === "Flying") {
            pokemon__container.style.backgroundColor="Azure";
        }

        var type = document.createElement("div");
        type.id = "pokemon__type";
        type.textContent = type_str;
        types.appendChild(type);
    }
    pokemon__container.appendChild(types);

    document.getElementById("pokemon__list").appendChild(pokemon__container);
}

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('pokemon__search');
    filter = input.value.toUpperCase();
    ul = document.getElementById("pokemon__list");
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