const buttonUp = document.querySelector(".prev");
const buttonDown = document.querySelector(".next");
let ImgDiv = document.querySelector(".items");
let Imgs2 = document.createElement("div");
let Container = document.querySelector(".container");
Imgs2.classList.add("thumbs");
ImgDiv.append(Imgs2);
let Insert = "";
let InsertThumb = "";

// OBJECT

const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

// let DescriptionText = (document.createElement("h2").innerHTML =
//   images[1].title);
// console.log(DescriptionText);

let DescriptionText = document.createElement("h2");

// images.forEach((element) => {
//   let DescriptionText = (document.createElement("h2").innerHTML =
//     element.title);

//   ImgDiv.prepend(DescriptionText);

//   console.log(DescriptionText);
// });

for (let i = 0; i < images.length; i++) {
  let CurrentImage = `<div class='item'> <img  src=' ${images[i].image} ' />
   <div class="Idea" style="padding-right:10rem; position:relative; bottom:35%; color:white; ">
    <h2>${images[i].title}</h2>
    <p>${images[i].text}</p>
    </div>
    </div>`;

  Insert += CurrentImage;
}

// THUMB CYCLE

for (let i = 0; i < images.length; i++) {
  const thumb = document.createElement("div");
  thumb.classList.add("thumb");

  const image = document.createElement("img");
  image.src = images[i].image;

  thumb.append(image);

  Imgs2.append(thumb);
  // let currentImage2 =
  //   "<div class='thumb'><img src='" + images[i].image + "'/></div>";

  // InsertThumb += currentImage2;
}

// Imgs2.innerHTML = InsertThumb;

setTimeout(() => {
  document.querySelectorAll(".thumb").forEach((elem) => {
    elem.addEventListener("click", () => {
      let DescriptionText = document.createElement("h2");
      elem.classList.add("active");
      let Idea = document.getElementsByClassName(".Idea");
      console.log(Idea);
    });
  });
}, 1);

// Imgs2.querySelector("div").addEventListener("click", function () {
//   this.classList.add(".active");
//   console.log("ei");
// });

ImgDiv.innerHTML += Insert;
document.getElementsByClassName("item")[0].classList.add("active");
let index = 0;

document.querySelector(".prev").addEventListener("click", function () {
  // index++;

  if (index === 0) {
    document.getElementsByClassName("item")[0].classList.remove("active");
    document.getElementsByClassName("item")[index + 4].classList.add("active");
    index = 4;
  } else if (index === 4) {
    document.getElementsByClassName("item")[index].classList.remove("active");
    document.getElementsByClassName("item")[index - 1].classList.add("active");
    index--;
  } else {
    document.getElementsByClassName("item")[index].classList.remove("active");
    document.getElementsByClassName("item")[index - 1].classList.add("active");
    index--;
  }
  console.log(index);
});

document.querySelector(".next").addEventListener("click", function () {
  // index--;

  if (index === 4) {
    document.getElementsByClassName("item")[index].classList.remove("active");
    document.getElementsByClassName("item")[index - 4].classList.add("active");
    index = 0;
  } else if (index === 0) {
    document.getElementsByClassName("item")[0].classList.remove("active");
    document.getElementsByClassName("item")[index + 1].classList.add("active");
    index++;
  } else {
    document.getElementsByClassName("item")[index].classList.remove("active");
    document.getElementsByClassName("item")[index + 1].classList.add("active");
    index++;
  }

  console.log(index);
});
