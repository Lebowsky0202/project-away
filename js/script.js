'use strict'

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
}

for (let i = 0; i < 2; i++) {
	const lastViewedMovie = prompt('Один из последних просмотренных фильмов?', '')
	const assessmentMovie = prompt('На сколько оцените его', '')

	personalMovieDB.movies[lastViewedMovie] = assessmentMovie
}

console.log(personalMovieDB)
