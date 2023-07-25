const Today = "20210101";
Today.replace(/(\d{4})(\d{2})(\d{2})/g, "$1-$2-$3");
console.log("Today: ", Today);

const Today2 = "20210101";
Today2.substr(0, 4) + "年" + Today2.substr(4, 2) + "月";
console.log("Today2: ", Today2);
