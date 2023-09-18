/**
 *  Hoisting
 */

console.log(name);
var name = 'youngseok';
console.log(name);

/**
 *  Hoisting은 모든 변수 선언문이 
 *  코드의 최상단에 위치한 것처럼 느껴지는 현상
 */
console.log(name);
let name = 'youngseok';
console.log(name);

//let은 tdz를 생성해서 hoisting되지 않게 막아준다