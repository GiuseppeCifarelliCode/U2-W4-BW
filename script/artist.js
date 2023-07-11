const URL='https://striveschool-api.herokuapp.com/api/deezer/artist/'
let id=412

//const indirizzo= new URLSearchParams(location.search)
//const numeroid= indirizzo.get('id')
//console.log(URL+numeroid)




const ricerca=function(){
  
    fetch(URL+id)
    
    .then((res)=>{
     
     if(res.ok){
        console.log(res)
         return res.json()
     }else{
         throw new Error ('errore')
     }
    })
    .then((data)=>{
        console.log(data.tracklist)

      let nome=  document.getElementById("nome")
    nome.innerText = `${data.name}`
    let immagine=document.getElementById('album-cover')
    immagine.setAttribute("src", `${data.picture_medium
    }`)
   let x=data.tracklist
   console.log(x)
   fetch(x)
   .then((res)=>{
     
    if(res.ok){
        return res.json()
    }else{
        throw new Error ('errore')
    }
   })
   .then((el)=>{
    console.log(el)
    el.data.forEach((el,i)=>{

        let time = el.duration
        const date = data.release_date
     
        const minutes = Math.floor(time / 60)
        const seconds = time - minutes * 60
        const hours = Math.floor(time / 3600)
        time = time - hours * 3600


     let brani=document.getElementById('brani')
     let col=document.createElement('col')
     col.classList.add('col-12','d-flex')
     col.innerHTML=`  <div class="d-none d-lg-flex col-1">${i + 1}</div>
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
     `


 brani.appendChild(col)


       


    })


   })
    
  
    
    
    })
    .catch((err)=>{
        console.log(err)
    })

    
    }

    ricerca()