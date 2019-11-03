import React from "react";

import { Fog } from '../img/weather-icons/Fog.svg';
import { Clouds } from '../img/weather-icons/Clouds.svg';
import { Storm } from '../img/weather-icons/Storm.svg';
import { Sunny } from '../img/weather-icons/Sunny.svg';

const WeatherConditionIcon = ({condition}) => {

    function renderCondition(weatherType) {
        switch (weatherType) {
            case 'Clouds':
                return Clouds;

            case 'Rain':
            case 'Drizzle':
                return  <svg viewBox="3170 -843.1 163.5 242.7">
                <g data-name="Rain Icon">
                    <g data-name="Water Drops">
                        <path fill="#0032cc" d="M3295.4-824.5s85.8 133.5 0 133.5 0-133.5 0-133.5z" data-name="Path 7"/>
                        <path fill="#003eff" d="M3239.4-843s-156.1 242.6 0 242.6 0-242.7 0-242.7z" data-name="Path 3"/>
                    </g>
                </g>
            </svg>;

            case 'Storm':
                return Storm;

            case 'Sunny':
            case 'Clear':
                return Sunny;

            case 'Fog':
                return  Fog;


            default:
                return 'foo1';
        }
    }

    return (
        renderCondition(condition)
    );
};

export default WeatherConditionIcon;
