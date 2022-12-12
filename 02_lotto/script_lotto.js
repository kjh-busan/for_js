// 요소 선택 및 상수 선언
const numbersDiv = document.querySelector('.numbers');
const drawButton = document.querySelector('#draw');
const resetButton = document.querySelector('#reset');
const colors = ['orange', 'skyblue', 'red', 'purple', 'green'];
const lottoNumbers = [];
let count = 0;

// paintNumber 함수
function paintNumber(lottoNumbers) {
  let display = () => {
  console.log(count);
  if (count > 5) {
    let clear = clearInterval(timeId);
  }  
  numbersDiv.innerHTML += lottoNumbers[count] + ' ';
  count += 1;
  }
  let timeId = setInterval(display, 800);
  // let stop = ;
}

// 추첨 버튼 클릭 이벤트 핸들링
drawButton.addEventListener('click', function(){
  while (lottoNumbers.length < 6) {
    let number = Math.floor(Math.random() * 45 + 1);
    if (lottoNumbers.includes(number)) {
      // console.log('sameNum = ', number);
    } else {
      lottoNumbers.push(number);
      // console.log(lottoNumbers);
    }
  }
  paintNumber(lottoNumbers);
})

// 다시 버튼 클릭 이벤트 핸들링
resetButton.addEventListener('click', function(){
  lottoNumbers.splice(0);
  numbersDiv.innerHTML = "";
})

