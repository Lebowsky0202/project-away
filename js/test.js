// Место для первой задачи
function firstTask() {
	// Пишем решение вот тут
	let number = 5
	while (number < 11) {
		console.log(number++)
	}
}

// fifthTask()

// Место для второй задачи
function secondTask() {
	// Пишем решение вот тут
	for (let i = 20; i => 10; i--) {
		if (i === 13) break
		console.log(i)
	}
}

// secondTask()

// Место для третьей задачи
function thirdTask() {
	// Пишем решение вот тут
	for (let i = 0; i < 11; i++) {
		if (i % 2) {
			continue
		}
		console.log(i)
	}
}

// thirdTask()

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
	// Пишем решение вот тут
	let i = 2
	while (i <= 16) {
		if (i % 2 === 0) {
			i++
			continue
		}
		console.log(i)
		i++
	}
}
fourthTask()

// Место для пятой задачи

function fifthTask() {
	const arrayOfNumbers = []

	// Пишем решение вот тут
	// for (let i = 0; i <= 5; i++) {
	// 	for (let j = 5; j <= 10; j++) {
	// 		arrayOfNumbers[] = j
	// 	}
	// }
	let i = 0
	let j = 5
	while (i <= 5) {
		arrayOfNumbers[i] = j
		i++
		j++
	}

	console.log(arrayOfNumbers)
	// Не трогаем
	return arrayOfNumbers
}
