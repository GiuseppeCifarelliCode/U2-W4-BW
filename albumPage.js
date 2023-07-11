const myUrl = "https://striveschool-api.herokuapp.com/api/deezer/album/"
let id = 75621062
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
      document.getElementById("album-info").innerHTML = ` 
                      <img
                      src=${data.artist.picture_small}
                      alt="artist pic"
                      class="rounded-circle"
                      width="25px"
                    />  
                    ${data.artist.name}  · ${year} · ${data.nb_tracks} brani, ${minutes} min ${seconds} sec.
                    `
      const tracks = data.tracks.data
      tracks.forEach((element, i) => {
        let time = element.duration
        const date = data.release_date
        const year = date.slice(0, 4)
        const minutes = Math.floor(time / 60)
        const seconds = time - minutes * 60
        const hours = Math.floor(time / 3600)
        time = time - hours * 3600
        console.log(element)
        const newRow = document.createElement("div")
        newRow.classList.add("row")
        newRow.innerHTML = `
      <div
              class="col-12 border-bottom d-flex justify-content-between justify-content-lg-evenly align-items-center px-3 gap-4 py-2"
            >
              <div class="d-none d-lg-flex">${i + 1}</div>
              <div class="flex-grow-1">
                <p class="m-0">${element.title}</p>
                <p class="m-0">${element.artist.name}</p>
              </div>
              <div class="d-lg-none">
                <i class="bi bi-three-dots-vertical"></i>
              </div>
              <div class="d-none d-lg-flex flex-grow-1 justify-content-between">
                <p class="mt-0">${element.rank}</p>
                <p class="mt-0">${minutes}:${seconds}</p>
              </div>
            </div>
      `
        document.getElementById("main").appendChild(newRow)
      })
    })

    .catch((err) => {
      console.log(err)
    })
}
getAlbum()
