// 생성자 함수에서의 this의 의미
function person() {
    this.someValue = 2;
    this. someValue2 = 3;
}

console.log(person()); //실행결과는? 그 이유는? return이 없기 때문이다

console.log(new person()); // 생성자 함수로 생성시 실행결과는?
                           // 내부적으로 자기자신을 가르키는 this 가 생성
                          //명시적으로 return이 없으면 this가 리턴

console.log(someValue); // 실행결과와, 이유를 말하시오
