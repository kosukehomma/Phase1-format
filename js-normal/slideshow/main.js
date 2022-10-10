// 写真が複数枚ある（春・夏・秋・冬の画像1枚ずつ）
// 表示されているのは1枚だけ
// ボタンを押下すると、表示されている画像の数値をとる
// 写真が最後の一枚のときにボタンが押されると最初の一枚に戻る
// ボタンがありそれを押下すると写真が切り替わる

const spring = {
  img: "./img/slide1.png",
  text: "春へ",
};

const summer = {
  img: "./img/slide2.png",
  text: "夏へ",
};

const autumn = {
  img: "./img/slide3.png",
  text: "秋へ"
};

const winter = {
  img: "./img/slide4.png",
  text: "冬へ"
};

const data = [
  { img: "./img/slide1.png", text: "春へ" },
  { img: "./img/slide2.png", text: "夏へ" },
  { img: "./img/slide3.png", text: "秋へ" },
  { img: "./img/slide4.png", text: "冬へ" },
];
console.log(data[0]);
console.log(data[2].text);
console.log(data[2]["text"]);

const pushBtn = document.getElementById("pushBtn");
const viewImg = document.getElementById("viewImg");
let imgNum = 0;

pushBtn.textContent = (data[imgNum].text);
viewImg.setAttribute('src', data[imgNum].img);

pushBtn.addEventListener("click", () => {
  if(imgNum === 3) {
    imgNum = 0;
  } else {
    imgNum++;
  }
  pushBtn.textContent = data[imgNum].text;
  viewImg.setAttribute('src', data[imgNum].img);
});

const selectSeason = document.getElementById("seasonNum");
const skipBtn = document.getElementById("skipBtn");

skipBtn.addEventListener("click", () => {
  imgNum = selectSeason.value;
  console.log(imgNum);
  imgNum = parseInt(imgNum);
  console.log(imgNum);
  pushBtn.textContent = data[imgNum].text;
  viewImg.setAttribute('src', data[imgNum].img);
})