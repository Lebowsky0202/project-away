'use strict'

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
}

const lastViewedMovie = prompt('Один из последних просмотренных фильмов?', '')
const assessmentMovie = prompt('На сколько оцените его', '')
const lastViewedMovie2 = prompt('Один из последних просмотренных фильмов?', '')
const assessmentMovie2 = prompt('На сколько оцените его', '')

personalMovieDB.movies[lastViewedMovie] = assessmentMovie
personalMovieDB.movies[lastViewedMovie2] = assessmentMovie2

console.log(personalMovieDB)
