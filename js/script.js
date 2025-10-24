'use strict'

let numberOfFilms

function start() {
	numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '')

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '')
	}
}

start()

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false,
}

for (let i = 0; i < 2; i++) {
	const a = prompt('Один из последних просмотренных фильмов?', '')
	const b = prompt('На сколько оцените его', '')

	if (a != '' && b != '' && a != null && b != null && a.length < 50) {
		personalMovieDB.movies[a] = b
		console.log('done')
	} else {
		console.log('error')
		i--
	}
}

if (personalMovieDB.count < 10) console.log('Просмотренно мало фильмов')
else if (personalMovieDB.count > 10 && personalMovieDB.count < 30)
	console.log('Вы классический зритель')
else if (personalMovieDB.count > 30) console.log('Вы киноман')
else console.log('Error')

console.log(personalMovieDB)
