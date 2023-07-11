const input = document.getElementById("basic-addon1");
input.addEventListener("click", function () {
  const ricerca1 = document.querySelector(".form-control");
  const ricerca2 = ricerca1.value;
  console.log(ricerca2);
  let scomparsa = document.querySelectorAll(".scompari");
  scomparsa.forEach((e) => {
    e.classList.add("d-none");
  });

  const URL = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${ricerca2} `;
  fetch(URL)
    .then((res) => {
      if (res.ok) {
        console.log(res);
        return res.json();
      } else {
        throw new Error("errore");
      }
    })
    .then((data) => {
      console.log(data);
      let newdata = data.data;
      console.log(newdata);

      newdata.forEach((element) => {
        let riga = document.getElementById("riga");
        let col = document.createElement("div");
        col.classList.add("col", "d-flex", "scompari");
        col.innerHTML = `<div class="card" style="width: 18rem;">
     <img src=${element.album.cover_medium} class="card-img-top " alt="...">
     <div class="card-body d">
       <h5 class="card-title">${element.title} </h5>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
   </div>    `;

        riga.appendChild(col);
      });
    })
    .catch((err) => console.log(err));
});