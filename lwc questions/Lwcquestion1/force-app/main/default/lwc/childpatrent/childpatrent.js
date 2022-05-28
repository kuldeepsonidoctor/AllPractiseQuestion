import { LightningElement,api,wire } from 'lwc';
import USER_ID from '@salesforce/user/Id';
import parentt from '@salesforce/apex/getchildparent.getallparent'
import childd from '@salesforce/apex/getchildparent.getallchild'
import getalldata from '@salesforce/apex/getchildparent.getallparent'
export default class Childpatrent extends LightningElement {
    
   @api recordId;
    allchild=[];
    allparent=[];
    presentdata=[];
    @wire(parentt)
    alldata({data,error}){
        console.log(data);
        console.log(error);
        this.allparent=data;
        
    }
    @wire(childd)
    alldata({data,error}){
        console.log(data);
        console.log(error);
        this.allchild=data;
    }
    getdata(data){
        this.presentdata='';
        getalldata({name:data,I:this.recordId}).then(data=>{
     this.presentdata=data;
        }).catch(err=>{
            console.log(err);
        });
    }
    

}