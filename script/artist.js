const URL='https://striveschool-api.herokuapp.com/api/deezer/artist/'
let id=412

//const indirizzo= new URLSearchParams(location.search)
//const numeroid= indirizzo.get('id')
//console.log(URL+numeroid)




const ricerca=function(){
  
    fetch(URL+id)
    
    .then((res)=>{
     
     if(res.ok){
         return res.json()
     }else{
         throw new Error ('errore')
     }
    })
    .then((data)=>{
        console.log(data)

      let nome=  document.getElementById("nome")
    nome.innerText = `${data.name}`
    let immagine=document.getElementById('album-cover')
    immagine.setAttribute("src", `${data.picture_medium
    }`)
  
    })
    .catch((err)=>{
        console.log(err)
    })

    
    }

    ricerca()