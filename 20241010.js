// 각도기
function solution(angle) {
  if (0 < angle && angle < 90) {
    return 1;
  } else if (angle === 90) {
    return 2;
  } else if (90 < angle && angle < 180) {
    return 3;
  } else {
    return 4;
  }
}

console.log(solution(70));

console.log(solution(91));

console.log(solution(180));