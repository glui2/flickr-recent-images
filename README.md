# flickr-images-app

## Project Description 
This project takes advantage of the Flickr APIs in order to display images based on user search input.

This project has a simple structure:
- App component
  - Search Bar component (OOTB Vuetify component)
  - ImageSquare component (Dynamically renders one per image returned from the Flickr API)

Upon starting up the app (mounting the App component), the application will by default display the 100 most recently uploaded images for the user using the flickr.photos.getRecent API. It is currently set to display a maximum of 100 images to prevent overworking the server by rendering too many images at once, and so that the user isn't overwhelmed with too many images to scroll through either. 

When the user enters in some text in the text field at the top of the page, upon input the application will POST a request to the flickr.photos.search using the text-field input as a search phrase. Flickr will then search its images database for this text input within the image titles, tags and descriptions and return the results as an array for the application to display. Debouncing has been implemented, so that only after 500ms of no more input a POST request will be sent to the flickr.photos.search API. This has been implemented to minimize the number of API calls being sent, while maintaining convenience for the user so that they can have continually updated results without need to press Enter each time. This makes for a more fluid user experience, while minimizing load on the backend server as well as the client server when handling the API responses.  

## Packages and technologies used in this project 
- Vue.js 
  - used due to its simplicity in setting up a project with the technologies needed using the command `vue create`
  - plenty of support and documentation 
  - the organised nature of the framework makes it a personal preference over something like React
  
- Vuetify
  - Used for OOTB styling and components, as this project is more to demonstrate functionality rather than aesthetics and styling
  - easy to install 

- Debounce
  - package that makes it easy to implement debouncing in Vue
  
- Axios
  - Used for making API calls as it is easy to implement using JavaScript 


## Project setup

### Dependency setup
First, install the required packages using:
```
npm install
```

or for macs:

```
yarn install
```

### API Key setup 

To obtain an API key follow the steps as outlined here: https://www.flickr.com/services/api/misc.api_keys.html
Create a `.env` file in the root of the project folder, and input your Flickr API key and secret as follows:
```
VUE_APP_FLICKR_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
VUE_APP_FLICKR_SECRET=xxxxxxxxxxxx
```

### Compiles and hot-reloads for development
Run the application on a local server using:
```
npm run serve
```

or for macs:

```
yarn run serve
```

### 

## Future Steps to implement 
Moving forward, the following features still need to be implemented: 

- Unit tests
  - Test "Currently no images to display" is shown when the `images` array is empty (ie. no images) 
  - Test that the "Number of images" counter matches the number of images in the `images` array
  - Test the `searchRecent` method 
  - Test the `searchInput` method
  - Test that the number of images displayed on screen matches the number of image objects returned from a mock API

- Integration tests
  - Test that typing something into the input will display a number of images equal to the number of image objects returned from a mock API

- Display a higher resolution image 
  - Create an onClick method  eg onImageClick() 
  - onImageClick should:
    - disable scrolling 
    - append an `<img>` element with the same img src to `<body>` with class that displays at original resolution/aspect ratio, and has highest Z-index so that it displays above all other images
    - create a close button should also be generated and appended to `<body>` that destroys the `<img>` element and the close button itself, removing it from the DOM, and re-enables scrolling.
    

