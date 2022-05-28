var markers=[];
function fetdata(){
    var locat = document.querySelector("#location").value;
    console.log(locat);
    var allLoc = locat.split(",");
    markers=[];
    console.log(allLoc);
    var prom=[];
    for(let i=0;i<allLoc.length;i++){
        var newpr=new Promise(async function(resolve,reject){
            var api = `https://api.traveltimeapp.com/v4/geocoding/search?query=${allLoc[i]}&limit=1`;
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
            
            console.log('aa to gaya');
            console.log(response);
            if(response){
             resolve(response);
            }
            else{
                reject('Not Get The Data');
            }   
        })
        prom.push(newpr);
    }
    console.log(prom);
    Promise.all(prom).then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    });

}