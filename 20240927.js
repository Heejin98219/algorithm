// 두 수의 차
function solution(num1, num2) {
  if (num1 >= -50000 && num1 <= 50000) {
    if (num2 >= -50000 && num2 <= 50000) {
      var answer = num1 - num2;
      console.log(answer);
    }
    return answer;
  }
}

solution(2, 3);

solution(100, 2);
