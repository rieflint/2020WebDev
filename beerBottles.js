var numberOfBottles = 99

while (numberOfBottles > 0) {
  var bottlesText = " bottles of beer on the wall"
  var takeOneDownText = " bottles of beer. Take one down pass it around "

  if (numberOfBottles === 1) {
    bottlesText = " bottle of beer on the wall"
    takeOneDownText = " bottle of beer. Take one down pass it around "
  }

  console.log(
    numberOfBottles +
      bottlesText +
      ", " +
      numberOfBottles +
      takeOneDownText +
      numberOfBottles +
      bottlesText +
      "."
  )
  numberOfBottles--
}
console.log(
  "No more " +
    bottlesText +
    ", no more " +
    bottlesText +
    ". Go the store and buy some more. 99 " +
    bottlesText +
    "."
)
