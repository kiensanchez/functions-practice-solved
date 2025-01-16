function getValueWithConditionOne(x, y) {
  if (x === 40 && y === 40) {
    return 80;
  } else return (x + y) * 2;
}

console.log(getValueWithConditionOne(40, 50));
