-ChauffeurOptionsCard.js Should be chooseCar.js
-New card needed to select driver called ChooseChauffeur

- Create chauffeur options card where user can select their driver
- create splash image when the app loads before user sees the homescreen
- Create an accounts functionality so the user has to login to access the app
- Accounts page has all their details they can edit etc
- ETA using google api for travel time from origin to destination
- Find api for private jet flights (jettly.com has potential)
- Fly private page should take destination location, call jet's api and give travel information and closes airport ( can use https://aviation-edge.com/nearby-airport-and-city-api/)
- use booking.com or similar api for private stay
- find api for private sports car hire
- if unable to find any apis create one and host
- stop horizontal list (lux rentals & fly private) from being swipable left or right
- stop veritcal list (chauffeur services) from being swipable up or down


- Some functionality doesn't work on expo android emulation and only for iOS
    Platform.OS === "ios" ? "padding" : "height" 
    this is an example of how to have funcionality differ depending on platform used