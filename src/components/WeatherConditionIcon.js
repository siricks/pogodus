import React from "react";

import { Fog } from '../img/weather-icons/Fog.svg';
import { Clouds } from '../img/weather-icons/Clouds.svg';
import { Rain } from '../img/weather-icons/Rain.svg';
import { Storm } from '../img/weather-icons/Storm.svg';
import { Sunny } from '../img/weather-icons/Sunny.svg';

const WeatherConditionIcon = ({condition}) => {

    function renderCondition(weatherType) {
        console.log(1, weatherType);
        switch (weatherType) {
            case 'Clouds':
                return Clouds;

            case "Rain":
                return Rain;

            case 'Drizzle':
                return Rain;

            case 'Storm':
                return Storm;

            case 'Sunny':
            case 'Clear':
                return Sunny;

            case 'Fog':
                return Fog;


            default:
                return 'foo1';
        }
    }

    let icon = renderCondition(condition);

    console.log(2, icon);

    return (
        condition
    );
};

export default WeatherConditionIcon;
