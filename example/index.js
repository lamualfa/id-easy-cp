module.exports = function main(input) {
  return input
    .split('\n')
    .map((number) => parseInt(number))
    .reduce((prev, next) => prev + next)
}
