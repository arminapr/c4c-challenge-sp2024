This is the TypeScript version of the starter code for Code4Community's technical challenge for Fall 2024. 
For more detailed information about each of the parts of this starter code, check out the [`INFO.md`](INFO.md) file

## Prerequisites

If you don't have them already, you'll need to install Node.js/NPM and Git:
- Node.js + NPM - install [here](https://nodejs.org/en/download/package-manager) (we highly recommend using at least Node 18.0.0 + NPM 8.6.0)
   - You can choose to install via the command line under "Package Manager", or download an installer under "Prebuilt Installer"
   - Node and NPM are installed together
- Git - install [here](https://git-scm.com/downloads)

## Setup Instructions

1. Clone this repo on to your computer. You can do so with the [desktop app](https://desktop.github.com/), or in a terminal with the following:
```
git clone https://github.com/arminapr/c4c-challenge-sp2024
```
2. In a terminal, run `npm install` **at the root of this project** to install the required packages
3. Run `npm run dev` **at the root of this project** to start the app locally
4. Visit `http://localhost:3000` to view the website
    
    4a. The backend will be available at `http://localhost:4000`

## High-Level Overview

This is a web application that uses TypeScript, HTML, and CSS as well as Node.js and Express for the backend server. The front end of the application is hosted `http://localhost:3000` and the back end of the application is hosted on `http://localhost:4000`. 

### Frontend
1. Provides a tile for entering information about a new partner, which entails:
   - Partner Name
   - Partner Description
   - Partner Website URL 
   - Partner Logo URL (Optional)
   - Partner Activity Status
   - Partner ID (this is not written the form, it is automatically assigned, using the partner's name)
2. Provides a tile for each partner detailing all of their public information (all the data above other than their ID), with the website URL linked to the partner name. 

### Backend
1. Has API endpoints for retrieving the partner data (using GET `/`), creating new partner data (using POST `/`), and deleting partner data (DELETE `/:id`)
2. Stores the partner data in an in-memory object **partners**

### Features
- Display partner data to the users
- Allow users to add and delete new partners using information sent to/from the backend to update the website in real time. 

## Design Decisions
1. Condensed the description for partners into a max of 200 characters, unless the user decides to click on read more. This helps to keep the front end website slightly more easy-reading for users. 
2. Changing the color of the buttons when they are hovered over. This makes it easier for some users to understand that this is a button since it changes colors. 
3. Moving the logo to the right side of the title instead of above because it makes the cards look cleaner and smaller. Having a smaller cards means that they can fit easier on the screen.
4. Justifying paragraphs for a cleaner partner tile. 

## Reflection
### What did I learn
1. By completing this project, I learned how to effectively connect the backend (using Express and Node) and the frontend through the integration of the different files in the project.
2. I learned more about accessibility designs.
3. Given what I know, I would have started to work on writing the necessary methods to integrade the server and the front end in the beginning to not have to tackle the challenge of elements not directly responding to clicks or changes in the end. 

### What would I have done differently
If I had more time to work on this project, I would have done a more modern design, using different libraries that are available within React (other than Material). I would also add some animation to some of the partner elements, potentially making it an automatic scroll gallery of tiles. 

### Issues that I ran into
Given that I did not have too much backend experience, I ran into very minor issues trying to post to the server and delete at first. I was able to resolve this by looking up documentation and information about Express.js and was able to add the functions that would get the backend to work appropriately. 

### Bonus Features
1. Making the title clickable to go to the link of the partner's website. This would give more information about the partner to those who want to read it. 
2. Adding a filter for sorting partners by alphabetic order.
3. Adding a filter to filter partners by whether or not they are active. 
4. Footer for showing who developed the web application. Most websites have a footer that let the user know who hosts or develops the website. 