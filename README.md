# ELLIPSIS_JS_CHALLENGE by Patrick Simon Katambi

![alt text](https://github.com/patrick-katambi/ellipsis_js_challenge/blob/main/ellipsis.PNG?raw=true)

![alt text](https://github.com/patrick-katambi/ellipsis_js_challenge/blob/main/ellipsis2.PNG?raw=true)

## Live demonstration [`here`](https://ellipsis-js-challenge.vercel.app/) deployed on [`vercel`](https://vercel.com/)

## Setup Instrunctions
`1` Download the zip file and extract the file or clone this repo into your directory of choice

`2` Make sure you have node js installed in your machine, the go to the directory specified in `1` and run in the terminal `npm install`

`3` Once complete, you can start a local development server by running `npm start`

`4` You can now view the project on `http://localhost:3000/`

## Technical and Architectural choices

### File structure

|-- public

|-- src

|------ app
    
|------ assets
    
|------ components
    
|------ core
    
|------ features
    
|------ pages

`app` --> redux store for state management

`assets` --> storing static files such as logo images svg files

`components` --> breaking a react component into smaller reuuable units

`core` --> storing helper functions and other utilities such as storing all api endpoints configurations

`features` --> this is where the main functionalities of a project are done, and can then be imported to be used in `pages`

`pages` --> describing how a page looks like. Here I make use of all configurations as mentioned above to create a user experience on the web

### Theme
I usually preffer to use a dark theme as a benchmark before migrating and having both light and dark modes

## Improvements I could make?
If I am to improve my submission, I would probably;

`1` Include a page for viewing a single series or movie, showing its details in more depth
`2` Pick a better font family, and combine multiple font families to create amazing contrast and balance in the web contents

## What I would do differently?
If more time was given, I would definately;

`1` Swap out the redux configuration since the default react hooks handled the states perfectly

## Proud project so far
A `Next js` + `Three js Fiber` 3D websiite rendering a planet in space.

![alt text](https://raw.githubusercontent.com/patrick-katambi/earthkit/main/earth.PNG?raw=true)

Github Link --> [`EarthKit Repo`](https://github.com/patrick-katambi/earthkit)

Live website --> [`EarthKit Demo`](https://earthkit-okarlmhcz-patrick-katambi.vercel.app/) 
