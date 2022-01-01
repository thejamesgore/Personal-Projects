# Luxury Concierge iOS App
---

Stretch my knowledge of React & calling Apis to React-Native

## Technologies Used

react-native
react-native-elements
react-native-maps
react-native-maps-directions
react-navigation
react-redux
google-autocomplete-api
google-places-api
google-distance-matrix-api
## How To Demo

There are some base requirements needed to demo this build. This was built for iOS so some styling does not work properly on android due to differences in the repspective opereating systems however the issues are purely cosmetic except for one and if you wish to test the app using android or android emulator you can too.

### Getting your Google Dev API keys

1. Navigate to https://console.cloud.google.com/ and sign in with your Google account, agree to the terms, and follow the first basic isnstructions
2. Click Select a project, then new project, follow the set up instructions, and select your project from the dropdown menu
3. Click APIs & Services, library, then in search bar enter the google APIs used for this project and add them
4. Click on the Credentials tab then click create credentials. Follow the instructions and your api key will be generated
5. In the app root folder create a .env file and on the first line enter GOOGLE_MAPS_APIKEY= followed by your generated API key without spaces or quotations
### Running the app

1. Install the required packages using `yarn` in the app root folder
2. If not already installed, install expo using `yarn add expo`
3. Install xcode from the app store if you do not have an iPhone and wish to run the iOS build
4. In the app root folder type `expo start`
5. Download Expo Go from the iOS or Android App Store
6. To run on your phone scan the QR code displayed after running expo start
7. To run on your machine in terminal after typing `expo start` press `i` to launch the iOS app or alternatively use the GUI

## Wireframes

Todo

## Functionality

Homescreen where the user can:
-   Hire a chauffeur
-   Rent a sports car 
-   Rent a private jet
-   Book a table for dinner (Skip the queue)
-   Book event tickets
-   Assistant / Live chat

## Milestones
Base functionality reached as demonstrated by the video below which if you click takes you to a YouTube high res version
[![Base App](https://user-images.githubusercontent.com/83005220/147848918-5461e5f3-48f0-40be-9158-15ac84d1389e.gif)](https://www.youtube.com/watch?v=0XkzknANB_U "Base App")

## Learning Points From This Project
Usefulness of optional chaining when debugging errors
