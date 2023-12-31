const myUrl = "https://striveschool-api.herokuapp.com/api/deezer/album/"
const addressBarContent = new URLSearchParams(location.search)
const eventId = addressBarContent.get("id")
let id = 75621062
const trackObj = class {
  constructor(_title, _id) {
    this.title = _title
    this.id = _id
  }
}
const playerList = []
const getAlbum = function () {
  fetch(myUrl + eventId)
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error("errore")
      }
    })
    .then((data) => {
      document.getElementById("title").innerText = `${data.title}`
      let albumCover = document.getElementById("album-cover")
      albumCover.setAttribute("src", `${data.cover_medium}`)
      let time = data.duration
      const date = data.release_date
      const year = date.slice(0, 4)
      const minutes = Math.floor(time / 60)
      const seconds = time - minutes * 60
      const hours = Math.floor(time / 3600)
      time = time - hours * 3600
      document.getElementById("spinner").classList.add("d-none")
      document.getElementById("head-album").classList.remove("d-none")
      document.getElementById("album-info").innerHTML = ` 
                      <div id='artist'>
                      <p class="m-0">
                      <img
                      src=${data.artist.picture_small}
                      alt="artist pic"
                      class="rounded-circle"
                      width="25px"
                    />  
                    ${data.artist.name} </p> 
                    </div>
                    <p class="m-0 d-none d-lg-flex">&nbsp; · ${year} · ${data.nb_tracks} brani, ${minutes} min ${seconds} sec. &nbsp;</p>
                    <p class="m-0 d-lg-none">album · ${year}</p>
                    `
      document.getElementsByTagName(
        "title"
      )[0].innerText = `${data.artist.name}-${data.title}`
      // aggiungo la funzione per le playlist al pulsate
      document.getElementById("add-pl").addEventListener("click", function () {
        // collego ad una constante il valore playlist di localstorage parsato
        const playlist = JSON.parse(localStorage.getItem("playlist"))
        const track = new trackObj(`${data.title}`, `${data.id}`)
        playlist.push(track)
        localStorage.setItem("playlist", JSON.stringify(playlist))
        // pulisco dentro ul e ripopolo la lista
        document.getElementById("list").innerHTML = ""
        populatePlaylist()
      })
      const tracks = data.tracks.data
      tracks.forEach((element, i) => {
        playerList.push(element.preview)
        let time = element.duration
        const date = data.release_date
        const year = date.slice(0, 4)
        const minutes = Math.floor(time / 60)
        const seconds = time - minutes * 60
        const hours = Math.floor(time / 3600)
        time = time - hours * 3600
        const newRow = document.createElement("div")
        newRow.classList.add(
          "row",
          "row-cols-3",
          "py-2",
          "justify-content-between",
          "align-items-center",
          "song-row"
        )
        newRow.innerHTML = `

              <div class="d-none d-lg-flex col-1">${i + 1}</div>
              <div class=" col flex-grow-1 d-flex gap-2">
              <div>
                <p class="m-0 text-truncate">${element.title}</p>
                <p class="m-0">${element.artist.name}</p>
                </div>
                <div id="player${i}" class="d-md-none d-flex justify-content-end flex-grow-1">
                 
                </div>
              </div>
              <div class="d-lg-none col-1">
                <i class="bi bi-three-dots-vertical"></i>
              </div>
              <div class="d-none d-lg-flex justify-content-between col">
                <p class="mt-0">${element.rank}</p>
                <p class="mt-0">${minutes}:${seconds}</p>
              </div>
            
      `
        document.getElementById("main").appendChild(newRow)
      })
      let songRow = document.getElementsByClassName("song-row")
      for (let i = 0; i < songRow.length; i++) {
        let aTag = document.createElement("audio")
        aTag.classList.add("desktop")
        aTag.controls = true
        aTag.autoplay = false
        aTag.classList.add("w-50")
        let sMP3 = document.createElement("source")
        sMP3.classList.add("source-mp3")
        aTag.appendChild(sMP3)
        sMP3.src = playerList[i]
        sMP3.type = "audio/mp3"
        document.getElementById("player").appendChild(aTag)
        songRow[i].addEventListener("click", function () {
          audioPlay(i)
        })
      }

      document.querySelectorAll(".bi-play-fill").forEach((btn) => {
        btn.addEventListener("click", function () {
          audioPlay(3)
        })
      })
      document.getElementById("artist").addEventListener("click", function () {
        window.location.href = `./artistPage.html?id=${data.artist.id}`
      })
    })
    .then(() => {
      const albumCover = document.getElementById("album-cover")
      albumCover.setAttribute("onload", start(albumCover))
      document.getElementById("top").style.backgroundColor =
        "#" + start(albumCover)
      let sfumato = `linear-gradient(to bottom, #${start(albumCover)}, #212121)`
      document.getElementById("btn-cont").style.backgroundImage = sfumato
    })

    .catch((err) => {
      console.log(err)
    })
}
getAlbum()

const audioPlay = function (n) {
  const allSong = document.querySelectorAll("audio.desktop")
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

// il cuore diventa verde al click
document.getElementById("heart").addEventListener("click", function () {
  document.getElementById("heart").classList.toggle("bi-heart")
  document.getElementById("heart").classList.toggle("bi-heart-fill")
})
// si chiude la sezione amici al click
document.getElementById("close").addEventListener("click", function () {
  document.getElementById("footer").classList.add("d-lg-none")
  document.querySelector("main").classList.add("flex-grow-1")
})
// mostro la seziona amici al click
document.getElementById("amici").addEventListener("click", function name() {
  document.getElementById("footer").classList.remove("d-lg-none")
})
// link alla pagina search
document
  .getElementsByClassName("bi-search ")[0]
  .addEventListener("click", function () {
    window.location.href = "./search.html"
  })
// link alla pagina home
document
  .getElementsByClassName("bi-house-door-fill")[0]
  .addEventListener("click", function () {
    window.location.href = "./index.html"
  })
let dottedBtn = document.querySelectorAll(".add")
dottedBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    console.log(btn)
    document.getElementById("add-to-playlist").classList.toggle("d-none")
  })
})
// popolo le playlist al caricamento se ci sono nel localstorage
const populatePlaylist = function () {
  const playlist = JSON.parse(localStorage.getItem("playlist"))
  if (playlist) {
    playlist.forEach((track) => {
      const newLi = document.createElement("li")
      newLi.innerText = track.title
      newLi.addEventListener("click", function () {
        window.location.href = `./albumPage.html?id=${track.id}`
      })
      document.getElementById("list").appendChild(newLi)
    })
  } else {
    const playlist = []
    localStorage.setItem("playlist", JSON.stringify(playlist))
  }
}
populatePlaylist()

// USERNAME/ACCESS LINK
const userButton = document.querySelector(".user-button")
const bottomHeader = document.querySelector(".header-cardA")
const userName = JSON.parse(localStorage.getItem("username"))
if (userName) {
  userButton.innerText = userName
} else {
  userButton.innerText = "Sign In"
}

// LOGOUT
const logoutButton = document.querySelector(".logout")
logoutButton.addEventListener("click", () => {
  localStorage.removeItem("username")
})
