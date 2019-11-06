import styled from "styled-components";
import React from 'react';

const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
`;

const ToggleContainer = ({lightTheme, toggleTheme}) => (
    <>
        <span className="mode-toggle__text">Light</span>
        <label className="toggle-button">
            <HiddenCheckbox className="toggle-button__input" onClick={toggleTheme}/>
            <span className={`toggle-button__bg ${
                lightTheme ? `` : 'toggle-button__bg-checked'
                }`}></span>
            <span className={`toggle-button__circle ${
                lightTheme ? `` : 'toggle-button__circle-checked'
                }`}></span>
        </label>
        <span className="mode-toggle__text">Dark</span>
    </>
);

export default ToggleContainer;
