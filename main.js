let target = document.querySelector('#dynamic'); // dynamic id선택자를 선택(target)해라.

function randomString() {
  let stringArr = [
    'Learn to HTML',
    'Learn to JavaScript',
    'Learn to CSS',
    'Learn to Python',
    'Learn to Ruby',
  ];
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  let selectStringArr = selectString.split('');

  return selectStringArr;
}

//타이핑 리셋
function resetTyping() {
  target.textContent = '';
  dynamic(randomString());
}

// 한글자씩 텍스트 출력 함수.
function dynamic(randomArr) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function () {
      dynamic(randomArr);
    }, 80);
  } else {
    setTimeout(resetTyping, 3000);
  }
}

dynamic(randomString());

// 토글 깜박임 효과
function blink() {
  target.classList.toggle('active');
} // classList객체의 toggle메서드는 class에 무언가를 토글키처럼 온오프하는 기능.
setInterval(blink, 500); // blink함수를 0.5초마다 실행. 즉 토글키가 0.5초마다 온오프.
