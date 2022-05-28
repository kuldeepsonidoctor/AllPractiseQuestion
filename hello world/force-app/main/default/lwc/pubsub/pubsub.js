//First Create A Store Object
const store={}
// Then Create subscribe method
const subscribe=(eventName,callBack)=>{
if(!store[eventName]){
    store[eventName]=new Set();
}
store[eventName].add(callBack);

}

//Create A publish method
const publish=(eventName,payLoad)=>{
    console.log('aaya 2');
if(store[eventName]){
    console.log('aaya 3');
    store[eventName].forEach(callBack=>{
        try{
            callBack(payLoad);
        }
        catch{
            console.error(error);
        }
    })
}
}
//Unsbscibe (not important)
const unsubscribe=(eventName,callBack)=>{
if(store[eventName]){
    store[eventName].delete(callBack);
}
}

export default{subscribe,publish,unsubscribe}