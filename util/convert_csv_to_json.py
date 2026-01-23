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


with open('/workspaces/TimelineGenerator/shows_timeline/next_chapter_data.csv') as file:
    csv_data = csv.reader(file)

    with open('/workspaces/TimelineGenerator/shows_timeline/output_data.json', 'w') as ofile:
        for lines in csv_data:
            ofile.write('{\n')
            ofile.write(f'    "season": "{lines[0]}",\n')
            ofile.write(f'    "episode": "{lines[1]}",\n')
            ofile.write(f'    "title": "And {lines[2]}",\n')
            ofile.write(f'    "air_date": "{lines[3]}"\n')
            ofile.write('},\n')