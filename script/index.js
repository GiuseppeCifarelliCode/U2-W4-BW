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
        let container=document.createElement('div')
          container.classList.add('container')
        let rowalbum = document.createElement("div");
        rowalbum.classList.add("row");
        newdata.forEach((el) => {
          console.log(el)
          
          document.querySelector("article").classList.add("d-none");
          document.querySelector("aside").classList.add("d-none");
          
          let colalbum = document.createElement("div");
          colalbum.classList.add("col", "col-3","d-flex");
          let card = document.createElement("div")
          card.classList.add('cardAlbum');
          card.innerHTML=`<div class="card" style="width:8rem height:10rem">
          <img src="${el.album.cover_small}" class="card-img-top"  alt="...">
          <div class="card-body">
            <h5 class="card-text text-dark">${el.title}</h5>
            <p class="card-text text-dark">${el.artist.name}</p>
          </div>
        </div>`
        
        
        document.querySelector('main').appendChild(container).appendChild(rowalbum).appendChild(colalbum).appendChild(card)
        });
       

      })

      .catch((err) => {
        console.log(err);
      });
  });
});






// const music = new Audio();
// music.src =
//  "https://rr1---sn-hpa7znzy.googlevideo.com/videoplayback?expire=1689090496&ei=YCWtZJ-dOfOG6dsP6c-XgAs&ip=95.250.1.33&id=o-AFu6p3KXgqRSOAIBzkPy89XD_i7y1O-VqiwLeEwTidzU&itag=140&source=youtube&requiressl=yes&gcr=it&spc=Ul2SqwhOfVVZf9zRCx650GhiOPH-Ylg&vprv=1&svpuc=1&mime=audio/mp4&gir=yes&clen=2949192&dur=182.183&lmt=1665734267114529&keepalive=yes&fexp=24007246,24350018&beids=24350018&c=ANDROID&txp=5532434&sparams=expire,ei,ip,id,itag,source,requiressl,gcr,spc,vprv,svpuc,mime,gir,clen,dur,lmt&sig=AOq0QJ8wRAIgTj5jwUdcKYeDEuoAxyJeAKd4gCccFbOLVnd8kS4GtXcCIHOQe50EhyhHN6UayvhTdHEKFUOIkcPz5ynd2Cm5z1tK&avi=K1A%2FHwERIiwAVF9GEEsDeAQ%2FIDoARhxHSFQmDVNZV0E1FigaFRwsBwECFkYZX0dfPF5LNQwEJQAWIgwJRkJGUj0CS0wLASEJSFQ1CEJIU1E5HgACHCc5BBADFkYZX0dfPF5LIAwQKAotGAMLdkNeej4WDA5HTn1JRi8xB0xEXEciC0tMCwEhCUhUNRZMSUsRalABAhEEd0pLHxFJU0McXCgLBRcHB2MMC0xXVRABABF8UCQXHTkkCwA1ChFNRUBKckgHAwkYYUcnAxcWRl9GZzkfDAURFSAVRkxHVRUJCwNmSlFPUlZhRyEOERZCUkZcIiYQBgBWd0cGFxYBc11TSjUAIwVHCQ%3D%3D&from_cache=False&title=Fedez%20feat.%20Salmo%20-%20VIOLA%20(visual%20video)&redirect_counter=1&rm=sn-uxaxpu5ap5-j5be7e&req_id=a3eda112b6dfa3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=-1&mm=29&mn=sn-hpa7znzy&ms=rdu&mt=1689068185&mv=u&mvi=1&pl=24&lsparams=ipbypass,mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgK75dHgC5BqouECC2AnobHsTEqi7rv3KKSdQubQ15tlMCIQCb107RuQ_zU_5SibV-xME0nXRxgkbkDN51okZky0owhA%3D%3D";
//  cont.src=music.src
//  cont.type=Audio




