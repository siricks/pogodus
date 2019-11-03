import React, {useState} from "react";
import {ReactComponent as SearchIcon} from '../img/header-icons/search.svg';

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    return (
        <div className="top-search">
            <form className="search">
                <input
                    value={searchValue}
                    onChange={handleSearchInputChanges}
                    type="text"
                    className="search__input"
                />
                <button onClick={callSearchFunction} type="submit" className="search__btn">
                    <SearchIcon/>
                </button>
            </form>
        </div>
    );
}

export default Search;
