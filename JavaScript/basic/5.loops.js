/**
 *  Loops
 * 
 *  1) for
 *  2) while
 */

// 1~10까지 출력
let num = 1;
while(10 >= num){
    console.log(num);
    num++
}

let num1 = 5;
while(15 >= num){
    num += num;
    console.log(num); 
    num++
}
let i = 1
let num2 = 1;
while(9 >= num2){
    for(i; i <=9 ; i++){
    console.log(num2 + "*" + i+ "="+ num2 * i)
  
}
    num2++;
}

/**
 *  for .. in
 */
const human = {
    name : 'jys',
    age : 32,
    gender : '남자'
}

for (let key in human){     //객체
    console.log(key);
}

for (let key in human){
    console.log(human[key]);
}
for (let key in human){
    console.log(key + ":" +human[key]);
}

/**
 *  for .. of
 */
human = ['jys','32','남자']   //배열
for (let value of human){  //java (Human hm : human)
    console.log(value);
}

/**
 *  while
 */

let number = 0;

while(number < 11){
    console.log(number);
    number++;
}

/**
 *  do .. while
 */
number = 0;
do{
     console.log(number);
     number ++;
}while(number < 11);

/**
 *  break
 *  continue
 */

number = 0;
while(number < 11){
    if(number % 2 === 0){
        console.log(number);       
    }
    number++;
}




