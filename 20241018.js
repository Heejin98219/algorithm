// 자릿수 더하기
function solution(n) {
  var answer = n.toString().split("");
  //["1","2","3"] 출력
  answer = Number(answer[0]) + Number(answer[1]) + Number(answer[2]);

  return answer;
}
