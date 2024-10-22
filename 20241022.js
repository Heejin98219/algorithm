// 나머지가 1이 되는 수 찾기
function solution(n) {
  let answer = 0;
  // 가장 작은 자연수니까 1
  // 그래서 for문을 돌리는 것임
  for (let i = 0; i < n; i++) {
    console.log(i);
    if (answer > 0) {
      // 가장 작은 자연수니까 2
      // 그래서 break를 쓰는 것임
      break;
    }

    // n을 x로 나눈 나머지가
    // 1이 된다면
    if (n % i == 1) {
      answer = i;
    }
  }

  return answer;
}
