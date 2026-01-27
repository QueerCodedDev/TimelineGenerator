import pandas as pd
import plotly.express as px
import json
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
from datetime import datetime

def generate_interactive_timeline(json_file):
    """
    Generates an interactive timeline visualization using Plotly from a JSON file.
    The JSON data should be a list of objects with 'event', 'start', and 'end' keys.
    """
    # 1. Load the JSON data from the file
    with open(json_file, 'r') as f:
        data = json.load(f)
    
    # 2. Convert the list of dictionaries to a Pandas DataFrame
    df = pd.DataFrame(data)
    
    # Ensure date columns are in datetime format
    df['start'] = pd.to_datetime(df['start'])
    df['end'] = pd.to_datetime(df['end'])

    # 3. Create the timeline visualization using Plotly Express

    # Plotly's timeline function treats 'start' and 'end' as horizontal bar boundaries
    fig = px.timeline(df, x_start="start", x_end="end", y="show", title="Project Timeline")
    
    # Customize the visualization
    fig.update_yaxes(autorange="reversed") # Reverse the order for a top-down timeline
    fig.update_layout(
        xaxis_title="Date",
        yaxis_title="Show",
        font=dict(family="Arial", size=12, color="black"),
        hovermode="x unified"
    )

    # 4. Display the figure (or save to an HTML file)
    # fig.show() # This will display the interactive plot in your web browser
    fig.write_html("interactive_timeline.html") # Save as an HTML file

    print("Interactive timeline saved to interactive_timeline.html")

def generate_static_timeline(json_file):
    """
    Generates a static timeline visualization using Matplotlib from a JSON file.
    """
    with open(json_file, 'r') as f:
        data = json.load(f)

    # Extract data
    dates = [datetime.strptime(item['start'], "%Y-%m-%d") for item in data]
    labels = [item['show'] for item in data]
    
    # Create figure and axes
    fig, ax = plt.subplots(figsize=(8, 5), constrained_layout=True)
    ax.set_ylim(-1, 1) # Set y-limits to center the timeline
    ax.set_yticks([]) # Hide y-axis
    ax.axhline(0, c='deeppink', zorder=1) # Draw horizontal timeline line

    # Plot events on the timeline
    ax.scatter(dates, np.zeros(len(dates)), s=100, c='palevioletred', zorder=2)

    # Add labels
    for i, (label, date) in enumerate(zip(labels, dates)):
        # Alternate label positioning above and below the line
        y_pos = 0.2 if i % 2 == 0 else -0.2
        ax.text(date, y_pos, label, ha='center', va='bottom' if y_pos > 0 else 'top', fontfamily='serif', fontweight='bold', fontsize=10)

    # Format the x-axis dates
    ax.xaxis.set_major_formatter(mdates.DateFormatter("%Y-%m-%d"))
    plt.xticks(rotation=45)

    # Display the figure
    plt.show()

# Example usage:
if __name__ == "__main__":
    import numpy as np # Required for static timeline np.zeros
    # Make sure to have the timeline_data.json file in the same directory
    generate_interactive_timeline("res/series_data.json")
    # generate_static_timeline("sample_data.json")
