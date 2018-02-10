/*let circleArea = function(pi, r) {
    let area = pi * r * r;
    return area;
}; */ //함수표현식 : hoisting이 일어나지 않는다 (함수선언문보다 표현식을 더 사용)

/*let circleArea = (pi, r) => {
  let area = pi * r * r;
  return area;
};*/ // 함수구문이 한줄이면 {} 생략가능, 표현식일 경우 return생략가능

let circleArea = (pi, r) =>  pi * r * r;  //파라메터가 한개일 경우 괄호 생략 가능, 단 파라메터가 하나도 없을 경우 () 생략 불가능

// 위의 문장을 한줄로 작성하시오.

let result = circleArea(3.14, 3);

console.log(result); //실행 결과 "28.26"
