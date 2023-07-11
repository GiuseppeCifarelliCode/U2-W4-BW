const myUrl = 'https://striveschool-api.herokuapp.com/api/deezer/album/'
let id = 75621062
const getAlbum = function (){
    fetch(myUrl+id)
        .then(res=>{
            if(res.ok){
                return res.json()
            }
            else{
                throw new Error('errore')
            }
        })
        .then(data=>{
            console.log(data)
            document.getElementById('title').innerText = `${data.title}`
            }
        )
        .catch(err=>{
            console.log(err)
        })
}
getAlbum()