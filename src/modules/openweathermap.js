const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=Saint Petersburg&units=metric&APPID=e9db0ef1f52e36e18635becd6da63800";

export function defaultCityWeather(dispatch) {
    fetch(API_URL)
        .then(response => response.json())
        .then(jsonResponse => {
            dispatch({
                type: "SEARCH_CITIES_SUCCESS",
                payload: [jsonResponse]
            });
        });
}
