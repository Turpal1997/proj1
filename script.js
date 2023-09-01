/*
let weight = prompt('Enter your weight in kilos');
let Height = prompt('Enter your height in meters');
let BMI = weight / Math.pow(Height,2);
console.log(BMI);
let t = 25 - BMI;
if (BMI >= 25) {
    alert('You are overweight more than by ' + t)
} else {
    alert('You are normal')
}
*/
/*
0, undefined, null, NaN, ''*/ // falsy values
const numberFilms = prompt('How many films have you already watched?');
const personalMovieDB = {
    count: numberFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}
let lastMovie = prompt('one of the last movies you watched?');
let rate = prompt('how much would you rate this movie?');
personalMovieDB.movies[lastMovie] = rate;
console.log(personalMovieDB);