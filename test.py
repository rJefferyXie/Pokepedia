import requests

def get_inspect_info():
    data = requests.get("https://pokeapi.co/api/v2/pokemon/3/")
    data = data.json()

    moves = data["moves"]
    for move in moves:
        data2 = requests.get(move["move"]["url"]).json()
        print(move["move"]["name"], data2["damage_class"]["name"])
        # print(move["move"]["name"], move["version_group_details"][0]["level_learned_at"], move["version_group_details"][0]["version_group"])

# get_inspect_info()

# data = requests.get("https://pokeapi.co/api/v2/move/15/").json()

# print(data["power"])

# data = requests.get("https://pokeapi.co/api/v2/pokemon-species/3/").json()

# print(data["flavor_text_entries"][0]["flavor_text"])

# for flavor in data["flavor_text_entries"]:
#     print(flavor["flavor_text"])


for i in range(1, 252):
    data = requests.get("https://pokeapi.co/api/v2/evolution-chain/" + str(i) + "/").json()

    print(data['chain']['species'])

    for i in range(0, len(data['chain']['evolves_to'])):
        if data['chain']['evolves_to'][i]['evolution_details'][0]['trigger']['name'] == "level-up":
            print(data['chain']['evolves_to'][i]['evolution_details'][0]['trigger']['name'], 
            data['chain']['evolves_to'][i]['evolution_details'][0]['min_level'], 
            data['chain']['evolves_to'][i]['species'])

        elif data['chain']['evolves_to'][i]['evolution_details'][0]['trigger']['name'] == "use-item":
            print(data['chain']['evolves_to'][i]['evolution_details'][0]['trigger']['name'], 
            data['chain']['evolves_to'][i]['species'])

    if len(data['chain']['evolves_to']) > 0:
        data = data['chain']['evolves_to'][0]
        if len(data['evolves_to']) > 0:
            print(data['evolves_to'][0]['evolution_details'][0]['min_level'], data['evolves_to'][0]['species'])


# data = requests.get("https://pokeapi.co/api/v2/evolution-chain/67/").json()

# print(data['chain']['species'])

# for i in range(0, len(data['chain']['evolves_to'])):
#     print(data['chain']['evolves_to'][i]['species'])