let playbutton = document.querySelector("#play");
 playbutton.addEventListener("click", () => {

    var aTag = document.createElement('audio');
aTag.id = 'play';
aTag.controls = true;
aTag.autoplay=true;

var sMP3 = document.createElement('source');
sMP3.src = "https://rr1---sn-hpa7znzy.googlevideo.com/videoplayback?expire=1689090496&ei=YCWtZJ-dOfOG6dsP6c-XgAs&ip=95.250.1.33&id=o-AFu6p3KXgqRSOAIBzkPy89XD_i7y1O-VqiwLeEwTidzU&itag=140&source=youtube&requiressl=yes&gcr=it&spc=Ul2SqwhOfVVZf9zRCx650GhiOPH-Ylg&vprv=1&svpuc=1&mime=audio/mp4&gir=yes&clen=2949192&dur=182.183&lmt=1665734267114529&keepalive=yes&fexp=24007246,24350018&beids=24350018&c=ANDROID&txp=5532434&sparams=expire,ei,ip,id,itag,source,requiressl,gcr,spc,vprv,svpuc,mime,gir,clen,dur,lmt&sig=AOq0QJ8wRAIgTj5jwUdcKYeDEuoAxyJeAKd4gCccFbOLVnd8kS4GtXcCIHOQe50EhyhHN6UayvhTdHEKFUOIkcPz5ynd2Cm5z1tK&avi=K1A%2FHwERIiwAVF9GEEsDeAQ%2FIDoARhxHSFQmDVNZV0E1FigaFRwsBwECFkYZX0dfPF5LNQwEJQAWIgwJRkJGUj0CS0wLASEJSFQ1CEJIU1E5HgACHCc5BBADFkYZX0dfPF5LIAwQKAotGAMLdkNeej4WDA5HTn1JRi8xB0xEXEciC0tMCwEhCUhUNRZMSUsRalABAhEEd0pLHxFJU0McXCgLBRcHB2MMC0xXVRABABF8UCQXHTkkCwA1ChFNRUBKckgHAwkYYUcnAxcWRl9GZzkfDAURFSAVRkxHVRUJCwNmSlFPUlZhRyEOERZCUkZcIiYQBgBWd0cGFxYBc11TSjUAIwVHCQ%3D%3D&from_cache=False&title=Fedez%20feat.%20Salmo%20-%20VIOLA%20(visual%20video)&redirect_counter=1&rm=sn-uxaxpu5ap5-j5be7e&req_id=a3eda112b6dfa3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=-1&mm=29&mn=sn-hpa7znzy&ms=rdu&mt=1689068185&mv=u&mvi=1&pl=24&lsparams=ipbypass,mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgK75dHgC5BqouECC2AnobHsTEqi7rv3KKSdQubQ15tlMCIQCb107RuQ_zU_5SibV-xME0nXRxgkbkDN51okZky0owhA%3D%3D";

sMP3.type = 'audio/mpeg';

var sOGG = document.createElement('source');
sOGG.src = "https://rr1---sn-hpa7znzy.googlevideo.com/videoplayback?expire=1689090496&ei=YCWtZJ-dOfOG6dsP6c-XgAs&ip=95.250.1.33&id=o-AFu6p3KXgqRSOAIBzkPy89XD_i7y1O-VqiwLeEwTidzU&itag=140&source=youtube&requiressl=yes&gcr=it&spc=Ul2SqwhOfVVZf9zRCx650GhiOPH-Ylg&vprv=1&svpuc=1&mime=audio/mp4&gir=yes&clen=2949192&dur=182.183&lmt=1665734267114529&keepalive=yes&fexp=24007246,24350018&beids=24350018&c=ANDROID&txp=5532434&sparams=expire,ei,ip,id,itag,source,requiressl,gcr,spc,vprv,svpuc,mime,gir,clen,dur,lmt&sig=AOq0QJ8wRAIgTj5jwUdcKYeDEuoAxyJeAKd4gCccFbOLVnd8kS4GtXcCIHOQe50EhyhHN6UayvhTdHEKFUOIkcPz5ynd2Cm5z1tK&avi=K1A%2FHwERIiwAVF9GEEsDeAQ%2FIDoARhxHSFQmDVNZV0E1FigaFRwsBwECFkYZX0dfPF5LNQwEJQAWIgwJRkJGUj0CS0wLASEJSFQ1CEJIU1E5HgACHCc5BBADFkYZX0dfPF5LIAwQKAotGAMLdkNeej4WDA5HTn1JRi8xB0xEXEciC0tMCwEhCUhUNRZMSUsRalABAhEEd0pLHxFJU0McXCgLBRcHB2MMC0xXVRABABF8UCQXHTkkCwA1ChFNRUBKckgHAwkYYUcnAxcWRl9GZzkfDAURFSAVRkxHVRUJCwNmSlFPUlZhRyEOERZCUkZcIiYQBgBWd0cGFxYBc11TSjUAIwVHCQ%3D%3D&from_cache=False&title=Fedez%20feat.%20Salmo%20-%20VIOLA%20(visual%20video)&redirect_counter=1&rm=sn-uxaxpu5ap5-j5be7e&req_id=a3eda112b6dfa3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=-1&mm=29&mn=sn-hpa7znzy&ms=rdu&mt=1689068185&mv=u&mvi=1&pl=24&lsparams=ipbypass,mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgK75dHgC5BqouECC2AnobHsTEqi7rv3KKSdQubQ15tlMCIQCb107RuQ_zU_5SibV-xME0nXRxgkbkDN51okZky0owhA%3D%3D";

sOGG.type = 'audio/ogg';


aTag.appendChild(sMP3);
aTag.appendChild(sOGG);
document.querySelector('nav').appendChild(aTag);

    



    
 
})

 

    




