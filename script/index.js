let col = document.querySelectorAll(".colonna");
console.log(col);
col.forEach((col, i) => {
  let query = document.querySelectorAll(".name");
  let testo = query[i].innerText;
  console.log(testo);

  let URL = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${testo}`;

  col.addEventListener("click", () => {
    fetch(URL)
      .then((res) => {
        if (res.ok) {
          console.log(res);
          return res.json();
        }
      })

      .then((data) => {
        let newdata = data.data;
        console.log(newdata);
        newdata.forEach((el) => {
          console.log(`${el.album.id}`);
          window.location.href = `albumPage.html?id=${el.album.id}`;
        });
      })

      .catch((err) => {
        console.log(err);
      });
  });
});

let playbutton = document.querySelector("#play");
playbutton.addEventListener("click", () => {
  let aTag = document.createElement("audio");
  aTag.id = "play";
  aTag.controls = true;
  aTag.autoplay = true;
  aTag.classList.add(
    "d-none",
    "position-fixed",
    "bottom-0",
    "start-50",
    "translate-middle-x",
    "w-50"
  );
  let sMP3 = document.createElement("source");
  sMP3.classList.add("source-mp3");
  aTag.appendChild(sMP3);
  document.getElementById("player").appendChild(aTag);

  sMP3.src =
    "https://cdns-preview-3.dzcdn.net/stream/c-358eb79e55e30b4719d976e15d41e230-8.mp3";
  console.log(sMP3);
  sMP3.type = "audio/mp3";
  aTag.classList.remove("d-none");

  document.querySelector("nav").appendChild(aTag);
  playbutton.disabled = true;
});

let saveButton = document.querySelector(".save");
console.log();

saveButton.addEventListener("click", () => {
  localStorage.setItem("artista nirvana", "smell like teen spirit");
});

let hiddenb = document.querySelector(".hiddenb");
console.log(hiddenb);
let mostraB = document.createElement("button");
mostraB.innerHTML = "MOSTRA ANNUNCI";
document.getElementById("top").appendChild(mostraB);
mostraB.classList.add(
  "d-none",
  "btn",
  "text-secondary",
  "border-black",
  "d-flex",
  "justify-content-end",
  "border-0",
  "mostra"
);
hiddenb.addEventListener("click", () => {
  mostraB.classList.remove("d-none");
  let row = document.querySelector(".rw");
  row.classList.add("d-md-none");
});
let row = document.querySelector(".rw");

console.log(mostraB);
mostraB.addEventListener("click", () => {
  row.classList.remove("d-md-none");
  mostraB.classList.add("d-none");
});

let mycol = document.querySelectorAll(".cardV img ");
// console.log(mycol);
mycol.forEach((img,i) => {
  let alt=img.alt
  console.log(alt)
  

  img.parentElement.addEventListener('click',()=>{
   
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${alt}`)
    .then((res)=>{
      if(res.ok){
        console.log(res)
        return res.json()
      }
    })

    .then((data)=>{
      
       window.location.href=`albumPage.html?id=${data.data[0].album.id}`
      
    })
    .catch((err)=>{
      console.log(err)
    })
  })

})

  

  
  
  
  
  
  
  
  

