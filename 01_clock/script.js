// 요소 선택
const todayDiv = document.getElementById('id_today');
const timeDiv = document.getElementById('id_time');

// getTime 함수
function getTime(){
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  month = month < 10 ? `0${month}` : month;
  date = date < 10 ? `0${date}` : date;
  hour = hour < 10 ? `0${hour}` : hour;
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;

  todayDiv.textContent = `${year}년 ${month}월 ${date}일`
  timeDiv.textContent = `${hour}:${minute}:${second}`
}
// setInterval 메소드
getTime()
setInterval(getTime, 1000);

// 1. <div> element 만들기
const newDiv = document.createElement('div');

// 2. <div>에 들어갈 text node 만들기
const newText = document.createTextNode('안녕하세요');

// 3. <div>에 text node 붙이기
newDiv.appendChild(newText);

// 4. <body>에 1에서 만든 <div> element 붙이기
document.body.appendChild(newDiv);