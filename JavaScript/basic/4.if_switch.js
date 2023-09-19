/**
 *  if
 */

let num = 5;

if (num & 2 === 0){
    console.log("짝수")
} else {
    console.log('홀수')
}

if (num) {
    console.log('num값이 존재한다');
}

let num1 = null;
if (num1) {
    console.log('num값이 존재한다');
} else
    console.log('존재하지않는다');


const day = 'saturdeay';
switch(day){
    case 'monday':
        console.log('월요일');
        break;
    case 'tuesday':
        console.log('화요일');
        break;     
    case 'wendseday':
        console.log('수요일');
        break;  
    default:
        console.log('그외');
        break; 
}