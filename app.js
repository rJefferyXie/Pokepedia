function retrieve_data(gen) {

    // Create new section for pokedex / other
    if (document.getElementById("pokemon__section") == null) {
        pokemon__section = document.createElement("div");
        pokemon__section.id = "pokemon__section";

        search = document.createElement("input");
        search.type="text";
        search.id = "pokemon__search";
        search.onkeyup = search_pokemon;
        search.placeholder = "Search for pokemon..";

        pokemon__list = document.createElement("ul");
        pokemon__list.id = "pokemon__list";

        pokemon__section.appendChild(search);
        pokemon__section.appendChild(pokemon__list);  
        
        document.body.appendChild(pokemon__section)
    }

    // Clear the previous pokedex results
    else {
        document.getElementById("pokemon__list").innerHTML = "";
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
    scroll_to("#pokemon__section");
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

    if (data["types"].length == 1) {
        var type_str = data["types"][0]["type"]["name"];
        type_str = type_str.charAt(0).toUpperCase() + type_str.slice(1);
        type_color = type_checker(type_str);

        var type = document.createElement("div");
        type.style.backgroundColor = type_color;
        type.id = "pokemon__type";
        type.textContent = type_str;
        types.appendChild(type);
    }

    else {
        var type_str = data["types"][0]["type"]["name"];
        type_str = type_str.charAt(0).toUpperCase() + type_str.slice(1);
        type_color1 = type_checker(type_str);
        var type1 = document.createElement("div");
        type1.id = "pokemon__type";
        type1.textContent = type_str;
        type1.style.backgroundColor = type_color1;
        types.appendChild(type1);

        type_str = data["types"][1]["type"]["name"];
        type_str = type_str.charAt(0).toUpperCase() + type_str.slice(1);
        type_color2 = type_checker(type_str);
        var type2 = document.createElement("div");
        type2.id = "pokemon__type";
        type2.textContent = type_str;
        type2.style.backgroundColor = type_color2;
        types.appendChild(type2);
    }
    pokemon__container.appendChild(types);
    document.getElementById("pokemon__list").appendChild(pokemon__container);
}

function search_pokemon() {
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

  function type_checker(type_str) {
    if (type_str === "Fire") {
        return "LightCoral";
    }

    else if (type_str === "Water") {
        return "lightblue";
    }

    else if (type_str === "Grass") {
        return "lightgreen";
    }

    else if (type_str === "Electric") {
        return "lightyellow";
    }

    else if (type_str === "Psychic") {
        return "lightpink";
    }

    else if (type_str === "Poison") {
        return "MediumPurple";
    }

    else if (type_str === "Fighting") {
        return "salmon";
    }

    else if (type_str === "Flying") {
        return "Azure";
    }

    else if (type_str === "Ghost") {
        return "RebeccaPurple"
    }

    else if (type_str === "Dark") {
        return "DimGrey";
    }

    else if (type_str === "Bug") {
        return "Olive";
    }

    else if (type_str === "Steel") {
        return "LightSteelBlue";
    }

    else if (type_str === "Rock") {
        return "SaddleBrown";
    }

    else if (type_str === "Ice") {
        return "PowderBlue";
    }

    else if (type_str === "Ground") {
        return "SandyBrown";
    }

    else if (type_str === "Normal") {
        return "LightGrey";
    }

    else if (type_str === "Dragon") {
        return "DarkSlateBlue";
    }
  }

  function scroll_to(section) {
    var destination = document.querySelector(section).offsetTop;
    window.scroll({
      top: destination, 
      behavior: "smooth"
    });
  }