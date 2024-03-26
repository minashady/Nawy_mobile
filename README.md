# Nawy React Native simple listing apartments app

## Technology used
This web application was build with Next.js:

- MongoDB as our NoSQL database
- Expo as our NodeJS wrapper
- ReactNative for our view library
- NodeJS for server-side JS runtime enviroment

Additional libraries used:
- Axios - promise-based http client
- mongoose - Object Document Mapper (ODM) of choice
- Our dependencies and their verison :
   "@expo/config": "^8.5.4",
    "axios": "^1.6.7",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "expo": "~50.0.11",
    "expo-constants": "~15.4.5",
    "expo-dev-client": "~3.3.9",
    "expo-font": "^11.10.3",
    "expo-linking": "~6.2.2",
    "expo-router": "~3.4.8",
    "expo-status-bar": "~1.11.1",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-native": "0.73.4",
    "react-native-dotenv": "^3.4.11",
    "react-native-safe-area-context": "4.8.2",
    "react-native-screens": "~3.29.0",
    "react-native-web": "~0.19.6",
    "sharp": "^0.33.2"
## Link to video

-Link
-On android

[Video](https://drive.google.com/file/d/1HtCbVHeu5aHnzYF4tDW_Q7vd0PpnRP99/view?usp=sharing)

-On Web
[Video](https://drive.google.com/file/d/1Zg_OpppRoSoHaNLmCKlS-TW4KPCQj7aF/view?usp=sharing)


## Docker
Docker not possible here as backend is in the Next.js app found here [Nawy](https://github.com/minashady/Nawy)

Once there you can use to docker to get the backend working

1.  In your terminal from folder navigate to

         /my-app
2.  Run this command (Docker and docker-compose must be installed on your machine)

        docker-compose up
  
As for the React Native app it will need manual start

## Installation for manual start up

- Make sure you have [NodeJS](https://nodejs.org/en/) installed on your machine

  You can check by running

         node -v

  in your terminal to make sure NodeJS is setup correctly
  - Make sure to include .env file in the backend directory

### required installations:
1.  In your terminal from folder navigate to

         /my-app

2.  Install required packages by running

         npm i

### How to run the Backend:

1.Navigate to these 3 files
  1.Nawy_mobile\hook\getDetails.js
  2.Nawy_mobile\hook\useFetch.js
  3.Nawy_mobile\app\search\[id].js

2.For each file change the 
  const API_BASE_URL = "http://192.168.1.111:3100";
  to the ip address of the machine you are running the backend from
  such that const API_BASE_URL = "http://<Backend ip address>:3100";

  as shown here
  ![image](https://github.com/minashady/assets/blob/main/IPforAPI.png)

3.  Spin up the development server using

          npx start

    open your browser at http://localhost:3000 or scan QR code from terminal on express go app


## API reference for backend
As we use query for all our require(s) from the server we have included screenshots with the included query requirements for all functions referenced 

### /apartments

1.  /getApartments (get) 

    Request query
![image](https://github.com/minashady/assets/blob/main/apartmentListing.png)


2.  /createApartment (post)
    
    Request query
     ![image](https://github.com/minashady/assets/blob/main/apartmentCreation.png)

3. /apartmentDetails (post)
    Request query
      ![image](https://github.com/minashady/assets/blob/main/apartmentDetails.png)



## Tests

- Postman can be used to test the functionality of different API endpoints make sure to attach bearer token if endpoint requires token

- Any browser can be used to test the functionality of the frontend webpages and web compenents


## Credits

Mina Shady
