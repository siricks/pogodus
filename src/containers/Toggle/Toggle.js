import React from 'react';
import {func, string} from 'prop-types';
import ToggleContainer from './Toggle.styled';

/**
 * Theme switcher
 *
 * @param theme
 * @param toggleTheme
 * @returns {*}
 * @constructor
 */
const Toggle = ({theme, toggleTheme}) => {
    const isLight = theme === 'light';

    return (
        <ToggleContainer lightTheme={isLight} toggleTheme={toggleTheme}/>
    )
}

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;
