/**
 *  Operators
 * 
 *  연산자
 */

/**
 * 산술 연산자
 * 
 * 1) 덧셈 
 * 2) 뺄셈
 * 3) 곱셈 
 * 4) 나눗셈
 * 5) 나머지 구하기
 */

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);

/**
 *  증감연산자
 *  num++ : 해당 명령줄을 실행 한 후에 값을 1 올려라
 *  ++num : 먼저 값을 올리고 해당 명령줄을 실행해라
 */

let num = 1;

num++;
console.log(num);
num--;
console.log(num);

num = 0;
console.log(++num);
console.log(num++);
console.log(num);

/**
 * 숫자타입이 아닌 타입에 +, -를 사용하면 어떤방식으로 처리될까?
 */

let tmp = '99';
console.log(+tmp);
console.log(typeof +tmp);

console.log(tmp);
console.log(typeof tmp);       // java에서도 +가 연산자니까 +붙혀주면 강제형변환

tmp = true;
console.log(+tmp);
console.log(typeof +tmp);

tmp = false;
console.log(+tmp);
console.log(typeof +tmp);

tmp = 'youngseok';
console.log(+tmp);   //NaN -> Not a Number
console.log(typeof +tmp);

/**
 *  대입연산자
 */

num = 100;

num += 100;
console.log(num);
num -= 100;
num *= 100;
num /= 100;
num %= 100;

/**
 *  비교연산자
 * 
 *  ==   :  자료형을 제외하고 값만 비교(자동형변환 후 비교)
 *  ===  :  자료형을 포함한 값을 비교(형변환 없이 비교)
 */

console.log(5 ==5);
console.log(5 =='5');
console.log(0 =='');
console.log(0 ==false);
console.log(1 ==false);
console.log('' ==false);


console.log(5 === 5);
console.log(5 === '5');
console.log(0 === '');
console.log(0 === false);
console.log(1 === false);
console.log('' === false);

console.log(5 != 5);
console.log(5 != '5');
console.log(0 != '');

console.log(5 !== 5);
console.log(5 !== '5');
console.log(0 !== '');

/**
 *  비교연산자
 */

console.log(10 > 1);
console.log(10 >= 1);
console.log(10 < 1);
console.log(10 <= 1);

/**
 *  삼항 연산자
 */

console.log(10 > 0 ? '10이 0보다 크다' : '0이 10보다 크다');

/**
 *  단축평가
 * 
 *  && => 좌측이 true면 우측 값 반환
 *               false면 좌측 값 반환
 *  || => 좌측이 true면 좌측 값 반환
 *               false면 우측 값 반환
 */

console.log(true && 'jys')
console.log(false && 'jys')
console.log(true || 'jys')
console.log(false || 'jys')

num = 60;
console.log((num > 80) && "통과");

num = null;
console.log(num || "값이 없습니다")


let name;
console.log(name);

name = name ?? 'jys';
name ??= 'jys';
console.log(name);

