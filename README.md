Netflix Clone

A simple Netflix-style website built with plain HTML, CSS and JavaScript (no frameworks or libraries). Made for learning purposes.

Project Structure
netflix-clone/
├── index.html   # Page structure
├── style.css    # Styling and layout
├── script.js    # Interactivity and data
└── README.md
How to Run
Keep all three files (index.html, style.css, script.js) in the same folder.
Double-click index.html to open it in any modern browser (Chrome, Edge, Firefox).

No installation or internet connection is required.

Features
Sticky navbar that turns solid when you scroll
Hero banner with Play and More Info buttons
Multiple movie rows with horizontal scrolling and arrow buttons
Hover zoom effect on movie cards
Click a card to open a details popup (close with the X, Esc key, or by clicking outside)
"+ My List" toggle inside the popup
Live search that filters movies as you type
Responsive design for mobile screens
Technologies Used
HTML5: semantic page structure
CSS3: flexbox, gradients, transitions, animations, media queries
JavaScript (ES6): DOM manipulation, event handling, array methods
How It Works
index.html contains the navbar, hero section, an empty <main id="rows"> container, the modal popup and the footer.
script.js stores the movie data in an array, then creates the rows and cards dynamically using createElement and appendChild.
Each movie card gets a unique gradient colour generated from its title, so no image files are needed.
style.css handles the dark theme, hover effects, modal animation and the responsive layout.
Customizing
Add or change movies: edit the categories array at the top of script.js.
Add a new row: add another object with a name and a movies list to the categories array.
Change the theme colour: replace 
#e50914 in style.css with any colour you like.
Use real posters: add an image URL for each movie and set it as the card's background-image in script.js.
Possible Improvements
Connect to a movie API such as TMDB for real posters and data
Save "My List" using localStorage
Add a trailer player inside the modal
Add a login / sign-up page
Disclaimer

This project is for educational purposes only. Netflix is a registered trademark of Netflix, Inc. This project is not affiliated with or endorsed by Netflix.
