'use strict';

const namberOfFilms = +prompt("Сколкьо фильмлв Вы уже посмотрели?", '')

const personalMovieDB = {
    count: namberOfFilms,
    movies: {},
    actors: {},
    generals: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов?", '');
const b = +prompt("На сколько Вы его оценили?" ,'');
const c = prompt("Один из последних просмотренных фильмов?", '');
const d = +prompt("На сколько Вы его оценили?" ,'');

 personalMovieDB.movies[a] = b;
 personalMovieDB.movies[c] = d;

 console.log(personalMovieDB);