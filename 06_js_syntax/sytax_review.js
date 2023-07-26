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
