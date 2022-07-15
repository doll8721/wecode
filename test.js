function evenNumber() {
  let answer = [];
  for (i = 1; i <= 50; i++) {
    i % 2 === 0 ? answer.push(i) : null;
  }
  return answer;
}
