const URL = "https://striveschool-api.herokuapp.com/api/deezer/artist/";
const barra= new URLSearchParams(location.search);
const eventId = barra.get("id");

let id = 412;
const playerList = [];


const ricerca = function () {
  fetch(URL +eventId)
    .then((res) => {
      if (res.ok) {
        console.log(res);
        return res.json();
      } else {
        throw new Error("errore");
      }
    })
    .then((data) => {
      console.log(data)
      console.log(data.tracklist);
       let fan=document.querySelector('.fan')
       fan.innerText=`${data.nb_fan
       }`
      let nome = document.getElementById("nome");
      nome.innerText = `${data.name}`;
      let back=document.getElementById('back')
      back.style.backgroundImage=`url( ${data.picture_xl} )`
      back.style.backgroundSize='cover'
      back.style.height= '500px'
      back.style.backgroundRepeat='no-repeat'
    
      
      let x = data.tracklist;
      console.log(x);
      fetch(x)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("errore");
          }
        })
        .then((el) => {
          console.log(el);
          el.data.forEach((el) => {
            playerList.push(el.preview);

            let time = el.duration;
            const date = data.release_date;

            const minutes = Math.floor(time / 60);
            const seconds = time - minutes * 60;
            const hours = Math.floor(time / 3600);
            time = time - hours * 3600;

            let brani = document.getElementById("brani");

            let col = document.createElement("div");
            col.classList.add("col", "col-12", "d-flex", "song-row");
            col.innerHTML = `  <div class=" mx-2 d-lg-flex col-1">
            <img src=${
              el.album.cover
            } class="card-img-top" alt="...">   </div>
     <div class=" col flex-grow-1">
       <p class="m-0 text-truncate">${el.title}</p>
       <p class="m-0">${el.artist.name}</p>
     </div>
     <div class="d-lg-none col-1">
       <i class="bi bi-three-dots-vertical"></i>
     </div>
     <div class="d-none d-lg-flex justify-content-between col">
       <p class="mt-0">${el.rank}</p>
       <p class="mt-0">${minutes}:${seconds}</p>
     </div>
     `;

            brani.appendChild(col);
          });

          let songRow = document.getElementsByClassName("song-row")
          for (let i = 0; i < songRow.length; i++) {
            let aTag = document.createElement("audio")
            aTag.controls = true
            aTag.autoplay = false
            aTag.classList.add(
              "d-none",
              "position-fixed",
              "bottom-0",
              "start-50",
              "translate-middle-x",
              "w-50"
            )
            let sMP3 = document.createElement("source")
            sMP3.classList.add("source-mp3")
            aTag.appendChild(sMP3)
            sMP3.src = playerList[i]
            sMP3.type = "audio/mp3"
            aTag.classList.remove("d-none")
            document.getElementById("player").appendChild(aTag)
    
            songRow[i].addEventListener("click", function () {
              audioPlay(i)
            })
          }

          document.getElementById("home").addEventListener("click", function () {
            window.location.href = ' ./index.html'
          })


          document.getElementById("cerca").addEventListener("click", function () {
            window.location.href = ' ./search.html'
          })

          

          
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

ricerca();

const audioPlay = function (n) {
  const allSong = document.querySelectorAll("audio")
  document.getElementById("player").classList.remove("d-none")
  allSong.forEach((song, i) => {
    song.addEventListener("ended", function () {
      document.getElementById("player").classList.add("d-none")
    })
    if (i === n) {
      song.classList.remove("d-none")
      song.play()
    } else {
      song.classList.add("d-none")
      song.pause()
    }
  })
}





document.getElementById("heart").addEventListener("click", function () {
  document.getElementById("heart").classList.toggle("bi-heart");
  document.getElementById("heart").classList.toggle("bi-heart-fill");
});
document.getElementById("close").addEventListener("click", function () {
  document.getElementById("footer").classList.add("d-lg-none");
  document.querySelector("main").classList.add("flex-grow-1");
});
document.getElementById("amici").addEventListener("click", function name() {
  document.getElementById("footer").classList.remove("d-lg-none");
});
