const myUrl = "https://striveschool-api.herokuapp.com/api/deezer/album/"
let id = 75621062
const playerList = []
const getAlbum = function () {
  fetch(myUrl + id)
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error("errore")
      }
    })
    .then((data) => {
      console.log(data)
      document.getElementById("title").innerText = `${data.title}`
      document
        .getElementById("album-cover")
        .setAttribute("src", `${data.cover_medium}`)
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
                      <div>
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
        console.log(element)
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
              <div class=" col flex-grow-1">
                <p class="m-0 text-truncate">${element.title}</p>
                <p class="m-0">${element.artist.name}</p>
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
        console.log(playerList)
      })
      let songRow = document.getElementsByClassName("song-row")
      for (let i = 0; i < songRow.length; i++) {
        songRow[i].addEventListener("click", function () {
          audioPlay(playerList, i)
        })
      }
      // songRow.forEach((song, i) => {
      //   song.addEventListener("click", audioPlay(playerList, i))
      // })
      console.log(songRow)
    })

    .catch((err) => {
      console.log(err)
    })
}
getAlbum()
document
  .getElementsByClassName("chevron")[0]
  .addEventListener("click", function () {
    window.location.href = "./index.html"
  })
let aTag = document.createElement("audio")
aTag.id = "play"
aTag.controls = true
aTag.autoplay = true
aTag.classList.add("d-none")
document.getElementById("top").appendChild(aTag)
const audioPlay = function (arr, i) {
  let sMP3 = document.createElement("source")
  sMP3.classList.add("source-mp3", "text-center")
  sMP3.src = playerList[i]
  sMP3.type = "audio/mp3"
  aTag.classList.remove("d-none")
  aTag.appendChild(sMP3)

  document.querySelector("nav").appendChild(aTag)
}
