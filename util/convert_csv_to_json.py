import csv

data = []
title_modifiers = {
    'Leverage': {
        'before': 'The',
        'after': 'Job'
    },

    'Librarians': {
        'before': 'And the'
    }
}


with open('/workspaces/TimelineGenerator/shows_timeline/leverage_data.csv') as file:
    csv_data = csv.reader(file)
    for lines in csv_data:
        print('{')
        print(f'    "season": "{lines[0]}",')
        print(f'    "episode": "{lines[1]}",')
        print(f'    "title": "The {lines[2]} Job",')
        print(f'    "air_date": "{lines[3]}"')
        print('},')