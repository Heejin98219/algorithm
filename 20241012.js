// 배열의 평균값
function solution(numbers) {
  var answer = 0;
  for (let i of numbers) {
    answer += i;
  }
  return answer / numbers.length;
}
