// 숫자 비교하기

function solution(num1, num2) {
  var answer = 0;
  if (0 <= num1 <= 10000 && 0 <= num2 <= 10000) {
    if (num1 === num2) {
      return (answer = 1);
    } else {
      return (answer = -1);
    }
  }
}

console.log(solution(2, 3));

console.log(solution(11, 11));

console.log(solution(7, 99));
