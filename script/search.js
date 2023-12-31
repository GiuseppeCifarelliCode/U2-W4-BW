const spinnerContainer = document.querySelector(".spinner-container");

const searchGenerator = function (URL) {
  fetch(URL)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("errore");
      }
    })
    .then((data) => {
      let newdata = data.data;
      console.log(data);
      newdata.forEach((element) => {
        let riga = document.getElementById("riga");
        let col = document.createElement("div");
        col.classList.add(
          "col",
          "d-flex",
          "scompari",
          "justify-content-center"
        );
        col.innerHTML = `<div class="card w-100 text-bg-dark">
        <a href="./albumPage.html?id=${element.album.id}">
   <img src=${element.album.cover_medium} class="card-img-top" crossorigin="anonymous" alt="${element.title}">
   </a>
   <div class="card-body d-flex flex-column justify-content-between">
     <h5 class="card-title">${element.title} </h5>
    <audio class="w-100"
        controls
        src=${element.preview}>
            <a href=${element.preview}>
                Download audio
            </a>
    </audio>
</figure>
   </div>
 </div>    `;

        riga.appendChild(col);
      });
      spinnerContainer.classList.add("d-none");
      // const allImgCards = document.querySelectorAll(".card-img-top");
      // const allCardsBody = document.querySelectorAll(".card-body");
      // const allCardsTitle = document.querySelectorAll(".card-title");
      // allImgCards.forEach((img, i) => {
      //   let context = draw(img);
      //   let allColors = getColors(context);
      //   let mostRecurrent = findMostRecurrentColor(allColors);
      //   let mostRecurrentHex = pad(mostRecurrent);
      //   console.log(mostRecurrentHex);
      //   allCardsBody[i].style.backgroundColor = "#" + mostRecurrentHex;
      //   allCardsBody[i].style.filter = "invert(100%)";
      //   const invertColor = allCardsBody[i].style.backgroundColor;
      //   allCardsBody[i].style.backgroundColor = "#" + mostRecurrentHex;
      //   console.log(invertColor, "here");
      //   allCardsTitle[i].style.color = invertColor;
      // });
    })

    .catch((err) => console.log(err));
};

const formReference = document.querySelector("form");
formReference.addEventListener("submit", function (e) {
  e.preventDefault();
  const ricerca1 = document.querySelector(".form-control");
  const ricerca2 = ricerca1.value;
  let scomparsa = document.querySelectorAll(".scompari");
  scomparsa.forEach((e) => {
    e.classList.add("d-none");
  });
  const URL = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${ricerca2}`;
  spinnerContainer.classList.remove("d-none");
  searchGenerator(URL);
});

console.log(document.querySelectorAll(".card img"));

const allImgCards = document.querySelectorAll(".card img");
allImgCards.forEach((img) => {
  img.addEventListener("click", function () {
    let scomparsa = document.querySelectorAll(".scompari");

    scomparsa.forEach((e) => {
      e.classList.add("d-none");
    });
    spinnerContainer.classList.remove("d-none");
    searchGenerator(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${img.alt}`
    );
  });
});

const populatePlaylist = function () {
  const playlist = JSON.parse(localStorage.getItem("playlist"));
  if (playlist) {
    playlist.forEach((track) => {
      const newLi = document.createElement("li");
      newLi.innerText = track.title;
      newLi.addEventListener("click", function () {
        window.location.href = `./albumPage.html?id=${track.id}`;
      });
      document.getElementById("list").appendChild(newLi);
    });
  } else {
    const playlist = [];
    localStorage.setItem("playlist", JSON.stringify(playlist));
  }
};
populatePlaylist();
