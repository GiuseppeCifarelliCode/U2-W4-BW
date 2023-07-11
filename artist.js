const URL=`https://striveschool-api.herokuapp.com/api/deezer/artist/${}`

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
    .then((artist)=>{
     
 
    })

    
    }

    ricerca()