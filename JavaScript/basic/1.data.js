console.log('Hello World');
console.log('hello','월드');

//주석을 작성하는 첫번째 방법
console.log("안녕"); //안녕 출력
/**
 * 여러줄 주석
 */

/**
 * Variable 선언
 * 
 * 1) var  --이제 사용하지 않는다
 * 2) let
 * 3) const
 */

var name = '전영석';
console.log(name);

var age = 32;
console.log(age);

var pi = 3.14;
console.log(pi);

var name = '요네';
console.log(name);

/**
 * 중복되는 문제 때문에 let을 만듬
 * 다만 let과 var는 모두 값을 변경하는 것은 가능하다
 */

// let name = '전영석';
// console.log(name);
// let name = '요네';
// console.log(name);

let name2 = '전영석';
console.log(name2);
name2 = "요네";
console.log(name);

/**
 * const는 상수를 표현하기 위한 자료형
 * 값을 변경할 수 없다.
 */

const name3 = "전영석";
console.log(name3);

/**
 * Naming
 * 
 * 변수 이름을 지을 때
 * 1) 일반적으로 영어를 사용하며 문자와 숫자 모두 사용이 가능하다
 * 2) 특수문자는 언더스코어(_)와 달러($)를 사용 할 수 있다
 * 3) 숫자로 이름을 시작 할 수 없다
 * 4) 키워드를 변수명으로 사용 할 수 없다. (var, let, const 등등)
 */
let $name = '전영석';
let _name = '전영석';

/**
 * Naming Type
 * 
 * 1) camelCase => 대부분의 언어에서 많이 사용
 */

/**
 * Data Types
 * 
 * 여섯개의 원시타입과 한개의 오브젝트 타입이 있다.
 * 
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 * 7) Object (객체)
 *    -Function
 *    -Array
 *    -Object
 */

// Number 타입

const age = 55;
const temp = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof temp);
console.log(typeof pi);

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);

// String 타입
const name = '전영석은 "천재"'+'다';
console.log(name);
console.log(typeof name);

/**
 * 1) 개행 => \n
 * 2) tah => \t
 * 3) \ => \\
 */
let str = '\\\n \\ \t \\';
console.log(str);
const name = '전영석';
console.log(`안녕하세요${name}`);

// Boolean 타입

const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);

/**
 * undefined
 * 
 * 사용자가 직접 값을 초기화하지 않을 때 지정되는 값이다
 * 
 * undefined를 직접 넣어주는 것은 지양해야한다
 */

let num;
console.log(num);
console.log(typeof num);

/**
 * null 타입
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이다
 * 다만 js에서는 개발자가 명시적으로 없는 값을 초기화 할 때 null을 사용한다.
 */

let init = null;
console.log(init);
console.log(typeof init);

/**
 * Symbol 타입
 * 
 * 유일무이한 값을 생성 할  때
 * 다른 원시값들과 다르게 symbol함수를 호출해서 사용한다
 */

const temp1 = '1';
const temp2 = '1';
console.log(temp1 == temp2);

const temp3 = '1';
const temp4 = 1;         //자동 형변환
console.log(temp3 == temp4);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2);

/**
 * Object 타입
 * 
 * Map
 * 키: 밸류 쌍으로 이루어져있다
 * key : value
 */
const dictionary = {
    red : "빨강",
    orange : "주황",
    yellow : '노랑'
}
console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yellow']);
console.log(dictionary.red);

/**
 *  Array 타입
 * 
 *  값을 리스트로 나열 할 수 있는 타입
 */

const arr = ['빨강', "주황", "노랑", '초록'];
console.log(arr);
console.log(arr[1]);
arr.push('검정');
console.log(arr);
console.log(arr.length);
arr[0] = 12;
console.log(arr);