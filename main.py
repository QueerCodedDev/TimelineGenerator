import json
from datetime import datetime

json_file = 'res/shows_data.json'

with open(json_file, 'r') as f:
    data = json.load(f)

leverage = data[0]
leverage_redemption = data[1]
librarians = data[2]
librarians_next_chapter = data[3]
librarian = data[4]
mentalist = data[5]
supernatural = data[6]
psych = data[7]
psych_movies = data[8]

shows = [
    leverage, leverage_redemption,
    librarians, librarians_next_chapter, librarian,
    mentalist,
    supernatural,
    psych, psych_movies
]

for s in shows:
    print(f'{s['show']}:')
    for e in s['episodes']:
        print(f'{e['season']}.{e['episode']} on {e['air_date']}')

# print(leverage['episodes'][0]['air_date'])