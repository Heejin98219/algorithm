// 나이 출력
function solution(age) {
  console.log(new Date().getFullYear());
  return new Date().getFullYear() - age - 1;
}
console.log(solution(40));
console.log(solution(23));
