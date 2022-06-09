// import React from "react";
const key = '599c031ef3f00ec6d1e48bc5b68e5d63'


const  requests = {
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key} `,
    // https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1


    // requestHorror:`
    // https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=${key}&language=en-US&page=1
    // `,
    // https://api.themoviedb.org/3/search/company?api_key=${key}&page=1
    
// 

    requestUpcoming:`
    https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`
};


// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

export default requests;


