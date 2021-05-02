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

data = requests.get("https://pokeapi.co/api/v2/pokemon-species/3/").json()

print(data["flavor_text_entries"][0]["flavor_text"])

# for flavor in data["flavor_text_entries"]:
#     print(flavor["flavor_text"])
