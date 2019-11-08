import React from "react";
import WeatherConditionIcon from "./WeatherConditionIcon";

/**
 * View of city weather card in main page
 *
 * @param city - object from API
 * @returns {*}
 * @constructor
 */
const WeatherCard = ({city}) => {
    return (
        <section className="weather__card">
            <span className="city-name__text">{city.name}</span>
            <div className="weather-icon__container">
                <WeatherConditionIcon condition={city.weather[0].main} />
            </div>
            <div className="temperature-text__container">
                <span className="temperature__text">{Math.round(Number(city.main.temp))}</span>
                <span className="temperature-metric__text">°</span>
                <span className="weather-condition__text">{city.weather[0].main}</span>
            </div>
            <section className="min-max__container">
                {/*<div className="min__container">*/}
                {/*    <svg className="min-arrow__icon" viewBox="188.5 807 21 21">*/}
                {/*        <path fill="#00ff9b" d="M209.5 817.5h-21L199 828z" data-name="Min Arrow"/>*/}
                {/*    </svg>*/}

                {/*    <span className="min-temperature__text">{city.minTemp}</span>*/}
                {/*    <span className="min__text">Min</span>*/}
                {/*</div>*/}
                {/*<div className="max__container">*/}
                {/*    <svg className="max-arrow__icon" viewBox="449.5 820 21 21">*/}
                {/*        <path fill="red" d="M449.5 830.5h21L460 820z" data-name="Max Arrow"/>*/}
                {/*    </svg>*/}
                {/*    <span className="max-temperature__text">{city.maxTemp}</span>*/}
                {/*    <span className="max__text">Max</span>*/}
                {/*</div>*/}
            </section>
        </section>
    );
};

export default WeatherCard;
