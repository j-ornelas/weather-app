### Weather Forecast app

Created in Typescript / React Native.


#### Running app:

The app was created using Expo for demo simplicity

- Add your API key to private.js in the root directory
- `npm install`
- `npm start`


#### Known issues:
###### If I had more time, I would have...
- Used an external server to handle API to avoid exposing API key in js bundle.
- Added loading indicators to buttons when async functions are called.
- Gracefully handled a user denying location services
- Refactored the search type components (lat/long, city/zip) to be a single reusable component.
