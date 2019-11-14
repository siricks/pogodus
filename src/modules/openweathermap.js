export const searchOpenWeather = (searchValue, dispatch) => {
    dispatch({
        type: "SEARCH_CITIES_REQUEST"
    });

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&APPID=e9db0ef1f52e36e18635becd6da63800`)
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
};
