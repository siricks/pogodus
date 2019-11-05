import React, {useReducer, useEffect} from "react";
import './App.scss';
import Aside from "./Aside";
import Header from "./Header";
import Footer from "./Footer";
import AddCard from "./AddCard";
import WeatherCard from "./WeatherCard";
import Search from "./Search";

const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=Saint Petersburg&units=metric&APPID=e9db0ef1f52e36e18635becd6da63800";

const initialState = {
    loading: true,
    cities: [],
    errorMessage: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SEARCH_CITIES_REQUEST":
            return {
                ...state,
                loading: true,
                errorMessage: null
            };
        case "SEARCH_CITIES_SUCCESS":
            return {
                ...state,
                loading: false,
                cities: action.payload
            };
        case "SEARCH_CITIES_FAILURE":
            return {
                ...state,
                loading: false,
                errorMessage: action.error
            };
        default:
            return state;
    }
};

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(jsonResponse => {
                dispatch({
                    type: "SEARCH_CITIES_SUCCESS",
                    payload: [jsonResponse]
                });
            });
    }, []);

    const search = searchValue => {
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

    const {cities, errorMessage, loading} = state;

    return (
        <div className="App">
            {/*<Aside/>*/}
            <div className="root__container">
                <Header/>
                <Search search={search}/>
                <main className="main__container">

                        {loading && !errorMessage ? (
                            <span>loading... </span>
                        ) : errorMessage ? (
                            cities.map((city, index) => (
                                <WeatherCard key={`${index}-${city.name}`} city={city} />
                            ))
                        ) : (
                            cities.map((city, index) => (
                                <WeatherCard key={`${index}-${city.name}`} city={city} />
                            ))
                        )}
                    <AddCard/>
                </main>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
