import React from "react";
import { ReactComponent as AddIcon }from '../img/city-icons/AddIcon.svg';
import { ReactComponent as CityIllustration }from '../img/city-icons/CityIllustration.svg';

const AddCard = (props) => {
    return (
        <div className="add__card">
            <div className="header__container">
                <span className="card__title">Add city</span>
            </div>
            <div className="body__container">
                <AddIcon/>
                <CityIllustration/>
            </div>
        </div>
    );
};

export default AddCard;
