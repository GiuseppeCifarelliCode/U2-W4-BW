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
      function str_pad_left(string, pad, length) {
        return (new Array(length + 1).join(pad) + string).slice(-length)
      }
      const finalTime =
        str_pad_left(minutes, "0", 2) + ":" + str_pad_left(seconds, "0", 2)
      console.log(finalTime, "time")
      document.getElementById("album-info").innerHTML = ` 
                      <img
                      src=${data.artist.picture_small}
                      alt="artist pic"
                      class="rounded-circle"
                      width="25px"
                    />  
                    ${data.artist.name}  · ${year} · ${data.nb_tracks} brani, 
                    
                    `
    })
    .catch((err) => {
      console.log(err)
    })
}
getAlbum()
