import requests
import json

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


# for i in range(1, 153):
#     data = requests.get("https://pokeapi.co/api/v2/pokemon-species/" + str(i) + "/").json()
#     print(data['varieties'][0]['pokemon']['url'])

# print(data["flavor_text_entries"][0]["flavor_text"])

# for flavor in data["flavor_text_entries"]:
#     print(flavor)


# for i in range(1, 252):
#     data = requests.get("https://pokeapi.co/api/v2/evolution-chain/" + str(i) + "/").json()

#     print(data['chain']['species'])

#     for i in range(0, len(data['chain']['evolves_to'])):
#         if data['chain']['evolves_to'][i]['evolution_details'][0]['trigger']['name'] == "level-up":
#             print(data['chain']['evolves_to'][i]['evolution_details'][0]['trigger']['name'], 
#             data['chain']['evolves_to'][i]['evolution_details'][0]['min_level'], 
#             data['chain']['evolves_to'][i]['species'])

#         elif data['chain']['evolves_to'][i]['evolution_details'][0]['trigger']['name'] == "use-item":
#             print(data['chain']['evolves_to'][i]['evolution_details'][0]['trigger']['name'], 
#             data['chain']['evolves_to'][i]['species'])

#     if len(data['chain']['evolves_to']) > 0:
#         data = data['chain']['evolves_to'][0]
#         if len(data['evolves_to']) > 0:
#             print(data['evolves_to'][0]['evolution_details'][0]['min_level'], data['evolves_to'][0]['species'])

# for i in range(1, 151):
#     data = requests.get("https://pokeapi.co/api/v2/pokemon-species/" + str(i) + "/").json()
#     print(data['varieties'][0]['is_default'], data['varieties'][0]['pokemon']['url'])

# data = requests.get("https://pokeapi.co/api/v2/evolution-chain/67/").json()

# print(data['chain']['species'])

# for i in range(0, len(data['chain']['evolves_to'])):
#     if data['chain']['evolves_to'][i]['evolution_details'][0]['trigger']['name'] == "use-item":
#         print(data['chain']['evolves_to'][i]['evolution_details'][0]['item']['name'])
#         print(data['chain']['evolves_to'][i]['evolution_details'][0]['item']['url'])


#     if data['chain']['evolves_to'][i]['evolution_details'][0]['trigger']['name'] == "level-up":
#         if data['chain']['evolves_to'][i]['evolution_details'][0]['location']:
#             print(data['chain']['evolves_to'][i]['evolution_details'][0]['location']['name'])
#         elif data['chain']['evolves_to'][i]['evolution_details'][0]['time_of_day']:
#             print(data['chain']['evolves_to'][i]['evolution_details'][0]['time_of_day'])
#         elif data['chain']['evolves_to'][i]['evolution_details'][0]['min_affection']:
#             print(data['chain']['evolves_to'][i]['evolution_details'][0]['min_affection'])

        

# for i in range(0, len(data['chain']['evolves_to'])):
#     print(data['chain']['evolves_to'][i]['species'])


# for i in range(1, 10):
#     data = requests.get("https://pokeapi.co/api/v2/move/" + str(i) + "/").json()
#     print(data['name'], data['effect_entries'][0]["effect"])

# data = requests.get("https://pokeapi.co/api/v2/move/5/").json()
# print(data['name'], data['effect_entries'])

# print(data['name'], data['accuracy'])



data = requests.get("https://pokeapi.co/api/v2/pokedex/2/").json()

for i in range(0, len(data['pokemon_entries'])):
    with open(str(i) + ".json", "w") as my_file:
        json.dump(requests.get(data['pokemon_entries'][i]['pokemon_species']['url']).json(), my_file)

# xd = open("0.json", "r")

# data2 = json.load(xd)

# print(data2['base_happiness'])

# for i in xd:
#     print(i)

# print(xd['name'])