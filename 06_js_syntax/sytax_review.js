const Today = "20210101";
Today.replace(/(\d{4})(\d{2})(\d{2})/g, "$1-$2-$3");
console.log("Today: ", Today);

const Today2 = "20210101";
Today2.substr(0, 4) + "年" + Today2.substr(4, 2) + "月";
console.log("Today2: ", Today2);
console.log("maskingEmail() start");
// function maskingEmail(email) {
//   console.log("maskingEmail() start");
//   const mask = "*".repeat(email.split("@")[0].length - 1);
//   console.log("mask: ", mask);
//   return email[0] + mask + email.slice(mask.length + 1, email.length);
// }
// console.log("maskingEmail() end");
// // maskingEmail("asd123456@naver.com");
// // mask - a********@naver.com

// // console.log("maskingEmail(): ", maskingEmail("asd123456@naver.com"));
// console.log("maskingEmail() executed");


/*
* 마지막 글자를 * 처리한다. (ex. 홍길동 → 홍길*)
*/
function maskingName(strName) {
  if(strName === undefined || strName === '') {
      return '';
  }
  var pattern = /.$/; // 정규식
  return strName.replace(pattern, "*");
}
/*
* 뒤에서 부터 3글자를 * 처리한다. (ex. 12가3456 → 12가3***)
*/
function maskingCar(strCar) {
  if (strCar == undefined || strCar === '') {
      return '';
  }
  var pattern = /.{3}$/; // 정규식
  return strCar.replace(pattern, "***");
}

// 마스킹 이메일 처리 //
function masking(email) {

 var len = email.split('@')[0].length ;  // ******@gmail.com
// var len = email.split('@')[0].length-3; // AB***@gamil.com
 return email.replace(new RegExp('.(?=.{0,' + len + '}@)', 'g'), '*'); 
