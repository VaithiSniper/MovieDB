import React, { useState } from 'react';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

const SearchBar = ({parentCallback}) => {

    const [ state, setMovieName ] = useState({
        movieName: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const { movieName } = state;
        parentCallback(movieName);
    };

    const handleChange = (e) => {
        const { value, name } = e.target;
        setMovieName((prevState) => ({ ...prevState, [name]: value }));
    };

    return(
        <form onSubmit={handleSubmit}>
            <TextField 
            label="Search movies"
            name="movieName"
            value={state.movieName}
            type="search"
            variant="standard"
            onChange={handleChange}
            />
            <Button variant="contained" onClick={handleSubmit}>Search</Button>
        </form>
        );
}

export default SearchBar;