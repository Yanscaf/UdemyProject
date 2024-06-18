'use strict';

const namberOfFilms = +prompt("Сколкьо фильмлв Вы уже посмотрели?", '')

const personalMovieDB = {
    count: namberOfFilms,
    movies: {},
    actors: {},
    generals: [],
    privat: false
};


 for (let i= 0; i < 2; i++ ){
     const a = prompt("Один из последних просмотренных фильмов?", '');
     const b = +prompt("На сколько Вы его оценили?" ,'');

     if (a!= null && b != null && a!= '' && b!= '' && a.length<50){
         personalMovieDB.movies[a] = b;
         console.log('Done');
     } else {
         console.log("Error");
         i--;
     }
if (personalMovieDB.count < 10 ){
    console.log("Просмотренно довольно мало фильмов")
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
    console.log("Вы класический зритель")
} else if (personalMovieDB.count >=30 ){
    console.log("Вы киноман")
} else {
    console.log("Произошла ошибка")
}

 }

 console.log(personalMovieDB);