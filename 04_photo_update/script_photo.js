// 요소 선택
const beginning = document.getElementById("beginning")
const callBtn = document.getElementById("call-btn")
const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")
const photoDiv = document.getElementById("photo")

// 사용 데이터 선언
const photos = []
const numOfPhoto = 8 // 50까지만 가능!
let photoIndex = 0
const request = new XMLHttpRequest();
const api = `https://dog.ceo/api/breeds/image/random/${numOfPhoto}`
let isPushed = false

// 응답이 로드되었을 때의 이벤트 핸들링
request.addEventListener("load", function(){
  const responseJson = JSON.parse(request.responseText);
  responseJson.message.map((item) => photos.push(item));
  console.log(photos);
  photoDiv.style.backgroundImage = `url(${photos[photoIndex]})`;
})

    // callPhotos 함수 - 요청 초기화 
function callPhotos() {
  request.open("GET", api);
  request.send();
}

// CALL 버튼 클릭 이벤트 핸들링
callBtn.addEventListener("click", () => {
  if (isPushed) {
    return;
  }
  isPushed = true;
  setTimeout(() => {
    beginning.remove(beginning);
  }, 500);
  callPhotos();
})
// prev와 next 버튼 클릭 이벤트 핸들링 
nextBtn.addEventListener("click", () => {
  console.log("current photoIndex: ", photoIndex);
  if (photoIndex !== numOfPhoto) {
    photoIndex++;
  } else {
    console.log("last photo: ", photoIndex);
  }
  photoDiv.style.backgroundImage = `url(${photos[photoIndex]})`;
});

prevBtn.addEventListener("click", () => {
  if (photoIndex !== 0) {
    photoIndex--;
  } else {
    console.log("no photo: ", photoIndex);
  }
  photoDiv.style.backgroundImage = `url(${photos[photoIndex]})`;
});