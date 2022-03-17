import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import CardList from '../components/CardList.component';
import SearchBar from '../components/SearchBar.component';

const Homepage = () => {

    const [ data, setData ] = useState({
        data:''
    });  

    const dataFetcher = async (movieName) => {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=ee597d6305b50cbab9620619a5f0cc1c&query=${movieName}&language=en-US&page=1&include_adult=true`;
        await fetch(url,{method: 'GET'}).then((res) => {(res.json().then(data => {setData({data:data})}));});
    }

    const parentCallback = (movieName) => {
        dataFetcher(movieName)
    }

    return(
    <Grid container spacing={2} justifyContent="center">
        <Grid item lg={3} justifyContent="center">
        <SearchBar parentCallback={parentCallback} />
        </Grid>
        <Grid item lg={12}>
        <CardList data={data.data.results} />
        </Grid>
    </Grid>
    );
}

export default Homepage;