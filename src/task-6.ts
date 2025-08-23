function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const firstNumber = getFirstElement<number>([1, 2, 3]); // number
const firstString = getFirstElement<string>(['a', 'b', 'c']); // string
const firstBoolean = getFirstElement<boolean>([true, false, true]); // boolean

console.log(firstNumber); // 1
console.log(firstString); // "a"
console.log(firstBoolean); // true
