# Find the Parasites

## Technologies Used

- React
- Firebase
- CSS

### Descripton

This is a game similar to "Where's Waldo" or "Where's Wally" in which you have to search for Parasites that have overtaken your house. Find and shoot the parasites in order to win. The game is timed and users' scores are recorded to a leaderboard in which they can compete with each other to get the highest score. At the moment there have been thousands of plays with the top scores all under 0.5 seconds. People seemed to really enjoy this one.

### Challenges

1. Cursor location
   Tracking the cursor location was something I initially had no idea how to even go about. Once I looked through the mouseevent object it became a little clearer on how I would track the cursor location.

2. Character location
   Once I understood how to track the cursor location it was relatively easy to find the character location using the same principles. Click and get X and Y location. However, I had two problems: when the page was resized all the locations would change and the y-axis location didn't seem to start at 0.

I discovered that I could offset the y location which solved the latter issue but solving for page adjustment proved a little tricky. Basically I converted the pixels into a percentage of the web page and used that determine the location, regardless of size.

3. Timer
   After I solved the location issues I thought implementing a timer would be easy. Apparently setInterval and React do not get along well, as I have learned. After some hours of research I decided upon placing it into a useEffect with a cleanup function to clear the interval.

4. Firebase
   Getting firebase set up was easier than I thought once I had read the documentation. Firestore and Storage worked pretty smoothly. I actually ran into issues with hosting (which should have been the simplest) as the documentation basically said to use the CLI and hit init. Nothing seemed to work until I figured out that I had to edit the JSON to work properly.

This application was built using React and CSS.

This is a game similar to "Where's Waldo" or "Where's Wally" in which you have to search for Parasites that have overtaken your house. Find and shoot the parasites in order to win.
