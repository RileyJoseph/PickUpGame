# PickUpGame
Find or create a Pick-up Game near you.


file explaining the technologies used, the approach taken, unsolved problems, etc

#Technologies:
bcrypt
body-parser
ejs
express(-sessions)
foursquarevenues
geocoder
pg(-hstore)
request
sequelize(-cli)
mapbox
auth

The user queries foursquare's 'venues' API to find (in this case) parks near them.
After they submit their choice of park (and game details) their selection is added to a database.
Using mapbox to render a map, and calling back to the database, geocoder plots the lat and loc
(associated with the park data from venues).
During the same call to the database, the rest of the game info is called and put into a table next to the map.
Sessions is used to prevent non-users from posting games.

#Approach:
What seems like years ago, I started with my wireframe (presumably attached somewhere) which gave me a concept
for a design layout. From there I was able to determine which technologies I'd need to get a basic structure down.
Next, I set arranged folders in my main director to meet what I had determined to be my needs.
I began with the first page, two buttons, one that would require sign-up/create a game and one that would go to the map page.
I built the game page next, setting up my database for games and players (users) which overlap on playerId.
After, I did the map page so the points would rend. Then, I struggled through getting sessions operational because
my routes/calls had gotten mixed up when I made an extra game page. When I got that, I fixed the layout of most pages
so it wasn't as horrible looking, built another page that gave the details to a game and got stuck...

#Unsolved problems:
When I made my second map page, I wasn't able to render the single point representing the game.
The park search generally starts with a parking lot.

#To Do:
Changing the markers
Game list filters (time, date, status)
Marker display filters (same as above)
Player page (displays player and games)
Games attended