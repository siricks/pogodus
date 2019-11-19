const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q=";
const BASE_CITY = "Saint Petersburg";
const BASE_PARAMS =  "&units=metric&APPID=e9db0ef1f52e36e18635becd6da63800";

/**
 * get openWeather api url
 * @param city
 * @returns {string}
 */
function getApiUrl(city) {
    return `${BASE_URL}${city}${BASE_PARAMS}`;
}


export function defaultCityWeather(dispatch) {
    fetch(getApiUrl(BASE_CITY))
        .then(response => response.json())
        .then(jsonResponse => {
            dispatch({
                type: "SEARCH_CITIES_SUCCESS",
                payload: [jsonResponse]
            });
        });
}

export function searchCityWeather(searchValue, dispatch) {
    dispatch({
        type: "SEARCH_CITIES_REQUEST"
    });

    fetch(getApiUrl(searchValue))
        .then(response => response.json())
        .then(jsonResponse => {
            if (jsonResponse.base === "stations") {
                dispatch({
                    type: "SEARCH_CITIES_SUCCESS",
                    payload: [jsonResponse]
                });
            } else {
                dispatch({
                    type: "SEARCH_CITIES_FAILURE",
                    error: jsonResponse.Error
                });
            }
        });
}
