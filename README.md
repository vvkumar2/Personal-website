# Personal Website

I used React along with HTML and CSS to create a dynamic personal portfolio website, which displays my skills, work experience, and projects. 
This website is hosted at https://varunkumar.org/.

## File structure

* The package.json files contain information for npm to run this program
* .gitignore contains the files that I did not commit to this repository

Important files:
- src/
  - components/
    * this contains all the React components that I created and implemented in App.js
  - sections/
    * this contains the entire sections that were included in the website (about, skills, work experience, ...)
  - App.js
    * this contains the final React that is rendered onto the webpage
- public/
  - index.html
    * this is the html file that npm renders (contains the HTML that is rendered from App.js as well)


## Available Scripts

In the project directory, you can run:

##### `npm start`
* to run the app in the development mode

##### `npm run build`
* to build a production version of the app
