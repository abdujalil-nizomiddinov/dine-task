// time function
function updateTime() {
  const now = new Date();

  const days = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0"
  );
}

setInterval(updateTime, 1000);
updateTime();
// end --------->

// slider function
const data = [
  {
    img: "./src/pic/slide_1.png",
    title: "Seared Salmon Fillet",
    desc: "Our locally sourced salmon served with a refreshing buckwheat summer salad.",
  },
  {
    img: "./src/pic/slide_2.png",
    title: "Rosemary Filet Mignon",
    desc: "Our prime beef served to your taste with a delicious choice of seasonal sides.",
  },
  {
    img: "./src/pic/slide_3.png",
    title: "Summer Fruit Chocolate Mousse",
    desc: "Creamy mousse combined with summer fruits and dark chocolate shavings.",
  },
];

let current = 0;

const imgEl = document.getElementById("slide-img");
const titleEl = document.getElementById("slide-title");
const descEl = document.getElementById("slide-desc");

function showSlide(index) {
  const item = data[index];
  imgEl.src = item.img;
  titleEl.textContent = item.title;
  descEl.textContent = item.desc;
}

document.getElementById("prev").addEventListener("click", () => {
  current = (current - 1 + data.length) % data.length;
  showSlide(current);
});

document.getElementById("next").addEventListener("click", () => {
  current = (current + 1) % data.length;
  showSlide(current);
});

showSlide(current);
// end --------->
