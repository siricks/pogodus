import React from "react";

import { ReactComponent as Clouds }from '../img/weather-icons/Clouds.svg';
import { ReactComponent as Fog } from '../img/weather-icons/Fog.svg';
import { ReactComponent as Storm } from '../img/weather-icons/Storm.svg';
import { ReactComponent as Sunny } from '../img/weather-icons/Sunny.svg';
import { ReactComponent as Rain } from '../img/weather-icons/Rain.svg';
import { ReactComponent as Haze } from '../img/weather-icons/Haze.svg';
import { ReactComponent as Snow } from '../img/weather-icons/Snow.svg';

const WeatherConditionIcon = ({condition}) => {

    /**
     * Return returns icon depending on weather type
     *
     * @param weatherType
     * @returns {string|*}
     */
    function renderCondition(weatherType) {
        switch (weatherType) {
            case 'Clouds':
                return <Clouds/>;

            case 'Rain':
            case 'Drizzle':
            case 'Mist':
                return  <Rain/>;

            case 'Storm':
                return <Storm/>;

            case 'Sunny':
            case 'Clear':
                return <Sunny/>;

            case 'Haze':
                return <Haze/>;

            case 'Fog':
                return  <Fog/>;

            case 'Snow':
                return  <Snow/>;


            default:
                return 'foo1';
        }
    }

    return (
        renderCondition(condition)
    );
};

export default WeatherConditionIcon;
