// 요소 선택
const todayDiv = document.getElementById('id_today');
const timeDiv = document.getElementById('id_time');

// getTime 함수
function getTime() {
  let time = new Date();
  let year = time.getFullYear();
  let month = time.getMonth() + 1;
  let day = time.getDate();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  
  month = month < 10 ? `${0}` : month;
  day = day < 10 ? `${0}` : day;
  hour = hour < 10 ? `${0}` : hour;
  minute = minute < 10 ? `${0}` : minute;
  second = second < 10 ? `${0}` : second;

  todayDiv.textContent = year + '년 ' + month + '월 ' + day + '일';
  timeDiv.textContent = hour + '시 ' + minute + '분 ' + second + '초';
}
// setInterval 메소드
getTime();
setInterval(getTime, 1000);