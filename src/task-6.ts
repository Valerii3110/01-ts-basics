function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement([1, 2, 3]); // 1
getFirstElement(['a', 'b', 'c']); // "a"
getFirstElement([true, false, true]); // true

const firstNumber = getFirstElement<number>([1, 2, 3]); // number
const firstString = getFirstElement<string>(['a', 'b', 'c']); // string
const firstBoolean = getFirstElement<boolean>([true, false, true]); // boolean

console.log(firstNumber); // 1
console.log(firstString); // "a"
console.log(firstBoolean); // true
