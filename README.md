# iTunes Search App Capstone



# Summary: 

This is a full stack application built using react.js and express.js for front and backend respectively. A user can enter any search term and 
the application will search and return relevant results using the iTunes API.

# How to use the app:

Items will be returned from movies to music to books etc. based on what is searched for.
Once search results are returned, a user can either do one of the following:

 - Preview the item by clicking on it.
 - Add the item to their favourites, as well as remove it from their favourites.

# How to set up the project
# Express Backend (localhost:3001) Setup: 


1. Navigate to the folder named "capstone" from the command line.

2. Type "npm install" to install the node modules required for the backend.

3. Once installation has completed, type "npm start" to start the backend server which will run on port 3001.


  # React frontend (localhost: 3000) setup:

1. Open a new command line but keep the old one open.(This is hosting our backend)

2. Navigate to the "client" folder inside the "capstone" folder using the command line and install node modules for the react front end.
To do this type "npm install" again.

3. When the installation has been completed, type "npm start" to start the front end which will open on localhost:3000.
It is important for the other command line to remain open as that is being used as the proxy server listening on port 3001

   - Axios: Will be used to help capture and return data to and from the API
   - Body-Parser: Will be used to help return the JSON Data into an HTML format
   - Cors : Will be used to assist in returning data from the API
   - Express: Installing this will give us our Server 
   - Fetch: Used to fetch data from the API
   - Helmet: Used to secure our application
   - Morgan: Used to secure our application in DEV
   - Node-Fetch: Used to fetch data from the API
   - Serve-Favicon: Used to serve the Favicon icon that is located in the Public folder and fuctions as middleware 
     in our app to perfrom the action

4. All these items will be added to your package.json file as dependencies.
