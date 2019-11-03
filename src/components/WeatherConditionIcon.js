import React from "react";

import { ReactComponent as Clouds }from '../img/weather-icons/Clouds.svg';
import { ReactComponent as Fog } from '../img/weather-icons/Fog.svg';
import { ReactComponent as Storm } from '../img/weather-icons/Storm.svg';
import { ReactComponent as Sunny } from '../img/weather-icons/Sunny.svg';
import { ReactComponent as Rain } from '../img/weather-icons/Rain.svg';
import { ReactComponent as Haze } from '../img/weather-icons/Haze.svg';

const WeatherConditionIcon = ({condition}) => {

    function renderCondition(weatherType) {
        switch (weatherType) {
            case 'Clouds':
                return <Clouds/>;

            case 'Rain':
            case 'Drizzle':
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


            default:
                return 'foo1';
        }
    }

    return (
        renderCondition(condition)
    );
};

export default WeatherConditionIcon;
