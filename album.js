const URL='https://striveschool-api.herokuapp.com/api/deezer/album/75621062'

const indirizzo= new URLSearchParams(location.search)
const eventid= indirizzo.get('id')
console.log(URL+eventid)

const ricerca=function(){
    fetch(URL+eventid)
    .then((res)=>{
     if(res.ok){
         return res.json()
     }else{
         throw new Error ('errore')
     }
    })
    .then((album)=>{
     let div=document.querySelector('.row')
     let x=document.createElement('div')
     x.classList.add('.col')
     x.innerHTML=`
    


     `
    
       div.appendChild(x)

 
    })

    
    }

    ricerca()