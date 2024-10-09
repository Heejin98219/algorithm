// 두 수의 합
function solution(num1, num2) {
  if (-50000 <= num1 <= 50000 && -50000 <= num2 <= 50000) {
    answer = num1 + num2;
  }

  return answer;
}

console.log(solution(2, 3));

console.log(solution(100, 2));
