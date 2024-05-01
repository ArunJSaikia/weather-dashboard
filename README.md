# Angular Weather Dashboard

Welcome to the Angular Weather Dashboard project! This dashboard allows users to search for and display the current weather conditions and the forecast for the next three days for any chosen location.

## Features

- **Location Search:** Implement a search functionality that allows users to enter a city or zip code and retrieve weather information for that location.
- **Current Weather Display:** Show the current weather information including temperature, location, wind speed, humidity, and an icon representing the weather condition.
- **3-Day Forecast:** Display a weather forecast for the next three days, including high and low temperatures, weather condition descriptions, and icons.
- **Responsive Design:** The dashboard is responsive and functional on both desktop and mobile devices.

## Technology Stack

- **Framework:** Angular (v15+)
- **API:** WeatherAPI (WeatherAPI.com)
- **Styling:** SCSS
- **CSS Framework:** Bootstrap
- **Component library:** Angular Material

## Setup and Installation

1. Clone the repository and cd weather
2. npm install or npm i 
3. Sign up at WeatherAPI.com to obtain a free API key.Replace 'apiKey' value in the WeatherApiService with your actual API key value.
4. ng serve or ng s
5. View the application: Open your browser and navigate to http://localhost:4200/.

## Used Angular Features

1. Used HttpClient and HttpParams to call the API.
2. Using ngFor directive in Angular templates in order to display dynamically repeated data in a template.
3. Using Input, Output and Eventemitter<> to flow the data from one component to another.
4. Using angular life cycle hooks like ngOnInit and ngOnChanges to act the instances at appropriate time.
5. Using bootstrap classes to optimize the code.

## Architecture of the project 

1. Components
Location Search Component: Allows users to search for locations by city name or zip code.
Current Weather Component: Displays the current weather conditions for a selected location.
Forecast Component: Shows the weather forecast for the next three days for a chosen location.

3. Services
The WeatherApiService handles HTTP requests to the WeatherAPI to fetch location data, current weather data, and weather forecast data.

5. API Integration: WeatherAPI
The project integrates with the WeatherAPI (WeatherAPI.com) to retrieve weather data for various locations.
The WeatherAPI provides endpoints for searching locations, fetching current weather data, and obtaining weather forecasts.

7. Styling: SCSS and CSS Frameworks
Styling is implemented using SCSS .
Optionally, CSS frameworks like Bootstrap used for rapid styling and layout.

9. Responsiveness
The weather dashboard is designed to be responsive and functional on both desktop and mobile devices.
Responsive design techniques are employed to ensure that the layout and content adapt to different screen sizes and orientations.

