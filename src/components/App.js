import React, {useReducer, useEffect} from "react";
import { connect } from 'react-redux';

import '../styles/main.scss';

import Aside from "../containers/Aside";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import AddCard from "../containers/AddCard";
import WeatherCard from "../containers/WeatherCard";
import Search from "../containers/Search";

import {useDarkMode} from './useDarkMode';

import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from '../styles-theme/global';
import {lightTheme, darkTheme} from '../styles-theme/theme';

import { weather } from '../store/reducers';
import { initialState } from '../store/weather/reducer';

import { defaultCityWeather, searchCityWeather } from '../modules/openweathermap';

function App() {
    const [state, dispatch] = useReducer(weather, initialState);

    useEffect(() => {
        defaultCityWeather(dispatch);
    }, []);

    const [theme, toggleTheme, componentMounted] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    if (!componentMounted) {
        return <div/>
    }
    ;

    const search = searchValue => {
        searchCityWeather(searchValue, dispatch);
    };

    const {cities, errorMessage, loading} = state;

    return (
        <ThemeProvider theme={themeMode}>
            <div className="App">
                {/*<Aside/>*/}
                <GlobalStyles/>
                <div className="root__container">
                    <Header theme={theme} toggleTheme={toggleTheme}/>
                    <Search search={search}/>
                    <main className="main__container">

                        {loading && !errorMessage ? (
                            <span>loading... </span>
                        ) : errorMessage ? (
                            cities.map((city, index) => (
                                <WeatherCard key={`${index}-${city.name}`} city={city}/>
                            ))
                        ) : (
                            cities.map((city, index) => (
                                <WeatherCard key={`${index}-${city.name}`} city={city}/>
                            ))
                        )}
                        <AddCard/>
                    </main>
                    <Footer/>
                </div>
            </div>
        </ThemeProvider>
    );
}

function mapStateToProps(state) {}

export default connect(mapStateToProps)(App);
