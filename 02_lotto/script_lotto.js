// 요소 선택 및 상수 선언
const numbersDiv = document.querySelector('.numbers');
const drawButton = document.querySelector('#draw');
const resetButton = document.querySelector('#reset');
const colors = ['orange', 'skyblue', 'red', 'purple', 'green'];
const lottoNumbers = [];

// paintNumber 함수
function paintNumber() {
  numbersDiv.innerHTML = lottoNumbers.join(' ');
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
      paintNumber();
    }
  }
})

// 다시 버튼 클릭 이벤트 핸들링
resetButton.addEventListener('click', function(){
  console.log('resetButton'); 
  numbersDiv.innerHTML = "";
})

