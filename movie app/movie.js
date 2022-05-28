var title;
var datajson
var tabl=document.querySelector("td");
var detailContainer=document.getElementById("det");

const data=(e)=>{
    title=e.target.value;
}
async function showDetails(e){
 
  var detailTitle= e.target.innerHTML;
  const urlWithDetailData=`https://www.omdbapi.com/?t=${detailTitle}&apikey=35c61a80`;
  const respon= await fetch(urlWithDetailData);
  const detailData=await respon.json();
  console.log(detailData);
  var detailDataShow=`
 <div class="fields">Title</div>
  <div class="fields">${detailData.Title==='N/A'?'""':detailData.Title}</div>
  <div class="fields" >Year</div>
  <div class="fields">${detailData.Year==='N/A'?'""':detailData.Year}</div>
  <div class="fields">imdbID</div>
  <div class="fields">${detailData.imdbID==='N/A'?'""':detailData.imdbID}</div>
  <div class="fields">Poster</div>
  <div class="fields"><img src="${detailData.Poster==='N/A'?'""':detailData.Poster}" width="120px"></div>
  <div class="fields">Type</div>
  <div class="fields">${detailData.Type==='N/A'?'""':detailData.Type}</div>
  <div class="fields">Rated</div>
  <div class="fields">${detailData.Rated==='N/A'?'""':detailData.Rated}</div>
  <div class="fields" >Released</div>
  <div class="fields">${detailData.Released==='N/A'?'""':detailData.Released}</div>
   <div class="fields">Genre</div>
  <div class="fields">${detailData.Genre==='N/A'?'""':detailData.Genre}</div>
  <div class="fields" >Director</div>
  <div class="fields">${detailData.Director==='N/A'?'""':detailData.Director}</div>
  <div class="fields">Actors</div>
  <div class="fields">${detailData.Actors==='N/A'?'""':detailData.Actors}</div>
 
  `;
  document.querySelector("#det").innerHTML=detailDataShow;
  console.log(document.querySelector("#det").innerHTML);
 


}
async function fetchData(e){

const urlwithTitle=`https://www.omdbapi.com/?s=${title}&apikey=35c61a80`;
const response=await fetch(urlwithTitle);
console.log(response);
datajson=await response.json();
console.log(datajson);
var tabrows=`<thead>
<th>Name</th>
<th>Year</th>
<th>Type</th>
<th>Image</th>
</thead>
<tbody>`;
for(let i=0;i<datajson.Search.length;i++){
  
    tabrows+=`<tr>
    <td onclick="showDetails(event)" id="${i}">${datajson.Search[i].Title || '""'}</td>
    <td>${datajson.Search[i].Year==='N/A'?'""':datajson.Search[i].Year}</td>
    <td>${datajson.Search[i].Type || '""'}</td>
    <td><img src="${datajson.Search[i].Poster || '""' }" width="120px"></td>
    </tr>`;
}
tabrows+=`</tbody>`;
document.querySelector("table").innerHTML=tabrows;


}
