// 요소 선택 및 상수 선언
const numbersDiv = document.querySelector('.numbers') // 클래스.
const drawButton = document.querySelector('#draw') // ID#
const resetButton = document.querySelector('#reset')
const lottoNumbers = []
const colors = ['orange', 'skyblue', 'red', 'purple', 'green']

// paintNumber 함수
function paintNumber(number){
  const eachNumDiv = document.createElement('div')
  eachNumDiv.classList.add('eachnum')
  let colorIndex = Math.floor(number / 10)
  eachNumDiv.style.backgroundColor = colors[colorIndex]
  eachNumDiv.textContent = number
  numbersDiv.appendChild(eachNumDiv)
}

// 추첨 버튼 클릭 이벤트 핸들링
drawButton.addEventListener('click', function(){
  while(lottoNumbers.length < 6){
    let ran = Math.floor(Math.random() * 45) + 1
    if(lottoNumbers.indexOf(ran) === -1){
      lottoNumbers.push(ran)
      paintNumber(ran)
    }
  }
})

// 다시 버튼 클릭 이벤트 핸들링
resetButton.addEventListener('click', function(){
  lottoNumbers.splice(0, 6)
  numbersDiv.innerHTML = ""
})

// pop 함수를 사용하여 배열의 마지막 요소를 삭제
// shift 함수를 사용하여 배열의 첫 번째 요소를 삭제
// splice() 함수를 사용하여 배열 요소를 삭제
// filter() 함수를 사용하여 조건에 일치하는 새 배열을 생성

