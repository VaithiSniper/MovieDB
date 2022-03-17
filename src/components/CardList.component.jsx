import React, { useState } from 'react';
import Card from './Card.component';

const CardList = ({ data }) => {

    if(data)
    return(
        <div>
        {   
            data.map(((movie) => (<Card movieName={movie.title} movieRelease={movie.release_date} moviePoster={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} movieRating={movie.vote_average} movieSummary={movie.overview} key={movie.id} />)))
        }
        </div>
    );
    else
    return(null);
}

export default CardList;