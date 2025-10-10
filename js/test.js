// function thirdTask() {
// 	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// 	const data = [5, 10, 'Shopping', 20, 'Homework']
// 	const result = []

// 	// Пишем решение вот тут
// 	let i = data.length - 1
// 	let j = 0

// 	while (0 <= i) {
// 		result[j] = data[i]
// 		i--
// 		j++
// 	}
// 	console.log(result)
// 	// Не трогаем
// 	return result
// }

// thirdTask()

const lines = 5
let result = ''
// Проверяется именно переменная result, формируйте строку в ней

for (let i = 0; i < lines; i++) {
	// result += '*\n'
	for (let j = 0; j < i; j++) {}
}

console.log(result)
