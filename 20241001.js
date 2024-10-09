// 몫 구하기
function solution(num1, num2) {
  var answer = 0;

  if (0 < num1 <= 100 && 0 < num2 <= 100) {
    answer = num1 / num2;
    return Math.floor(answer);
  }
}

console.log(solution(10, 5));

console.log(solution(7, 2));
