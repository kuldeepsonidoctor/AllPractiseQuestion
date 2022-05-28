import { LightningElement,api } from 'lwc';

export default class TotalTrac extends LightningElement {
    @api trackimage;
    tarcksobj;
    len
    total
    tarcksArray=[]
    get tracks(){
        return this.tarcksobj;;
    }
    @api
    set tracks(data){
        this.len=0 ;
        console.log(data);
        console.log(data.Number_Of_Tracks__c);
        console.log(data.Trains_Schedule__r);
        if(data.Trains_Schedule__r){
            console.log('aaya aaya');
        data.Trains_Schedule__r.forEach(element => {
            this.len++
        });
        console.log(this.len);
    }
       // data.Number_Of_Tracks__c-data.Trains_Schedule__r.length
        this.total=data.Number_Of_Tracks__c-this.len;
        console.log(this.total)
         for(let i=0;i<this.total;i++){
         this.tarcksArray.push(i);
         }
        //  console.log(data.Number_Of_Tracks__c);  
        //  console.log(data.Trains_Schedule__r.length);
         console.log(this.tarcksArray);
        
     
       
    }
    
    
    
    
}