function cake(x, y) {

    return x * 0.7 > [...y].reduce((x, y, index) => x + (index % 2 === 0 ? y.charCodeAt() : y.charCodeAt() - 96), 0)
        ? 'That was close!' : 'Fire!'

}
console.log(cake(767, 'btoxhqanb'));