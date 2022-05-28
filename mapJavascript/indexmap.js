var map = L.map('map').setView([0, 0], 0);
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
 }).addTo(map);
 var colors=['blue','green','red','yellow'];
 var mapIcons=[];
 var markers=[];
 var city={};
 for(let i=0;i<4;i++){
    var Icons = new L.Icon({
        iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${colors[i]}.png`,
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
    mapIcons[i]=Icons;
 }
 var locationdata=[];
async function getData(item) {

    var api = `https://api.traveltimeapp.com/v4/geocoding/search?query=${item}&limit=1`;
    console.log(api);
    console.log("aaaaaaa");
    let response = await fetch(api, {
        method: 'GET',
        headers: {
            'X-Api-Key': '64167c072426bb7d48b48802888f9fb2',
            'X-Application-Id': '77012017',
            'Accept-Language': 'en',

        },

    });
    let result =await response.json();
    console.log('aa to gaya');
    console.log(result);
    return result;
}
function getDataa() {
    
    var locat = document.querySelector("#location").value;
    console.log(locat);
    var allLoc = locat.split(",");
    
    console.log(allLoc);

    allLoc.map((element,index) => {
        console.log(element);
        getData(element).then(res => {
            console.log("aala");
            createMarkerrs(res,index);
          }).catch(err => {
            console.log(err);
        });

    });
   
}
function createMarkerrs(response,index){
    let lat=response.features[0].geometry.coordinates[0];
    let long=response.features[0].geometry.coordinates[1];
    let name=response.features[0].properties.name;
    let mar;
    let markLength=markers.length;
    console.log("length=>>> "+markLength);
    console.log(name);
    console.log(index);
    if(index==0){
        
       mar=L.marker([long,lat], {icon:mapIcons[index]}).addTo(map).bindPopup(name);   
    }
    else if(index==1){
        mar= L.marker([long,lat], {icon:mapIcons[index]}).addTo(map).bindPopup(name);
    }
    else if(index==2){
         mar=L.marker([long,lat], {icon:mapIcons[index]}).addTo(map).bindPopup(name);
    }
    else{
         mar= L.marker([long,lat], {icon:mapIcons[3]}).addTo(map).bindPopup(name);
    }
    markers.push(mar);
    
}
