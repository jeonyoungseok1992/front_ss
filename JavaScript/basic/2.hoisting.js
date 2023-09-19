/**
 *  Hoisting
 */

console.log(name);
var name = 'youngseok';
console.log(name);

/**
 *  Hoisting은 모든 변수 선언문이 
 *  코드의 최상단에 위치한 것처럼 느껴지는 현상
 *  var와는 다르게 let과 const는 tdz를 이용하여
 * 마치 호이스팅이 일어나지 않는 것처럼 동작하게 해준다.
 */
console.log(name);
let name = 'youngseok';
console.log(name);

//let은 tdz를 생성해서 hoisting되지 않게 막아준다