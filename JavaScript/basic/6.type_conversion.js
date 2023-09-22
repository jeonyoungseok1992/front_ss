/**
 * 타입변환
 * Type Conversion
 * 
 * 1) 명시적
 * 2) 묵지석
 */

let age = 45;

//명시적
let strAge = age.toString();   //String으로 변환해줌 java랑 다름
console.log(typeof strAge);

//묵시적
let tmp = age + "";
console.log(typeof tmp);

console.log('98' + '2');
console.log('98' +  2);
console.log(+'98' + +'2');

/**
 * 명시적 형변환 예시
 */
console.log((99).toString);
console.log((true).toString);

//숫자타입으로 변환
console.log(parseInt('0'));
console.log(parseInt('1.12'));
console.log(parseFloat('1.12'));

//Boolean
console.log(!!'jys');
console.log(!!'');  //빈값은 false
console.log(!!0);
console.log(!![]);        //객체는 true가 기본값

console.log({name : 'jys'} == {name : 'jys'});  //객체끼리 ==로 하면 false
