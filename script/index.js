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
        newdata.forEach((el)=>{
        console.log(`${el.album.id}`)
        window.location.href=`albumPage.html?id=${el.album.id}`

        })
        })
       
       

      

      .catch((err) => {
        console.log(err);
      });
  });
})
  






let playbutton = document.querySelector("#play");
 playbutton.addEventListener("click", () => {
  
 })




// let playbutton = document.querySelector("#play");
//  playbutton.addEventListener("click", () => {
//   let x=document.createElement('audio')
//   x.id='audio-player'
//   x.controls='controls'
//   x.src=''
//   x.type='audio/mpeg'

//   document.querySelector('nav').appendChild(x)
 
// })
 

    




