// 수박수박수박수박수박수?
function solution(n) {
  var answer = "";
  var vLength = Math.floor(n);

  if (vLength === 4) {
    var answer = "수박수박";
  } else if (vLength === 3) {
    var answer = "수박수";
  }

  return answer;
}

console.log(solution("3"));

console.log(solution("4"));
