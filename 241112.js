// 정수 내림차순으로 배치하기

function solution(n) {
  // 1. 숫자를 문자열로 변환
  // String() 메서드
  let answer = String(n)
    // 2. 문자열을 한 글자씩 나눠 배열로 만듦
    // split() 메서드
    .split("")
    // 3. 내림차순 정렬
    .sort((a, b) => b - a)
    // 4. 배열을 문자열로 변환
    .join("");

  // 5. (숫자로) 형변환
  // Number() 메서드
  return Number(answer);
}

console.log(solution(118372));
// 873211
